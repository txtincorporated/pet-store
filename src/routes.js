routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'stores',
    url: '/stores',
    data: { public: true },
    resolve: {
      stores: ['storesService', (storesService) => storesService.getStores()]

    }, 
    
    component: 'stores'
    
  });

  $stateProvider.state({
    name: 'stores.store',
    url: '/detail/:id',
    data: { public: true },
    resolve: {
      id: ['$transition$', t => t.params().id],
      store: ['$transition$', 'storesService', (t, stores) => stores.get(t.params().id)]

    }, 
    
    component: 'storesStore'
    
  });

  $stateProvider.state({
    name: 'stores.add',
    url: '/add',
    component: 'storesAdd'
    
  });

  $urlRouterProvider.otherwise( '/stores' );

}

