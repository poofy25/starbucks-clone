import { Block } from 'payload/types'

const MapSection: Block = {
  slug: 'mapSection', // required
  imageAltText: 'Google maps with points',
  interfaceName: 'MapSection', // optional
  fields: [
    {
      name: 'locations',
      label: 'Locations',
      type: 'array',
      fields: [
        {
          name: 'adress',
          label: 'Adress',
          type: 'text',
          required: true,
        },
        {
          name: 'location',
          label: 'Location',
          type: 'point',
          required: true,
        },
      ],
    },
  ],
}

export default MapSection
