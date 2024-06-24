import { Block } from 'payload/types'

const MenuSection: Block = {
  slug: 'menuSection', // required
  imageAltText: 'Menu Section',
  interfaceName: 'MenuSection', // optional
  fields: [
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
  ],
}

export default MenuSection
