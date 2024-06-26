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
          name: 'city',
          label: 'Localitate',
          type: 'text',
          required: true,
        },
        {
          name: 'adress',
          label: 'Adress',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          required: true,
        },
        {
          name: 'phoneHref',
          label: 'Phone Href',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required: true,
        },
        {
          name: 'emailHref',
          label: 'Email Href',
          type: 'text',
          required: true,
        },
        {
          name: 'workingHours',
          label: 'Working Hours',
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
