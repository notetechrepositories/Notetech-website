import { getPayload } from "payload";

const runId = process.env.DEBUG_RUN_ID ?? "pre-fix";

async function debugLog(
  hypothesisId: string,
  location: string,
  message: string,
  data: Record<string, unknown>,
) {
  await fetch("http://127.0.0.1:7399/ingest/7ddd114d-0db3-47e3-9513-139f8304b79a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "cf242a",
    },
    body: JSON.stringify({
      sessionId: "cf242a",
      runId,
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
}

async function boot() {
  // #region agent log
  await debugLog("H2", "cms/server.ts:30", "CMS boot start", {
    cwd: process.cwd(),
    moduleUrl: import.meta.url,
  });
  // #endregion

  const specifiers = ["./payload.config", "./payload.config.ts"];
  let configModule: { default: unknown } | null = null;

  for (const specifier of specifiers) {
    try {
      // #region agent log
      await debugLog("H1", "cms/server.ts:40", "Attempting dynamic import", {
        specifier,
      });
      // #endregion

      configModule = (await import(specifier)) as { default: unknown };

      // #region agent log
      await debugLog("H1", "cms/server.ts:47", "Dynamic import succeeded", {
        specifier,
      });
      // #endregion
      break;
    } catch (error) {
      // #region agent log
      await debugLog("H3", "cms/server.ts:54", "Dynamic import failed", {
        specifier,
        name: error instanceof Error ? error.name : "UnknownError",
        code:
          typeof error === "object" &&
          error !== null &&
          "code" in error &&
          typeof (error as { code?: unknown }).code === "string"
            ? (error as { code: string }).code
            : undefined,
        errorMessage: error instanceof Error ? error.message : String(error),
      });
      // #endregion
    }
  }

  if (!configModule?.default) {
    throw new Error("Unable to import payload config from known specifiers");
  }

  await getPayload({ config: configModule.default as any });

  // #region agent log
  await debugLog("H4", "cms/server.ts:86", "Payload initialized", { ok: true });
  // #endregion

  console.log("Payload CMS initialized.");
}

void boot();