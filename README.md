# NextAuth.js GitHub Authentication Project

This project is an example of how to implement authentication in a web application using NextAuth.js and the GitHub authentication strategy.

## Features

- Login with your GitHub account.
- Access to public GitHub profile data post-authentication.
- Basic application structure using React.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. **Clone this repository** on your local machine:

    ```bash
    git clone git@github.com:eduveliz/auth-next-github.git
    cd auth-next-github
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Create a GitHub Application**:

    - Visit [GitHub Developer Settings](https://github.com/settings/apps) and create a new application.
    - Set the authorization callback URL as `http://localhost:3000/api/auth/callback/github`.
    - Once the application is created, obtain the **Client ID** and **Client Secret**.

4. **Configure environment variables**:

    - Create a `.env.local` file in the project root.
    - Add the following variables with your GitHub application values:

    ```plaintext
    NEXT_AUTH_SECRET=Generate ussing openssl rand -base64 32 on console
    GITHUB_CLIENT_ID=YOUR_CLIENT_ID
    GITHUB_CLIENT_SECRET=YOUR_CLIENT_SECRET
    ```

5. **Run the application**:

    ```bash
    npm run dev
    ```

   The application should be accessible at `http://localhost:3000`.

## Contributions

Contributions are welcome! If you find issues or improvements, feel free to open an issue or submit a pull request.

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [GitHub Authentication Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)

## License

This project is under the MIT License.
