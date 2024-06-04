import { CollectionConfig } from 'payload/types'
import SplitSection from '../blocks/SplitSection'

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
              blocks: [SplitSection],
            },
          ],
        },
      ],
    },
  ],
}

export default Pages
