import { Block } from 'payload/types'

const PartnersSection: Block = {
  slug: 'partnersSection', // required
  imageAltText: 'Partners Section',
  interfaceName: 'PartnersSection', // optional
  fields: [
    {
      name: 'partners',
      label: 'Partners',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonText',
          label: 'Button Text',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default PartnersSection
