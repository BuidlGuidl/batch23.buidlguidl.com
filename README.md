# Welcome to BuidlGuidl Batch 24!

🧨 Congratulations on joining BuidlGuidl Batch 24! You've completed SpeedRunEthereum and gotten your feet wet in Scaffold-ETH, Solidity coding, deploying contracts, and basic front-end development.

🧙‍♂️ Along with your fellow batch members and BuidlGuidl mentors you'll learn how to collaborate, meaningfully contribute to GitHub repositories, create and handle issues and pull requests, and work as a distributed team.

🔨 You will come out with all the tools needed to actively contribute to open-source projects!

## Introduction

Let's get you up to speed on what this program is all about and what you can look forward to.

At the heart of it all is this GitHub repository, where you'll collaborate with your batch members by working on issues and submitting pull requests. To successfully graduate and mint your graduation NFT, you'll need to complete a series of tasks and actively contribute to the codebase.

Here's a quick rundown of what you'll be doing:

1. **Introduce Yourself:** Start by introducing yourself to the batch and mentors in GitHub discussions.
2. **Complete Initial Tasks:** Begin with foundational issues marked as "(for all)" to get familiar with the workflow.
3. **Create Your Contributions:** Build smart contracts, create UI components, or contribute to documentation.
4. **Collaborate:** Work with other batch members on larger issues and features.
5. **Graduate Successfully:** Complete all required tasks and active contributions to mint your Graduation NFT.

We aim to empower you with the skills of dApp development and collaborating with other developers. Remember, we'll be with you every step of the way. Let's build something amazing together!

## Getting Started

### Prerequisites

- Node.js >= 20.18.3
- Yarn 3.2.3+
- Git
- A text editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/drQedwards/batch24.buidlguidl.com.git
   cd batch24.buidlguidl.com
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the local blockchain**
   ```bash
   yarn chain
   ```

4. **In another terminal, deploy the contracts**
   ```bash
   yarn deploy
   ```

5. **In a third terminal, start the frontend**
   ```bash
   yarn start
   ```

The application will be available at `http://localhost:3000`

### Project Structure

```
batch24.buidlguidl.com/
├── packages/
│   ├── hardhat/          # Smart contracts and deployment scripts
│   ├── nextjs/           # Frontend application
│   └── subgraph/         # GraphQL subgraph for indexing
├── README.md             # This file
├── CONTRIBUTING.md       # Contribution guidelines
├── package.json          # Root package configuration
└── yarn.lock             # Dependency lock file
```

## Tech Stack

- **Smart Contracts:** Solidity (Hardhat framework)
- **Frontend:** Next.js with React, TypeScript
- **Web3 Integration:** Wagmi, RainbowKit, Viem
- **Styling:** Tailwind CSS, DaisyUI
- **Indexing:** The Graph (Subgraph)
- **Package Manager:** Yarn Workspaces

## Common Commands

### Smart Contracts
```bash
yarn chain              # Start local blockchain
yarn compile           # Compile Solidity contracts
yarn deploy            # Deploy contracts to local network
yarn test              # Run contract tests
yarn hardhat:verify    # Verify contracts on block explorer
```

### Frontend
```bash
yarn start             # Start development server
yarn build             # Build for production
yarn lint              # Run linting
yarn format            # Format code with Prettier
```

### Development
```bash
yarn format            # Format all code
yarn lint              # Lint all packages
```

## GitHub Workflow

### Selecting Issues to Tackle

Issues will be tagged with the type of work entailed, so choose based on the work you would like to contribute. When you decide on one, leave a comment on it indicating you are working on that issue.

**Issue Tags:**
- **(for all):** Required tasks everyone must complete
- **(contract):** Smart contract work involving Solidity coding
- **(front end):** Frontend improvements and UI work
- **(easy):** Beginner-friendly tasks
- **(medium):** Moderate difficulty tasks
- **(difficult):** Advanced tasks requiring deeper expertise
- **(docs):** Documentation and guides

### Pull Request Process

We follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr):

1. Fork the repository (if you haven't already)
2. Clone your fork locally
3. Create a new branch with a descriptive name: `git checkout -b feature/your-feature-name`
4. Make your changes and commit with clear messages
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a Pull Request against the main repository
7. Tag reviewers and wait for feedback

### Good PR Practices

- Create a clear title that describes the work done
- Write a detailed description with context
- Link to related issues if applicable
- Include screenshots for UI changes
- Keep commits organized and well-messaged
- Respond to review feedback promptly

## Useful Resources

- **Scaffold-ETH 2 Docs:** [https://docs.scaffoldeth.io](https://docs.scaffoldeth.io)
- **Solidity Documentation:** [https://docs.soliditylang.org](https://docs.soliditylang.org)
- **OpenZeppelin Contracts:** [https://docs.openzeppelin.com/contracts](https://docs.openzeppelin.com/contracts)
- **Ethereum Development:** [https://ethereum.org/en/developers](https://ethereum.org/en/developers)
- **The Graph Documentation:** [https://thegraph.com/docs](https://thegraph.com/docs)
- **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)

## Getting Help

- **GitHub Discussions:** Use discussions to ask questions and share ideas
- **Issues:** Report bugs or request features via issues
- **Discord/Telegram:** Connect with batch members for real-time support

## License

MIT License - See LICENSE file for details
