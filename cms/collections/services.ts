import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: 'services',  // URL structure will be /services/{slug}
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'metaTitle',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'openGraphImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};