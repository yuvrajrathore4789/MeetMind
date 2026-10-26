import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tuck the dev-only Next.js indicator into the bottom-right so it doesn't clash
  // with the top-bar avatar. This overlay never appears in production builds.
  devIndicators: {
    position: "bottom-right",
  },
  // Note: a harmless "inferred workspace root" warning may appear locally due to
  // a stray lockfile in the home directory. It does not affect the build; Vercel
  // uses the configured project root. See README for details.

  // Proxy the API through this origin so the session cookie is first-party (browsers
  // block third-party cookies from onrender.com on a vercel.app page). In production
  // set NEXT_PUBLIC_API_URL=/api and API_PROXY_TARGET=<render backend URL>.
  async rewrites() {
    const target = process.env.API_PROXY_TARGET ?? "http://localhost:8000";
    return [{ source: "/api/:path*", destination: `${target}/api/:path*` }];
  },
};

export default nextConfig;
