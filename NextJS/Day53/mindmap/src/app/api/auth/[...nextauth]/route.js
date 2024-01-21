import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';

export const authOptions ={
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID_GOOGLE,
            clientSecret: process.env.CLIENT_SECRET_GOOGLE,
        })
    ]
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};