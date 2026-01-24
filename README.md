# Welcome to your BuidlGuidl Batch!

🧨 Congratulations on joining a BuidlGuidl Batch! You've completed SpeedRunEthereum and gotten your feet wet in Scaffold-ETH, Solidity coding, deploying contracts, and basic front-end development. Now it's time to take the next step on your educational journey!

🧙‍♂️ Along with your fellow batch members and BuidlGuidl mentors you'll learn how to collaborate, meaningfully contribute to GitHub repositories, create and handle issues and pull requests, follow best practices in version control, and dive deeper into full-scale dApp development.

🔨 You will come out with all the tools needed to actively contribute to open-source projects!

## Introduction

Let’s get you up to speed on what this program is all about and what you can look forward to.
At the heart of it all is this GitHub repository, where you’ll collaborate with your batch members by working on issues and submitting pull requests. To successfully graduate and mint your graduation NFT in [Issue i)](/../../issues/4), make sure you’ve completed [Issue a)](/../../issues/12) and [Issue b)](/../../issues/11), and demonstrated active engagement in tackling other issues as well. If you run into any issues or have any questions, reach out to us in the Telegram group.

Here’s a quick rundown of what you’ll be doing:

1. **Introduce Yourself:** Start by introducing yourself to the batch and mentors in GitHub discussion.
2. **Complete [Issue a)](/../../issues/12):** 'Check in' to our smart contract by writing one of your own.
3. **Move to [Issue b)](/../../issues/11):** Create a personal page and submit it to the batch repository via a pull request (PR).
4. **Choose Open Issues:** After completing the initial tasks, explore and pick other open issues to work on—either individually or by collaborating with other batch members.
5. **Graduate Successfully:** To graduate and mint your Graduation NFT [Issue i)](/../../issues/4), you must complete both [Issue a)](/../../issues/12) and [Issue b)](/../../issues/11), and actively contribute to other issues with your best effort. Minting will be unlocked at the end of the Batch.

We aim to empower you with the skills of dApp development and collaborating with other developers. Remember, we’ll be with you every step of the way. Let’s build something amazing together!

## Getting Started

