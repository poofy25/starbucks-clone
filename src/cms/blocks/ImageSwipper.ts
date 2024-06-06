import { Block } from 'payload/types'

const ImageSwipper: Block = {
  slug: 'imageSwipper', // required
  imageAltText: 'Image Swipper',
  interfaceName: 'ImageSwipper', // optional
  fields: [
    {
      name: 'slides',
      label: 'Slides',
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
          name: 'href',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default ImageSwipper
