import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

<<<<<<< HEAD
export const authOptions ={
=======
const authProvider ={
>>>>>>> a7a5c9e109c18f3d67315a859f86fd3070dfcd80
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET_GOOGLE,
    }),

    GitHubProvider({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    })
  ]
}
<<<<<<< HEAD

const handler = NextAuth(authOptions)
=======
const handler = NextAuth(authProvider)
>>>>>>> a7a5c9e109c18f3d67315a859f86fd3070dfcd80
export { handler as GET, handler as POST };