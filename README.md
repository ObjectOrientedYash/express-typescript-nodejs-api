# Node.js TypeScript Backend

This repository contains a Node.js backend written in TypeScript. It serves as a foundation for building robust backend services.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js installed on your machine
-   npm or yarn package manager installed

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Navigate into the project directory:

    ```bash
    cd nodejs-typescript-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Building

To build the project, run the following command:

```bash
npm run build
```

This command compiles TypeScript files (`*.ts`) in the `src` directory to JavaScript files (`*.js`) in the `dist` directory.

## Starting the Server

To start the server, run the following command:

```bash
npm start
```

This command runs the compiled JavaScript file `server.js` located in the `dist` directory.

## Development Mode

During development, you can use the following command to run the server with hot-reloading enabled:

```bash
npm run dev
```

This command uses `nodemon` to watch for changes in TypeScript files and automatically restarts the server.

## License

This project is licensed under the [MIT License](LICENSE).
