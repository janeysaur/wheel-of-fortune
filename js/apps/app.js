(function (module) {


  //# template("myWheel.directive.html")

  module
      .directive('myWheel', myWheel);

  function myWheel() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'apps/components/myWheel.directive.html',
          scope: {
              spaces: '='
          },
          controller: WheelController,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;
  }

  function WheelController() {
      var vm = this;

      vm.words = [];
      vm.spinning = false;
      vm.spinWheel = spinWheel;

      init();

      function init() {
          angular.forEach(vm.spaces, function(word) {
             vm.words.push(word.split(''));
          });
      }

      function spinWheel() {
          vm.spinning = true;
      }

  }

}) (angular.module ('app.components', []));



angular.module ('app.templates', []);



(function (module) {


  module
      .controller('WheelOfFortuneController', WheelOfFortuneController);

  function WheelOfFortuneController() {
      var vm = this;
      vm.spaces = [];

      var numSpaces = 24;

      for (var i = 0; i < numSpaces; i++) {
          vm.spaces.push("word");
      }
  }


}) (angular.module ('wheelOfFortune', ['app.components']));



angular.module ('app', ['app.components', 'app.templates', 'wheelOfFortune']);



angular.module('app.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('apps/components/myWheel.directive.html',
    "<div class=wheel ng-class=\"{ 'spin' : vm.spinning }\"><ul class=circle><li class=slice ng-repeat=\"word in vm.words\"><label class=circle><span ng-repeat=\"letter in word\">{{ letter }}</span></label></li><li class=center ng-click=vm.spinWheel()></li></ul></div>"
  );

}]);
