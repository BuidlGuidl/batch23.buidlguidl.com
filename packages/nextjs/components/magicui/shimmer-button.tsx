"use client";

import React, { CSSProperties } from "react";

export interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "#ffffff",
            shimmerSize = "0.05em",
            shimmerDuration = "3s",
            borderRadius = "100px",
            background = "rgba(0, 0, 0, 1)",
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                style={
                    {
                        "--shimmer-color": shimmerColor,
                        "--shimmer-size": shimmerSize,
                        "--shimmer-duration": shimmerDuration,
                        "--border-radius": borderRadius,
                        "--background": background,
                    } as CSSProperties
                }
                className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)] transition-all duration-300 hover:scale-105 ${className}`}
                ref={ref}
                {...props}
            >
                <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        {/* Shimmer */}
                        <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--shimmer-size)*0.5)),transparent_0,var(--shimmer-color)_var(--shimmer-size),transparent_var(--shimmer-size))] [translate:0_0]" />
                    </div>
                </div>
                {children}

                {/* Highlight */}
                <div className="absolute inset-0 rounded-[100px] bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--shimmer-size)*0.5),rgba(255,255,255,0.05)_calc(var(--shimmer-size)*0.5))] bg-[length:200%_100%] bg-[position:200%_0] transition-[background-position] duration-500 group-hover:bg-[position:-100%_0]" />

                <style jsx>{`
          @keyframes shimmer-slide {
            to {
              translate: calc(100cqw - 100%) 0;
            }
          }

          @keyframes spin-around {
            to {
              transform: rotate(1turn);
            }
          }

          .animate-shimmer-slide {
            animation: shimmer-slide var(--shimmer-duration) ease-in-out infinite
              alternate;
          }

          .animate-spin-around {
            animation: spin-around calc(var(--shimmer-duration) * 2) linear infinite;
          }
        `}</style>
            </button>
        );
    }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
