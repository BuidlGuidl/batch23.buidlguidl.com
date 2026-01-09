"use client";

import { useEffect, useRef, useState } from "react";

interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
}

export default function Particles({
    className = "",
    quantity = 50,
    staticity = 50,
    ease = 50,
    refresh = false,
    color = "#ffffff",
    vx = 0,
    vy = 0,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<any[]>([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const mouseMoveRef = useRef(false);
    const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);

        return () => {
            window.removeEventListener("resize", initCanvas);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color]);

    useEffect(() => {
        onMouseMove();
    }, [canvasSize.w, canvasSize.h]);

    useEffect(() => {
        initCanvas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);

    const initCanvas = () => {
        resizeCanvas();
        drawParticles();
    };

    const onMouseMove = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize;
            const x = mousePosition.current.x - rect.left - w / 2;
            const y = mousePosition.current.y - rect.top - h / 2;
            const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouseMoveRef.current = true;
            }
        }
    };

    type Circle = {
        x: number;
        y: number;
        translateX: number;
        translateY: number;
        size: number;
        alpha: number;
        targetAlpha: number;
        dx: number;
        dy: number;
        magnetism: number;
    };

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            setCanvasSize({
                w: canvasContainerRef.current.offsetWidth,
                h: canvasContainerRef.current.offsetHeight,
            });
            canvasRef.current.width = canvasContainerRef.current.offsetWidth * dpr;
            canvasRef.current.height = canvasContainerRef.current.offsetHeight * dpr;
            canvasRef.current.style.width = `${canvasContainerRef.current.offsetWidth}px`;
            canvasRef.current.style.height = `${canvasContainerRef.current.offsetHeight}px`;
            context.current.scale(dpr, dpr);
        }
    };

    const circleParams = (): Circle => {
        const x = Math.floor(Math.random() * canvasSize.w);
        const y = Math.floor(Math.random() * canvasSize.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 2) + 1;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
        };
    };

    const drawCircle = (circle: Circle, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);
            context.current.fillStyle = `rgba(${hexToRgb(color)}, ${alpha})`;
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.current.push(circle);
            }
        }
    };

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.w, canvasSize.h);
        }
    };

    const drawParticles = () => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    };

    const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number
    ): number => {
        const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
        clearContext();
        circles.current.forEach((circle: Circle, i: number) => {
            // Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size, // distance from left edge
                canvasSize.w - circle.x - circle.translateX - circle.size, // distance from right edge
                circle.y + circle.translateY - circle.size, // distance from top edge
                canvasSize.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
            );
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx + vx;
            circle.y += circle.dy + vy;
            circle.translateX +=
                (mousePosition.current.x / (staticity / circle.magnetism) -
                    circle.translateX) /
                ease;
            circle.translateY +=
                (mousePosition.current.y / (staticity / circle.magnetism) -
                    circle.translateY) /
                ease;

            if (
                circle.x < -circle.size ||
                circle.x > canvasSize.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.h + circle.size
            ) {
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                const newCircle = circleParams();
                drawCircle(newCircle);
            } else {
                drawCircle(
                    {
                        ...circle,
                        x: circle.x,
                        y: circle.y,
                        translateX: circle.translateX,
                        translateY: circle.translateY,
                        alpha: circle.alpha,
                    },
                    true
                );
            }
        });
        window.requestAnimationFrame(animate);
    };

    const hexToRgb = (hex: string): string => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
            : "255, 255, 255";
    };

    return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}
