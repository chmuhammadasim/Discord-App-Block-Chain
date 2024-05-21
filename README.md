# Dappcord

Dappcord is a decentralized application (DApp) that leverages blockchain technology to create a secure and transparent communication platform. This project utilizes smart contracts for managing user interactions and messages, ensuring a trustless and decentralized environment. Below you'll find a comprehensive guide to the technology stack, tools, setup, and running the project.

## Technology Stack & Tools

- **Solidity**: Used for writing smart contracts and tests.
- **JavaScript**: Employed in the React framework for building the frontend and for testing.
- **[Hardhat](https://hardhat.org/)**: A development framework for Ethereum that facilitates tasks like compiling, testing, and deploying smart contracts.
- **[Ethers.js](https://docs.ethers.io/v5/)**: A library for interacting with the Ethereum blockchain.
- **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Socket.io](https://socket.io/)**: A library for real-time, bidirectional communication between clients and servers.

## Requirements For Initial Setup

Before setting up the project, ensure you have the following installed:

- **[NodeJS](https://nodejs.org/en/)**: JavaScript runtime for server-side development.

## Setting Up

Follow these steps to set up the project on your local machine:

### 1. Clone/Download the Repository

Clone the repository using Git:

```bash
$ git clone https://github.com/chmuhammadasim/Discord-App-Block-Chain.git
```

Or download the ZIP file from the repository page and extract it.

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
$ npm install
```

### 3. Run Tests

To ensure everything is set up correctly, run the tests:

```bash
$ npx hardhat test
```

### 4. Start Hardhat Node

Start a local blockchain node for development purposes:

```bash
$ npx hardhat node
```

### 5. Run Deployment Script

Deploy the smart contracts to the local Hardhat network. Open a separate terminal window and execute:

```bash
$ npx hardhat run ./scripts/deploy.js --network localhost
```

### 6. Start Socket.io Server

Start the Socket.io server for handling real-time communication:

```bash
$ node server.js
```

### 7. Start Frontend

In another terminal, start the React frontend application:

```bash
$ npm run start
```

## Project Structure

Here's a brief overview of the project's structure:

- **contracts/**: Contains the Solidity smart contracts.
- **scripts/**: Deployment scripts for the smart contracts.
- **test/**: Tests for the smart contracts.
- **client/**: Contains the React frontend code.
- **server.js**: The Socket.io server script.

## Contribution Guidelines

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.io/v5/)
- [React.js](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [NodeJS](https://nodejs.org/en/)

---

Feel free to reach out if you have any questions or need further assistance! Happy coding!
