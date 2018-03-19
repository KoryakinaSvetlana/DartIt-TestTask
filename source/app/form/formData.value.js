(function () {
    'use strict';

    angular
        .module('formApp')
        .value('FormDataModel', FormDataModel);

    function FormDataModel() {
      return new Order() ;
    }

})();
