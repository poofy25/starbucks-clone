import { GlobalConfig } from 'payload/types'

const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'promoText',
      type: 'text',
      label: 'Promotional Line',
    },
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      required: false,
      maxRows: 1,
      fields: [
        {
          name: 'text',
          label: 'Link Text',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Link Href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'button1',
      type: 'group',
      label: 'Location Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Href',
          required: true,
        },
      ],
    },
    {
      name: 'button2',
      type: 'group',
      label: 'Call Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Call number',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Href',
          required: true,
        },
      ],
    },
  ],
}

export default Navigation
