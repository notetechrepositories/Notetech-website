import { getPayload } from "payload";
import configPromise from "@/cms/payload.config";

export async function getPayloadClient() {
  return getPayload({ config: await configPromise });
}
// Payload CMS API functions will go here
