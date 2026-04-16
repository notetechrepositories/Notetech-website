import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "payload",
    "@payloadcms/db-sqlite",
    "drizzle-kit",
    "@libsql/client",
    "@libsql/hrana-client",
    "@esbuild/win32-x64",
  ],
};

export default nextConfig;
