import { format } from 'date-fns'

export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'eventDate',
      type: 'datetime',
      title: 'Event Date',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'eventDateAsc',
      title: 'Event date new–>old',
      by: [
        {
          field: 'eventDate',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'eventDateDesc',
      title: 'Event date old->new',
      by: [
        {
          field: 'eventDate',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      eventDate: 'eventDate',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', eventDate, slug, media }) {
      const dateSegment = format(eventDate, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: eventDate ? path : 'Missing publishing date'
      }
    }
  }
}
