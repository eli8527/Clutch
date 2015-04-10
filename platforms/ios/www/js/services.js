angular.module('couponApp.services',[]).factory('Coupon',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){
    return {
        getAll:function(){
            return $http.get('https://api.parse.com/1/classes/coupon',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        }
    }
}]).value('PARSE_CREDENTIALS',{
    APP_ID: 'i0Mpa6pH0c06ozqjFiTaN7yr9DaD0PGpzPoRV8UM',
    REST_API_KEY:'jIHvSPBZtBi1EQh9gTaQFNlZ0rQmAP9DZDsHIHYI'
});