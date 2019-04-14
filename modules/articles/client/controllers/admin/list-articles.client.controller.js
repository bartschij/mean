(function () {
  'use strict';

  angular
    .module('articles.admin')
    .controller('articlesAdminListController', articlesAdminListController);

  articlesAdminListController.$inject = ['articlesService'];

  function articlesAdminListController(articlesService) {
    var vm = this;

    vm.articles = articlesService.query();
  }
}());
