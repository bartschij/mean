(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Events',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'events', {
      title: 'List events',
      state: 'articles.list',
      roles: ['*']
    });
  }
}());
