angular.module('app.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('apps/components/myWheel.directive.html',
    "<div class=wheel ng-class=\"{ 'spin' : vm.spinning }\"><div class=frame><ul class=pegs><li class=peg ng-repeat=\"i in vm.pegs() track by $index\"></li></ul><ul class=circle><li class=slice ng-repeat=\"word in vm.words\"><label class=\"circle word-{{ word.length }}\"><span ng-repeat=\"letter in word track by $index\">{{ letter }}</span></label></li><li class=center ng-click=vm.spinWheel()></li></ul></div><div class=pointer></div></div>"
  );

}]);
