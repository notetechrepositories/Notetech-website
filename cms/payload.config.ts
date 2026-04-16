import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import { Collections } from "./collections";

// #region agent log
fetch("http://127.0.0.1:7399/ingest/7ddd114d-0db3-47e3-9513-139f8304b79a", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "cf242a",
  },
  body: JSON.stringify({
    sessionId: "cf242a",
    runId: process.env.DEBUG_RUN_ID ?? "pre-fix",
    hypothesisId: "H4",
    location: "cms/payload.config.ts:4",
    message: "Payload config module evaluated",
    data: { collectionsCount: Collections.length },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3001",
  secret: process.env.PAYLOAD_SECRET || "dev-payload-secret-change-me",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./cms/payload.db",
    },
  }),
  collections: Collections,
} as any);