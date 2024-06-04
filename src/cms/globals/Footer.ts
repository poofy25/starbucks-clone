import { GlobalConfig } from 'payload/types'

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'linksSections',
      label: 'Links Sections',
      type: 'array',
      required: true,
      maxRows: 5,
      fields: [
        {
          name: 'title',
          label: 'Section Title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          required: true,
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
    },
  ],
}

export default Footer
