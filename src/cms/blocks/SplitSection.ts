import { Block } from 'payload/types'

const SplitSection: Block = {
  slug: 'splitSection', // required
  imageAltText: 'Image on the right and content on the left',
  interfaceName: 'SplitSection', // optional
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
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
      required: true,
    },
    {
      name: 'invertPosition',
      label: 'Invert Position',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}

export default SplitSection
