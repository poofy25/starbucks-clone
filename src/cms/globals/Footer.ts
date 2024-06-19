import { GlobalConfig } from 'payload/types'

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo Image',
      required: true,
    },
    {
      name: 'info',
      type: 'text',
      label: 'Additional Info',
      required: true,
    },
    {
      name: 'linksSections',
      label: 'Links Sections',
      type: 'array',
      required: true,
      maxRows: 3,
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
    {
      name: 'contact',
      type: 'group',
      label: 'Contacts',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'title',
              label: 'Title Text',
              type: 'text',
              required: true,
            },
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
            },
          ],
        },
      ],
    },

    {
      name: 'bottomFooter',
      type: 'group',
      label: 'Botton Footer',
      fields: [
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright Text',
          required: true,
        },
        {
          name: 'instagramHref',
          type: 'text',
          label: 'Instagram Href',
          required: true,
        },
        {
          name: 'facebookHref',
          type: 'text',
          label: 'Facebook Href',
          required: true,
        },
        {
          name: 'emailHref',
          type: 'text',
          label: 'Email Href',
          required: true,
        },
      ],
    },
  ],
}

export default Footer
