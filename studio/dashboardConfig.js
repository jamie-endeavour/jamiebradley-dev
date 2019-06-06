export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf9836ddbeb5cc965e471c8',
                  title: 'Sanity Studio',
                  name: 'jamiebradley-dev-studio',
                  apiId: 'f9b31ca5-168e-4f1c-a8e9-9a07ae69378a'
                },
                {
                  buildHookId: '5cf9836dd9827f24b7b70c6d',
                  title: 'Blog Website',
                  name: 'jamiebradley-dev',
                  apiId: '950f50ba-5347-46e0-863d-46ba806b7944'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamie-endeavour/jamiebradley-dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jamiebradley-dev.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
