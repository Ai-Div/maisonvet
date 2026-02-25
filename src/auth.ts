import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Allowlist: set ALLOWED_EMAILS (comma-separated) and/or ALLOWED_DOMAINS in Vercel to control who can sign in.
const ALLOWED_EMAILS = process.env.ALLOWED_EMAILS?.split(",").map((e) => e.trim()).filter(Boolean) ?? [
  "hello@maisonvet.com",
  "tim@div.digital",
  "ai@div.digital",
];
const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS?.split(",").map((d) => d.trim()).filter(Boolean) ?? [
  "div.digital",
  "maisonvet.com",
];

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
      // Not allowlisted — NextAuth redirects to sign-in with ?error=AccessDenied
      return false;
    },
  },
});
