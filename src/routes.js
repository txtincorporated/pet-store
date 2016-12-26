routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'stores',
    url: '/',
    component: 'stores'
    
  });

  $stateProvider.state({
    name: 'stores.store',
    url: '/:id',
    resolve: {
      id: ['$transitions', t => t.params().id],
    }, 
    
    component: 'storesStore'
    
  });

  $urlRouterProvider.otherwise( '/' );

}

