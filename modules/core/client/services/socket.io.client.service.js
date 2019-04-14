(function () {
  'use strict';

  // Create the Socket.io wrapper service
  angular
    .module('core')
    .factory('Socket', Socket);

  Socket.$inject = ['Authentication', '$state', '$timeout'];

  function Socket(Authentication, $state, $timeout) {
    var service = {
      connect: connect,
      emit: emit,
      on: on,
      removeListener: removeListener,
      socket: null
    };

    connect();

    return service;

    // Connect to Socket.io server
    function connect() {
      // Connect only when authenticated
      if (Authentication.user) {
        service.socket = io();
      }
    }

    // Wrap the Socket.io 'emit' method
    function emit(articleName, data) {
      if (service.socket) {
        service.socket.emit(articleName, data);
      }
    }

    // Wrap the Socket.io 'on' method
    function on(articleName, callback) {
      if (service.socket) {
        service.socket.on(articleName, function (data) {
          $timeout(function () {
            callback(data);
          });
        });
      }
    }

    // Wrap the Socket.io 'removeListener' method
    function removeListener(articleName) {
      if (service.socket) {
        service.socket.removeListener(articleName);
      }
    }
  }
}());
