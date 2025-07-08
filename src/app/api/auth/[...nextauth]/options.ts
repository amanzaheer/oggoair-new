import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "***********",
        },
        verified: {
          label: "Verified",
          type: "text",
          placeholder: "verified",
        },
        userId: {
          label: "userId",
          type: "text",
          placeholder: "userId",
        },
      },
      async authorize(credentials) {
        // console.log(credentials);
        if (credentials?.verified) {
          if (credentials?.email) {
            // Add logic here to look up the user from the credentials supplied
            const res = await axios.post(
              `${process.env.API_LINK}/api/users/verified-email-login`,
              {
                email: credentials.email,
              }
            );
            if (res) {
              // Any object returned will be saved in `user` property of the JWT
              return res.data.data;
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null;
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          } else if (credentials?.userId) {
            const res = await axios.post(
              `${process.env.API_LINK}/api/users/verified-email-login`,
              {
                userId: credentials.userId,
              }
            );
            if (res) {
              // Any object returned will be saved in `user` property of the JWT
              return res.data.data;
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null;
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        } else {
          // Add logic here to look up the user from the credentials supplied
          const res = await axios.post(
            `${process.env.API_LINK}/api/users/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );
          if (res) {
            // Any object returned will be saved in `user` property of the JWT
            return res.data.data;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account?.provider === "google") {
          console.log("google signin");

          const res = await axios.post(
            `${process.env.API_LINK}/api/users/register-without-verification`,
            {
              email: user.email,
              name: user.name,
              image: user.image,
              id: user.id,
              userType: "google",
            }
          );

          return true;
        } else if (account?.provider === "credentials") {
          // Callback function called after credentials provider sign-in
          console.log(
            "Callback function called after credentials provider sign-in"
          );
        }
        return true;
      } catch (error) {
        console.log(error);
        throw new Error("something went wrong");
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};
