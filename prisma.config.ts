import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  // Note: We intentionally do not provide a datasource here.
  // This allows `prisma generate` (via postinstall) to succeed on Vercel
  // even before a DATABASE_URL has been configured.
});
