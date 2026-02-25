This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Vercel configuration (maisonvet.com)

If the site returns a 404 after deployment:

1. **Settings → Build and Deployment** (or "Build & Development").
2. Under **Framework Settings** / **Production Overrides**:
   - Set **Output Directory** to **`.next`** (with the leading dot), or turn off the override to use the framework default.
   - Build Command: `npm run build`. Install Command: `npm install`.
3. **Root Directory**: Leave blank if `package.json` and `src/app` are at the repo root; set to the app subfolder name (e.g. `web`) if this app lives in a subfolder of the connected repo.
4. Save and **redeploy** from the main branch.

### Auth (Google sign-in)

Only allowlisted users can sign in. Set these in **Vercel → Settings → Environment Variables**:

- **AUTH_SECRET** — Required. Use `openssl rand -base64 32` to generate.
- **AUTH_GOOGLE_ID** / **AUTH_GOOGLE_SECRET** — From [Google Cloud Console](https://console.cloud.google.com/) (OAuth 2.0 Client ID).
- **AUTH_URL** — Your production URL (e.g. `https://www.maisonvet.com`).

Optional allowlist (comma-separated; if unset, code defaults are used):

- **ALLOWED_EMAILS** — e.g. `hello@maisonvet.com,tim@div.digital`
- **ALLOWED_DOMAINS** — e.g. `maisonvet.com,div.digital`

Routes `/dashboard`, `/perris`, and `/properties` are protected; unauthenticated users are redirected to `/sign-in`.

**If you see "Error 401: invalid_client" or "The OAuth client was not found":** Create or fix your OAuth 2.0 Client in [Google Cloud Console → APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials). Use a **Web application** client, and under **Authorized redirect URIs** add: `https://www.maisonvet.com/api/auth/callback/google`, `https://maisonvet.com/api/auth/callback/google` (if you use both), and `http://localhost:3000/api/auth/callback/google` for local dev. Then set **AUTH_GOOGLE_ID** and **AUTH_GOOGLE_SECRET** in Vercel to the Client ID and Client secret, and redeploy.
