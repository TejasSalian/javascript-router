'use strict';
const Router = {
  'root' :{
    'component' : 'index',
    'title'     : 'Website Home',
    'hash'      : '!0'
  },
  'pages' : [
    {
      'component' : 'page',
      'title'     : 'Page 1',
      'hash'      : 'page',
      'children'  : [
        {
          'component' : 'page1',
          'title'     : 'Page 1 Child',
          'hash'      : '1',
          'children'  : [
            {
              'component' : 'page11',
              'title'     : 'Page 11 Child',
              'hash'      : '1',
              'children'  : ''
            },
            {
              'component' : 'page12',
              'title'     : 'Page 12 Child',
              'hash'      : '2',
              'children'  : [
                {
                  'component' : 'page121',
                  'title'     : 'Page 121 Child',
                  'hash'      : '1',
                  'children'  : [
                    {
                      'component' : 'page1211',
                      'title'     : 'Page 1211 Child',
                      'hash'      : '1',
                      'children'  : ''
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          'component' : 'page2',
          'title'     : 'Page 2 Child',
          'hash'      : '2',
          'children'  : ''
        },
        {
          'component' : 'page3',
          'title'     : 'Page 3 Child',
          'hash'      : '3',
          'children'  : ''
        },
      ]
    },
    {
      'component' : 'home',
      'title'     : 'Home Page',
      'hash'      : 'home',
      'children'  : ''
    }
  ],
  'component' : {
    'directory'   : './other-pages/',
    'format'   : 'html'
  }
}
