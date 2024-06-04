import { CollectionConfig } from 'payload/types'

const Tests: CollectionConfig = {
  slug: 'tests',
  fields: [
    {
      name: 'pageMeta', // required
      type: 'group', // required
      fields: [
        {
          name: 'SplitSection',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'text',
            },
            {
              name: 'buttonText',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'backgroundColor',
              label: 'Background Color',
              type: 'text',
            },
            {
              name: 'textColor',
              label: 'Text Color',
              type: 'radio',
              options: [
                {
                  label: 'White',
                  value: 'white',
                },
                {
                  label: 'Black',
                  value: 'black',
                },
              ],
              defaultValue: 'white',
            },
            {
              name: 'buttonFill',
              label: 'Button Fill',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'invertPosition',
              label: 'Invert Position',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}

export default Tests
