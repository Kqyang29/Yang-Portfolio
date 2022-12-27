import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),

    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),

    defineField({
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{
        type: "reference",
        to: {
          type: "skill",
        },
      }],
    }),

    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{
        type: "string",

      }],
    }),


  ],
})
