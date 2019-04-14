(function () {
  'use strict';

  // Configuring the articles Admin module
  angular
    .module('articles.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage articles',
      state: 'admin.articles.list'
    });
  }
}());
