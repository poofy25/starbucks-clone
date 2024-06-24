import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
//import { slateEditor } from '@payloadcms/richtext-slate'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Collections import

import Pages from '@/cms/collections/Pages'
import Categories from '@/cms/collections/Categories'
import Products from '@/cms/collections/Products'

// Globals import

import Navigation from '@/cms/globals/Navigation'
import Logo from '@/cms/globals/Logo'
import Footer from '@/cms/globals/Footer'

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => true,
        update: () => false,
      },
      fields: [],
    },
    Pages,
    Categories,
    Products,
    {
      slug: 'media',
      upload: true,
      fields: [],
      access: {
        read: () => true,
      },
    },
  ],
  globals: [Navigation, Logo, Footer],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: '1234567890',
      prefillOnly: false,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: '1234567890',
        },
      })
    }
  },

  plugins: [
    uploadthingStorage({
      collections: {
        ['media']: true,
      },
      options: {
        apiKey: process.env.UPLOADTHING_SECRET,
        acl: 'public-read',
      },
    }),
  ],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