First, since our contract is deployed on the Arbitrum chain, we’ve ensured you have some Arbitrum Eth by sending a starting balance to the ETH address linked to your Builder profile. If you need additonal Eth you can bridge some mainnet Eth to the Arbitrum chain using the [Arbitrum Bridge](https://bridge.arbitrum.io/) or transfer from other networks using alternative bridges. For further information or support, feel free to reach out in the Telegram group.

Then you will head to the open Introductions discussion in your batch's GitHub repo and make a post introducing yourself. Also feel free to introduce yourself in the batch Telegram channel as well if you want.

Next head to the Issues tab of your batch's Github repo. Once you complete Issue #1, move on to Issue #2. Everyone will complete the first two issues on their own, then can start taking on the other issues. Work and collaborate with your batch members in both Github and Telegram for a real-world experience. If you're working on an issue, looking to collaborate on an issue, or want feedback on an issue or pull request, shout out to your batch!

> 😲 Github can seem daunting! Take a look at our detailed guide on the "Fork and Pull" Github process [here](https://gist.github.com/ZakGriffith/69d1eb8baebddd7d370b87a65a7e3ec0).

## Running the Repo

### Prerequisites

Before you begin, you need to install the following tools:
- Node (>= v20.18.3)
- Yarn (v1 or v2+)
- Git

To run the subgraph locally you also need:
- Docker

### Installing dependencies

- `yarn install` - run on root directory
- `cd packages/subgraph` and then `yarn install` - install subgraph dependencies


### Running local environment

1. Start your local hardhat node: `yarn chain` or `yarn chain:local` _if you plan to run subgraph locally_
2. Deploy contracts: `yarn deploy`
3. Change the dApp chain to hardhat in scaffold.config.ts (targetNetwork should be `chains.hardhat`)
4. Start the front-end: `yarn start`

#### If you want to run the subgraph locally:
To allow local enviroment to hit the local subgraph, create a .env.local with this variable:
`NEXT_PUBLIC_SUBGRAPH_URL=http://localhost:8000/subgraphs/name/buidlguidl/batch23-subgraph`

5. `yarn subgraph:clean-node` cleans prev data (we will run and deploy everything from scratch)
6. `yarn subgraph:local-prepare` This will change the subgraph files so that they point to local deployed contracts
7. `yarn subgraph:run-node` spins up a local graph node (analogous to yarn chain)
8. `yarn subgraph:local-create` Compiles the subgraph
9. `yarn subgraph:local-ship` Deploys the subgraph on our local graph node
10. `yarn subgraph:stop-node` Stops our node (once we finsish developing)


Go to http://localhost:3000/. You should see SE-2 app.


### Selecting Issues to Tackle

Issues will be tagged with the type of work entailed, so choose based on the work you would like to contribute. When you decide on one, leave a comment on it that indicates you are working on that issue which helps avoid duplication of efforts. It's also a great way to demonstrate your commitment to the task.

Some examples of the issue tags are:

- **(for all)**: These are issues that everyone in the batch will complete on their own.
- **(contract)**: Smart contract work involving Solidity coding.
- **(front end)**: Work to improve the front end of your batch's site.
- **(easy)**: Simple tasks, ideal for beginners.
- **(medium)**: Tasks with moderate difficulty.
- **(difficult)**: Advanced tasks requiring deeper expertise.

## GitHub Workflow

Something important to learn from this is the workflow when collaborating in Github. Here are some good Github best practices:

- **Commenting on Issues:** Comment on an Issue if you are working on it to avoid duplicating work. You can also collaborate with others on it. If you run into problems or questions, reach out!
- **Issue and PR Descriptions:** In the descriptions of issues and pull requests, try to be as descriptive as possible. Include any relevant information on the problem being solved, and what is being accomplished by any new code you have added. Screenshots and videos can be very helpful with this. This detailed approach makes it easier for anyone to review and handle PRs effectively. And if there is a template for the PR, make sure to follow it!

> 😲 Github can seem daunting! Take a look at our detailed guide on the "Fork and Pull" Github process [here](https://gist.github.com/ZakGriffith/69d1eb8baebddd7d370b87a65a7e3ec0)

You will all start out by completing issues, but this will change over time and you may want to start creating your own issues for your batch to help with. This is critical in the learning process! Have an idea, bug report, or discussion... Create an Issue!

> 🚦 Remember: Batch members will have a variety of different experience levels, so contribute where you can, but also feel free to try something new! If you run into roadblocks and problems, talk it out with other members of your batch and the BuidlGuidl mentors!

### PR Reviews

👷‍♂️ This batch will start with outside BuidlGuidl members managing the issues and pull requests, but as the batch progresses you'll get the opportunity to step into this role yourself.

So if you want to take your GitHub skills to the next level, start actively engaging in the PR management process. This includes reviewing PRs, participating in discussions, requesting changes, and eventually merging them. This is all part of the GitHub workflow and is very important for effective, real-world collaboration on open-source projects! You may have to shout out to your mentors to get access to accomplish this.

> Remember that Continuous Integration/Continuous Deployment (CI/CD) is a crucial aspect of the development process, ensuring that changes are tested and deployed efficiently. The project likely includes automated CI/CD pipelines. These are set up to run tests, check code quality, and deploy updates automatically. It helps maintain code quality and ensures that contributions do not introduce errors.

## After Graduation

After successfully graduating, we have futher challenges for you to tackle. If you haven't done all the SpeedRunEthereum challenges, give them a try.
Then there is the ETH Tech Tree and also our Capture the Flag (CTF) challenges to hone and practice your solidity skills.
If you run through a couple of these and want to continue building, you’ll have the opportunity to apply for a builder’s grant to develop a full-scale dApp! Acceptance will depend on both your contributions during the batch program and the description in the application of your project. For more details on the process and how to apply, please checkout the following [link](https://buidlguidl.notion.site/BuidlGuidl-Grant-Application-3aeae22606944cbfa91b7f958dd38a9b) and if you have questions, feel free to approach us.

## Useful Resources

To help you make the most of your BuidlGuidl Batch experience, we've gathered some essential resources and guides:

- **Scaffold-Eth2**: A modern, clean version of Scaffold-ETH with NextJS, RainbowKit, Wagmi, and Typescript. Supports Hardhat and Foundry. You can find the repo [here](https://github.com/scaffold-eth/scaffold-eth-2)
- **Austin Griffith's YouTube**: https://www.youtube.com/channel/UC_HI2i2peo1A-STdG22GFsA/videos
- **Scaffold-ETH2 Contribution Guide**: If you're looking to contribute to our open-source projects, this guide provides valuable insights on how to get started. Check it out [here](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md).
- **PR Guide**: For a detailed understanding of the pull request process, our guide is a great resource. You can find it [here](https://gist.github.com/ZakGriffith/69d1eb8baebddd7d370b87a65a7e3ec0).

The Scaffold-ETH2 and PR guides are a great place to start, but you may have to mold the instructions to suit your needs!
