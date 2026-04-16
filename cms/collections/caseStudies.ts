import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',  // This will be the slug in the URL
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
        },
      ],
    },
    {
      name: 'outcome',
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
      required: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'openGraphImage',
      type: 'upload',
      relationTo: 'media', // assuming you have a media collection for images
    },
  ],
};