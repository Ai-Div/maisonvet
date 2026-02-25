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
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const { callbackUrl, error } = await searchParams;

  if (session?.user) {
    redirect(callbackUrl ?? "/dashboard");
  }

  const isAccessDenied = error === "AccessDenied";
  const isConfigError = Boolean(error && error !== "AccessDenied");

  return (
    <main
      id="primary-content"
      role="main"
      tabIndex={-1}
      className="outline-none min-h-screen bg-stone-100 flex items-center justify-center px-6 py-16"
      itemScope
      itemType="https://schema.org/WebPage"
      data-agent-purpose="authentication-gate"
    >
      <article
        className="w-full max-w-md bg-white border border-stone-200 rounded-xl p-8 md:p-10 text-center shadow-md"
        data-agent-purpose="sign-in-form"
        itemScope
        itemType="https://schema.org/LoginAction"
      >
        <a
          href="/"
          rel="home"
          aria-label="Return to Maison Vet homepage"
          className="inline-block text-2xl md:text-3xl font-bold text-stone-900 mb-6 hover:text-stone-700 transition-colors focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded-sm"
        >
          Maison Vet
        </a>

        <h1 className="text-xl font-bold text-stone-900 mb-2">Team Access</h1>
        <p className="text-stone-600 mb-8 max-w-sm mx-auto">
          Sign in with your Google account to continue.
        </p>

        {isAccessDenied && (
          <p
            className="mb-6 p-3 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg"
            role="alert"
            id="sign-in-error"
          >
            Access is restricted to invited team members. If you believe you should have access,
            contact the project team.
          </p>
        )}

        {isConfigError && (
          <p
            className="mb-6 p-3 text-sm text-stone-700 bg-stone-100 border border-stone-200 rounded-lg"
            role="alert"
            id="sign-in-config-error"
          >
            Sign-in is temporarily misconfigured. Please try again later or contact the team.
          </p>
        )}

        <form
          action={async () => {
            "use server";
            await signIn("google", {
              redirectTo: callbackUrl ?? "/dashboard",
            });
          }}
          data-agent-action="initiate-google-oauth"
          aria-describedby={
            isAccessDenied ? "sign-in-error" : isConfigError ? "sign-in-config-error" : undefined
          }
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border border-stone-300 text-stone-800 text-sm font-bold rounded-lg hover:bg-stone-50 hover:border-stone-400 focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 transition-colors"
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
