storesService.$inject = [ '$http', 'apiUrl' ];

export default function storesService( $http, apiUrl ) {
  return {
    get() {
      return $http.get( `${apiUrl}/stores` )
      .then( res => res.data );
      
    }

    // getStore(id) {
    //   return $http.get( `${apiUrl}/stores/${id}` )
    //   .then( res => res.data );
      
    // },

    // add(store) {
    //   return $http.post( `${apiUrl}/stores`, store )
    //   .then( res => res.data );

    // }
  };
}