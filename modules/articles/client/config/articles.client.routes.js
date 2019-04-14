(function () {
  'use strict';

  angular
    .module('articles.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: '/modules/articles/client/views/list-articles.client.view.html',
        controller: 'articlesListController',
        controllerAs: 'vm'
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: '/modules/articles/client/views/view-article.client.view.html',
        controller: 'articlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getarticle
        },
        data: {
          pageTitle: '{{ articleResolve.title }}'
        }
      });
  }

  getarticle.$inject = ['$stateParams', 'articlesService'];

  function getarticle($stateParams, articlesService) {
    return articlesService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }
}());
