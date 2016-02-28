//# template("myWheel.directive.html")

angular
    .module('app.components')
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
    vm.pegs = pegs;
    vm.spinWheel = spinWheel;

    init();

    function init() {
        angular.forEach(vm.spaces, function(word) {
           vm.words.push(word.split(''));
        });
    }

    function pegs() {
        var numPegs = vm.spaces.length * 3;
        return new Array(numPegs);
    }

    function spinWheel() {
        vm.spinning = true;
    }

}