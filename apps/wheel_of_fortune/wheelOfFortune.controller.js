angular.module('wheelOfFortune')
    .controller('WheelOfFortuneController', WheelOfFortuneController);

WheelOfFortuneController.$inject = ['Words'];

function WheelOfFortuneController(Words) {
    var vm = this;
    vm.spaces = [];

    var numSpaces = 24;

    vm.spaces = Words.getWords(numSpaces);
}
