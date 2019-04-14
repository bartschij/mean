(function () {
  'use strict';

  angular
    .module('articles')
    .controller('articlesController', articlesController);

  articlesController.$inject = ['$scope', 'articleResolve', 'Authentication'];

  function articlesController($scope, article, Authentication) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;

  }
}());
