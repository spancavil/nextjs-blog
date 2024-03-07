This is a blog app with authentication.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Technologies implemented

* NextJS: React framework to generate interfaces from the server
* NextAuth: Authentication through generation of credentials (email, username and password) and through SSO (Github)
* Mongoose: MongoDB Object Modeling for Node. It is the library used to connect to the MongoDB database and create/modify/delete users and posts.
* React Hook Form: Management of forms and states in a very simple way.
* Sonner: Elegant and simple sending of notifications.
