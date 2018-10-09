'use strict';
function routeIn(hash, hierarchy) {
  let routeInfo = null, found = false;
  for (let i in hash) {
    let item = hash[i];
    // if hash and hierarchy name matched
    if (item.hash == hierarchy[0] && !found) {
      // when both have childs
      // console.log(hierarchy);
      if (hierarchy.length == 1){
        // hierarchy has last element and item reached
        routeInfo = {
          hashFound : true,
          component : item.component,
          title     : item.title
        };
        return routeInfo;
      }else if (hierarchy.length > 1 && item.children.length > 0) {
        routeInfo = routeIn(item.children, hierarchy.splice(1, hierarchy.length - 1));
        if (routeInfo != null) {
          // we found solution no more bullshit
          return routeInfo
        }
      }else {
        return null;
      }
    }
  }

}

function navigate(hash) {
  // Parsh hash and find hierarchy
  let path, hierarchy, component, title, routeInfo = null;
  if( hash == '' ){
    routeInfo = {
      hashFound : true,
      hash      : '#'+Router.root.hash,
      component : Router.root.component,
      title     : Router.root.title
    };
  }else{
    path       = hash.substring(1, hash.length);
    hierarchy  = path.split('/');
    // navigate through router and find file name
    for (let i in Router.pages) {
      // Each Top Level Hash Definitions
      if (Router.pages[i].hash === hierarchy[0]) {
        // If hash comes with children
        if (hierarchy.length > 1) {
          routeInfo = routeIn(Router.pages[i].children, hierarchy.splice(1, hierarchy.length - 1));
        }else if (hierarchy.length = 1) {
          routeInfo = {
            hashFound : true,
            component : Router.pages[i].component,
            title     : Router.pages[i].title
          };
        }
      }
    }
  }
  if (routeInfo != null) {
    return routeInfo
  }else {
    return {
      hashFound : false,
      component : '',
      title     : ''
    };
  }
}
