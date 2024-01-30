import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
// import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE,
    }),
    Auth0Provider({
      clientId: process.env.CLIENT_ID_AUTH0,
      clientSecret: process.env.CLIENT_SECRET_AUTH0,
      
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
