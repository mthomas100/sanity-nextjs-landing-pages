export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ffc8279eb91b7ea8628e4a8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4kwjksb2',
                  apiId: 'f62ef78e-c225-47aa-bf0e-90a60b26ce1d'
                },
                {
                  buildHookId: '5ffc82791ebd0ff3343b8111',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3ieawwxu',
                  apiId: '6464f248-e9c2-4bb1-9985-060fe58f5a1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mthomas100/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3ieawwxu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
