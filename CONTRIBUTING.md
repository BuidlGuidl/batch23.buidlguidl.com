# Contributing to Batch 24

Thank you for investing your time in contributing to BuidlGuidl Batch 24!

This guide aims to provide an overview of the contribution workflow to help make the contribution process effective for everyone involved.

## About the Project

Batch 24 is a cohort-based learning program for developers who want to build decentralized applications on Ethereum. It combines the power of Scaffold-ETH 2 with collaborative development practices to help developers grow their skills in smart contract development, frontend integration, and open-source collaboration.

Read the [README](README.md) to get an overview of the project.

### Vision

The goal of Batch 24 is to provide a learning environment where developers:
- Master Ethereum dApp development
- Learn collaborative development practices
- Contribute meaningfully to open-source projects
- Build a network of fellow developers
- Graduate with a portfolio of contributions

### Project Status

The project is under active development. You can view open Issues, follow the development process, and contribute to the project.

### Rules

1. All code contributions require an Issue to be created and discussed before submitting a Pull Request. This ensures proper discussion, alignment, and consensus on the proposed changes.
2. Contributors must be humans, not bots.
3. First-time contributions must not contain only spelling or grammatical fixes.
4. Be respectful and constructive in all interactions.

## Getting Started

You can contribute to this repo in many ways:

- Solve open issues
- Report bugs or feature requests
- Improve the documentation
- Help review pull requests
- Share knowledge in discussions

Contributions are made via Issues and Pull Requests (PRs). Here are some general guidelines:

- Search for existing Issues and PRs before creating your own
- Contributions should only fix/add the functionality in the issue OR address style issues, not both
- If you're running into an error, provide context and steps to reproduce
- Follow the code style and formatting conventions
- Edit documentation if your changes require it

## Issues

Issues should be used to report problems, request features, or discuss potential changes.

### Solve an Existing Issue

1. Browse [existing issues](https://github.com/drQedwards/batch24.buidlguidl.com/issues)
2. Comment on an issue to indicate you're working on it
3. Fork the repository and create a branch
4. Make your changes
5. Open a Pull Request referencing the issue

### Create a New Issue

If a related issue doesn't exist:

1. Use a clear, descriptive title
2. Provide as much context as possible
3. Include steps to reproduce (for bugs)
4. Add relevant labels and milestones
5. Screenshots or videos are highly appreciated

## Pull Requests

### Pull Request Process

We follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr):

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch with a descriptive name:
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/issue-description
   ```
4. **Make** your changes following code style guidelines
5. **Commit** with clear, descriptive messages:
   ```bash
   git commit -m "feat: Add amazing feature"
   git commit -m "fix: Resolve issue with X"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open** a PR and tag reviewers for feedback

### High-Quality Pull Request Checklist

- [ ] Title clearly describes the work done
- [ ] Description includes context and motivation
- [ ] Linked to related issue(s)
- [ ] Tests pass locally (`yarn test`)
- [ ] Code follows project style (`yarn format`, `yarn lint`)
- [ ] Screenshots included for UI changes
- [ ] Documentation updated if needed
- [ ] Commits are well-organized and messaged

### After Submitting a PR

- Respond promptly to review feedback
- Mark conversations as resolved when addressed
- Request re-review after making changes
- Be patient and collaborative in discussions

Once approved, your PR will be "squash-and-merged" to keep git history clean.

## Code Style & Quality

### Formatting

We use **Prettier** and **ESLint** to maintain consistent code style:

```bash
# Format all files
yarn format

# Lint all files
yarn lint
```

Your IDE can be configured to do this automatically. See configuration files:
- `.prettierrc` - Prettier configuration
- `.eslintrc.js` - ESLint configuration

### Solidity Guidelines

For smart contracts:
- Follow [Solidity style guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- Use `pragma solidity ^0.8.0` or appropriate version
- Include NatSpec documentation for functions
- Write tests for all public functions
- Check for security vulnerabilities

### TypeScript/React Guidelines

For frontend code:
- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Keep components small and focused
- Use the provided Scaffold-ETH hooks and components
- Write meaningful variable and function names

## Testing

### Smart Contract Tests

```bash
# Run all tests
yarn test

# Run tests with gas reporting
REPORT_GAS=true yarn test
```

### Frontend Testing

Test locally before submitting:
```bash
# Build frontend
yarn next:build

# Check types
yarn next:check-types

# Lint code
yarn lint
```

## Documentation

Always update documentation if your changes affect:
- User-facing functionality
- Setup or installation process
- Available commands or APIs
- Project structure or configuration

Documentation should be:
- Clear and concise
- Up-to-date with code
- Include examples where helpful
- Use proper Markdown formatting

## Community Standards

### Be Respectful

We are committed to providing a welcoming and inclusive environment:
- Be professional and respectful in all interactions
- Listen to different perspectives
- Provide constructive feedback
- Help newer contributors learn

### Ask for Help

- Use GitHub Discussions for questions
- Comment on issues for clarification
- Reach out to mentors when stuck
- No question is too basic!

### Share Knowledge

- Help review others' pull requests
- Share useful resources and learnings
- Document solutions to common problems
- Mentor newer batch members

## Issue Tags Reference

- **(for all)** - Required tasks everyone must complete
- **(contract)** - Smart contract development
- **(front end)** - Frontend and UI work
- **(easy)** - Beginner-friendly, small scope
- **(medium)** - Moderate complexity
- **(difficult)** - Advanced tasks
- **(docs)** - Documentation and guides
- **(bug)** - Bug fixes
- **(enhancement)** - Feature requests
- **(good first issue)** - Great for newcomers

## Graduation & Milestones

To graduate from Batch 24:
1. Complete all "(for all)" issues
2. Contribute meaningfully to additional issues
3. Help review pull requests from peers
4. Demonstrate collaborative spirit
5. Mint your Graduation NFT

## Resources

- **Scaffold-ETH 2:** [Documentation](https://docs.scaffoldeth.io)
- **Solidity:** [Official Docs](https://docs.soliditylang.org)
- **Ethereum:** [ethereum.org/developers](https://ethereum.org/en/developers)
- **Git & GitHub:** [GitHub Guides](https://guides.github.com)
- **The Graph:** [Subgraph Docs](https://thegraph.com/docs)

## Recognition

We recognize and appreciate all contributions! Top contributors may receive:
- Badges and recognition on the README
- Feature mentions in batch announcements
- Opportunities to mentor future batches
- Access to advanced learning materials

---

Thank you for being part of Batch 24! Happy building! 🚀
