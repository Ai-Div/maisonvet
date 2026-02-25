import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const metadata = {
  title: "Sign In — Maison Vet",
  description: "Sign in to access the Maison Vet team dashboard.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  const { callbackUrl } = await searchParams;

  // Already signed in — send them where they were going
  if (session?.user) {
    redirect(callbackUrl ?? "/dashboard");
  }

  return (
    <main
      id="primary-content"
      role="main"
      tabIndex={-1}
      className="outline-none min-h-screen bg-green-deep flex items-center justify-center px-6"
      itemScope
      itemType="https://schema.org/WebPage"
      data-agent-purpose="authentication-gate"
    >
      <article
        className="w-full max-w-sm bg-green-mid/50 border border-white/10 rounded-2xl p-10 text-center"
        data-agent-purpose="sign-in-form"
        itemScope
        itemType="https://schema.org/LoginAction"
      >
        <a
          href="/"
          rel="home"
          aria-label="Return to Maison Vet homepage"
          className="inline-block font-serif text-3xl text-gold tracking-wide mb-8"
        >
          Maison Vet
        </a>

        <h1 className="font-serif text-xl text-cream mb-2">Team Access</h1>
        <p className="text-sm text-cream/50 mb-8">
          Sign in with your Google account to continue.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("google", {
              redirectTo: callbackUrl ?? "/dashboard",
            });
          }}
          data-agent-action="initiate-google-oauth"
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-green-mid transition-colors"
            aria-label="Sign in with Google"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </form>
      </article>
    </main>
  );
}
