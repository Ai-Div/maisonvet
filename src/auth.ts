import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ALLOWED_EMAILS = ["hello@maisonvet.com", "tim@div.digital", "ai@div.digital"];
const ALLOWED_DOMAINS = ["div.digital", "maisonvet.com"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    signIn({ user }) {
      if (!user.email) return false;
      const domain = user.email.split("@")[1];
      if (ALLOWED_DOMAINS.includes(domain)) return true;
      if (ALLOWED_EMAILS.includes(user.email)) return true;
      return false;
    },
  },
});
