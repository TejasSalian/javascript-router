const Router = {
  'root' :{
    'component' : 'component-file-name-here',
    'title'     : 'component-title-here',
    'hash'      : 'component-default-hash'
  },
  'pages' : [
    {
      'component' : 'component-file-name-here',
      'title'     : 'component-title-here',
      'hash'      : 'component-default-hash',
      'children'  : [
        {
          'component' : 'component-file-name-here',
          'title'     : 'component-title-here',
          'hash'      : 'component-default-hash',
          'children'  : ''
        },
        {
          'component' : 'component-file-name-here',
          'title'     : 'component-title-here',
          'hash'      : 'component-default-hash',
          'children'  : ''
        }
      ]
    },
    {
      'component' : 'component-file-name-here',
      'title'     : 'component-title-here',
      'hash'      : 'component-default-hash',
      'children'  : ''
    }
  ],
  'component' : {
    'directory'   : './other-pages/'
  }
}
