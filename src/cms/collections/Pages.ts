import { CollectionConfig } from 'payload/types'
import SplitSection from '../blocks/SplitSection'
import ImageSwipper from '../blocks/ImageSwipper'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Data',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
        {
          label: 'Blocks',
          fields: [
            {
              name: 'blocks',
              label: 'Section Blocks',
              type: 'blocks',
              blocks: [SplitSection, ImageSwipper],
            },
          ],
        },
      ],
    },
  ],
}

export default Pages
