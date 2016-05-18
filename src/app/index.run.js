(function() {
  'use strict';

  angular
    .module('angularPhotoShare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
