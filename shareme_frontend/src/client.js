import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '42v4f0u5',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skgAXmsqWcPHneEP3RunyY1I1yUblfIDcHJwxn9kc4svMhOIIzZZMGjTCD5XmJBTEwbi1yMtdtDxer7S9L1zzK49QXmuVbAAlD3uYzllxD7vbjnde4V5JDOTjxxmKThY9zPaJ8qndtAOIkqUq5gohnjInohucAbP4nH8JhqXQEzn1EobSTiC',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)