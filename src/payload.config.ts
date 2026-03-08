import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { CaseStudies } from './collections/CaseStudies'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Pages, CaseStudies, Services, Testimonials, Media, Users],
  secret: process.env.PAYLOAD_SECRET || 'rwp-greenflag-secret-change-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/rwp-greenflag',
  }),
})
