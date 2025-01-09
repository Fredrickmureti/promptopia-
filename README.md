# Share Prompts

Share Prompts is a web application that allows users to share and explore creative prompts. This project is built using Next.js, React, and Tailwind CSS, with MongoDB as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Fredrickmureti/share_prompts.git
    cd share_prompts
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables. Create a `.env.local` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    NEXTAUTH_URL=http://localhost:3000
    ```

## Usage

To start the development server, run:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs the linter.

## Environment Variables

- `MONGODB_URI`: The URI for connecting to your MongoDB database.
- `NEXTAUTH_URL`: The URL of your Next.js application.

## Dependencies

- `bcrypt`: ^5.1.1
- `mongodb`: ^6.12.0
- `mongoose`: ^8.9.3
- `next`: 15.1.4
- `next-auth`: ^4.24.11
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `autoprefixer`: 10.4.14

## Dev Dependencies

- `postcss`: ^8
- `prettier`: ^3.4.2
- `tailwindcss`: ^3.4.1

## License
