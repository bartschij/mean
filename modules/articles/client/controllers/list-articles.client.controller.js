(function () {
  'use strict';

  angular
    .module('articles')
    .controller('articlesListController', articlesListController);

  articlesListController.$inject = ['articlesService'];

  function articlesListController(articlesService) {
    var vm = this;

    vm.articles = articlesService.query();
  }
}());
