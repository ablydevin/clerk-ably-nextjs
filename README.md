The accompanying source code for our tutorial on [how to authenticate a Next.js Route Handler using Clerk](https://ably.com/blog/how-to-use-clerk-to-authenticate-next-js-route-handlers).


Check out the tutorial by following the link above OR run the demo with the following instructions.

## Running the demo
Want to run the demo and check it out? Here's what to do -

First, download the repository with Git:

```
git clone https://github.com/ablydevin/clerk-ably-nextjs
cd clerk-ably-nextjs
```

Next, create a `.env` file with your credentials:

```
NEXT_ABLY_API_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```
- Create an Ably account [here](https://ably.com/sign-up).
- Create a Clerk account [here](https://dashboard.clerk.com/sign-up) (️remember to enable the `Username` attribute for your Clerk app).


Install the npm dependencies then run the app in dev mode:

```
npm install
npm run dev
```