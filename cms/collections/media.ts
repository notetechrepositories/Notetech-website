import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: 'media',  // Handles image uploads
  fields: [
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};