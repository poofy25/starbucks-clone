import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General Info',
          fields: [
            {
              name: 'image',
              type: 'upload',
              label: 'Image',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'name',
              type: 'text',
              label: 'Name',
              required: true,
            },
            // {
            //   name: 'category',
            //   type: 'relationship',
            //   relationTo: 'categories',
            //   required: true,
            // },
            {
              name: 'price',
              type: 'number',
              label: 'Price (mdl)',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              label: 'Description',
              required: true,
            },
            {
              name: 'weight',
              type: 'text',
              label: 'Weight',
            },
          ],
        },
        {
          label: 'Variants',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Variants Title',
            },
            {
              name: 'variants',
              type: 'array',
              label: 'Variants',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Variant Name',
                  required: true,
                },
                {
                  name: 'price',
                  type: 'number',
                  label: 'Variant Price',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Additions',
          fields: [
            {
              name: 'additions',
              type: 'array',
              label: 'Additions',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Adition Name',
                  required: true,
                },
                {
                  name: 'weight',
                  type: 'text',
                  label: 'Adition Weight',
                },
                {
                  name: 'price',
                  type: 'number',
                  label: 'Variant Price',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Products
