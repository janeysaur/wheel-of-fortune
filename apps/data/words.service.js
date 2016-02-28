angular.module('app.data')
    .factory('Words', Words);

function Words() {

    var words = [
        "auto",
        "ball",
        "bird",
        "boat",
        "book",
        "cell",
        "corp",
        "drug",
        "film",
        "game",
        "golf",
        "hunt",
        "jazz",
        "knit",
        "lake",
        "math",
        "meat",
        "mill",
        "navy",
        "polo",
        "rock",
        "ship",
        "stud",
        "tort",
        "vent",
        "word",
        "beast",
        "being",
        "cards",
        "chess",
        "coach",
        "craps",
        "crime",
        "dance",
        "drama",
        "fable",
        "faith",
        "fauna",
        "flick",
        "flora",
        "fungi",
        "genre",
        "hoops",
        "human",
        "humor",
        "latin",
        "logic",
        "mafia",
        "maths",
        "movie",
        "music",
        "ocean",
        "order",
        "plane",
        "plant",
        "poesy",
        "poker",
        "radio",
        "rhyme",
        "river",
        "rugby",
        "sight",
        "sport",
        "stock",
        "trade",
        "train",
        "verse",
        "video",
        "virus",
        "works",
        "animal",
        "ballet",
        "botany",
        "boxing",
        "bridge",
        "church",
        "cinema",
        "ethics",
        "fungus",
        "growth",
        "hockey",
        "humour",
        "insect",
        "legend",
        "mammal",
        "medium",
        "mining",
        "muscle",
        "poetry",
        "racing",
        "riding",
        "sewing",
        "skiing",
        "soccer",
        "speech",
        "squash",
        "tennis",
        "vessel",
        "vision",
        "voodoo"
    ];

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    return {
        getWords: function(n) {
            var shuffled = shuffle(words);
            return shuffled.splice(0, n);
        }
    }
}