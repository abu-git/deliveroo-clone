import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'lrucymjz',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-11'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client