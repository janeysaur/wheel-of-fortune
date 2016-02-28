angular.module('wheelOfFortune')
    .controller('WheelOfFortuneController', WheelOfFortuneController);

function WheelOfFortuneController() {
    var vm = this;
    vm.spaces = [];

    var numSpaces = 24;

    for (var i = 0; i < numSpaces; i++) {
        vm.spaces.push("word");
    }
}
