(function () {
  'use strict';

  angular
    .module('articles.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('admin.articles.list', {
        url: '',
        templateUrl: '/modules/articles/client/views/admin/list-articles.client.view.html',
        controller: 'articlesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.articles.create', {
        url: '/create',
        templateUrl: '/modules/articles/client/views/admin/form-article.client.view.html',
        controller: 'articlesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          articleResolve: newarticle
        }
      })
      .state('admin.articles.edit', {
        url: '/:articleId/edit',
        templateUrl: '/modules/articles/client/views/admin/form-article.client.view.html',
        controller: 'articlesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ articleResolve.title }}'
        },
        resolve: {
          articleResolve: getarticle
        }
      });
  }

  getarticle.$inject = ['$stateParams', 'articlesService'];

  function getarticle($stateParams, articlesService) {
    return articlesService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

  newarticle.$inject = ['articlesService'];

  function newarticle(articlesService) {
    return new articlesService();
  }
}());
