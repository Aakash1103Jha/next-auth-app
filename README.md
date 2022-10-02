# Next Auth App

## A simple application using `next-auth`, implementing `credentials` provider.

## Getting Started

-   Clone or download the project code.
-   Install dependencies by running `npm install` in the project root directory.
-   Run `npm run dev` to start up the development server.
-   Run `npm run build && npm start` to first build and then start the app in production mode.

## Configurations

Add these variables in your `.env` file before running the app:

-   `MONGODB_URI`
-   `NEXTAUTH_URL`
-   `NEXTAUTH_SECRET`

## Structure

-   Homepage `/` is where you get `SIGN IN` and `SIGN UP` button.
-   Click the `SIGN IN` button to be taken to the auth page to enter your credentials - `email` and `password`.
-   When you finally submit, for now, nothing actually happens in terms of logic, though every thing is in place. For the actual logic to take over, open `./pages/api/auth/[...nextauth].ts` and change `return {email}` to `return null`.
-   With this, once `email` and `password` is submitted, `MongoDB` will come into play, perform all the validations and work as it should.

## Challenges

<span style="color: red; font-size: 14px">This app has already been deployed on Vercel, but `credentials` provider keeps failing with `FUNCTION_INVOCATION_TIMEOUT` error. Working on a workaround/solution.</span>
