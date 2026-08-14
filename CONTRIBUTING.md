# Welcome to BuidlGuidl Batch 24 Contributing Guide

Thank you for investing your time in contributing to the BuidlGuidl Batch 24 program!

This guide aims to provide an overview of the contribution workflow to help us make the contribution process effective for everyone involved.

## About the Project

The BuidlGuidl Batch 24 program is a comprehensive learning platform teaching builders how to develop decentralized applications. This repository serves as the collaboration hub where batch members work together on issues, submit pull requests, and graduate by completing key milestones.

Read the [README](README.md) to get an overview of the project.

### Vision

The goal of BuidlGuidl Batch 24 is to empower developers with the skills needed to:
- Understand and write Solidity smart contracts
- Deploy contracts to blockchain networks
- Build full-stack dApps with modern web3 technologies
- Collaborate effectively using GitHub and industry best practices

The repo serves as both a learning environment and a live project, combining hands-on smart contract development with frontend integration.

### Project Status

The project is under active development with continuous updates from batch mentors and contributors.

You can view the open Issues, follow the development process, and contribute to the project. We also track progress via [Project Management](https://ppm-sandy-seven.vercel.app/) to visualize batch progress and task allocation.

### Rules

1. All code contributions require an Issue to be created and agreed upon by core contributors before submitting a Pull Request. This ensures proper discussion, alignment, and consensus on the proposal.
2. Contributors must be humans, not bots.
3. First-time contributions must not contain only spelling or grammatical fixes.
4. Comment on issues you intend to work on to avoid duplicate efforts and signal your activity to the team.

## Getting started

You can contribute to this repo in many ways:

- Solve open issues (contract, frontend, documentation)
- Report bugs or feature requests
- Improve the documentation and guides
- Review pull requests from fellow batch members
- Help mentor newer batch members

Contributions are made via Issues and Pull Requests (PRs). A few general guidelines for contributions:

- Search for existing Issues and PRs before creating your own.
- Contributions should only fix/add the functionality in the issue OR address style issues, not both.
- If you're running into an error, please give context. Explain what you're trying to do and how to reproduce the error.
- Please use the same formatting in the code repository. You can configure your IDE to do it by using the prettier / linting config files included in each package.
- If applicable, please edit the README.md file to reflect the changes.

### Issues

Issues should be used to report problems, request a new feature, or discuss potential changes before a PR is created.

#### Solve an issue

Scan through our [existing issues](https://github.com/drQedwards/batch24.buidlguidl.com/issues) to find one that interests you.

Issues are tagged by type and difficulty:
- **(for all)**: Everyone in the batch will complete these on their own
- **(contract)**: Smart contract work involving Solidity coding
- **(front end)**: Frontend improvements and feature development
- **(easy)**: Simple tasks, ideal for beginners
- **(medium)**: Tasks with moderate difficulty
- **(difficult)**: Advanced tasks requiring deeper expertise

If a contributor is working on the issue, they will be assigned to the individual. If you find an issue to work on, **comment on it to indicate you're working on it** and open a PR with a fix for it.

#### Create a new issue

If a related issue doesn't exist, you can open a new issue.

Some tips to follow when you are creating an issue:

- Provide as much context as possible. Over-communicate to give the most details to the reader.
- Include the steps to reproduce the issue or the reason for adding the feature.
- Screenshots, videos, etc., are highly appreciated.
- Use appropriate labels to categorize your issue (type and difficulty)

### Pull Requests

#### Pull Request Process

We follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr)

1. Fork the repo
2. Clone the project
3. Create a new branch with a descriptive name (e.g., `feature/builder-profile-page`, `fix/contract-event-emission`)
4. Commit your changes to the new branch
5. Push changes to your fork
6. Open a PR in our repository and tag one of the maintainers to review your PR

Here are some tips for a high-quality pull request:

- Create a title for the PR that accurately defines the work done.
- Structure the description neatly to make it easy to consume by the readers. For example, you can include bullet points and screenshots instead of having one large paragraph.
- Add the link to the issue if applicable (e.g., "Closes #42").
- Have a good commit message that summarises the work done.
- Run linting and formatting before submitting: `yarn format && yarn lint`

Once you submit your PR:

- We may ask questions, request additional information, or ask for changes to be made before a PR can be merged. These are to make the PR clear for everyone involved and aim to create the highest code quality.
- As you update your PR and apply changes, mark each conversation resolved.
- Be responsive to feedback and questions from reviewers.

Once the PR is approved, we'll "squash-and-merge" to keep the git commit history clean.

### PR Reviews

Starting with Batch 24, outside BuidlGuidl members manage issues and pull requests, but as the batch progresses, **you'll get the opportunity to step into the review role yourself**. 

If you want to take your GitHub skills to the next level:
- Actively review PRs from other batch members
- Participate in discussions about proposed changes
- Provide constructive feedback
- Request changes when necessary

## Useful Resources

- **Scaffold-ETH 2 Docs**: [scaffold-eth.dev](https://scaffold-eth.dev)
- **Solidity Docs**: [docs.soliditylang.org](https://docs.soliditylang.org)
- **Web3 Guide**: [web3.hashnode.com](https://web3.hashnode.com)
- **Fork and Pull Guide**: [GitHub guide to fork-and-pull workflow](https://gist.github.com/ZakGriffith/69d1eb8baebddd7d370b87a65a7e3ec0)
- **Project Progress Tracker**: [https://ppm-sandy-seven.vercel.app/](https://ppm-sandy-seven.vercel.app/)

## Code Style and Quality

- **Formatting**: We use Prettier. Run `yarn format` before committing.
- **Linting**: We use ESLint. Run `yarn lint` to check for issues.
- **Testing**: Run `yarn test` to ensure your changes don't break existing functionality.
- **TypeScript**: We use TypeScript for type safety. Ensure `yarn check-types` passes.

## Need Help?

- Check the existing [GitHub Discussions](https://github.com/drQedwards/batch24.buidlguidl.com/discussions)
- Ask questions in the batch Telegram channel
- Reach out to batch mentors and fellow builders
- Don't hesitate to ask for help—that's what we're here for!

Thank you for being part of BuidlGuidl Batch 24! Let's build something amazing together. 🚀
