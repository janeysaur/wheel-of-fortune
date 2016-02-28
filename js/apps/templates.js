angular.module('app.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('apps/components/myWheel.directive.html',
    "<div class=wheel ng-class=\"{ 'spin' : vm.spinning }\"><ul class=circle><li class=slice ng-repeat=\"word in vm.words\"><label class=circle><span ng-repeat=\"letter in word\">{{ letter }}</span></label></li><li class=center ng-click=vm.spinWheel()></li></ul></div>"
  );

}]);
