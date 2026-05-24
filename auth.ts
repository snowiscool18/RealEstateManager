import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import { prisma } from "@/lib/prisma"

// TODO: Add real email provider (Resend, Nodemailer, etc.) for magic links in production
// For now this is prepared for Email provider + future Credentials if needed

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database", // Recommended when using Prisma adapter
  },
  pages: {
    signIn: "/login",
    // signUp: "/register", // We can add a custom register page later
  },
  providers: [
    // Email magic links (recommended for MVP)
    // Requires EMAIL_SERVER and EMAIL_FROM env vars
    // We'll configure a real provider (Resend recommended) in a later step
    // {
    //   id: "email",
    //   type: "email",
    //   // ... configuration
    // },

    // Placeholder - we'll enable proper providers once email service is chosen
  ],
  callbacks: {
    async session({ session, user }) {
      // Add user id to session for easy access
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
})
