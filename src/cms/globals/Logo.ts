import { GlobalConfig } from 'payload/types'

const Logo: GlobalConfig = {
  slug: 'logo',

  fields: [
    {
      name: 'Links',
      label: 'Links',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Logo
