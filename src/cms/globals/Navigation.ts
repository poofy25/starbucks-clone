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
      name: 'links',
      label: 'Links',
      type: 'array',
      required: false,
      maxRows: 5,
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
  ],
}

export default Navigation