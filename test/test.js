
// --- interface -------------------------------------------

    // --- Fish Class ---
    function Fish(arg) { // BaseClass Fish
        this.arg = arg;
    }
    Fish.name = "Fish";
    Fish.prototype.say = function() { return "fish"; };
    Fish.prototype.jump = function() { return "jump"; };

    // --- Ponyo Class ---
    function Ponyo(arg) {
//      console.log("call Ponyo#constructor");
        Fish.call(this, arg); // call SuperClass(Fish) constructor
    }
    Ponyo.extend(Fish); // Ponyo extends Fish
    Ponyo.name = "Ponyo";
    Ponyo.prototype.say = function() { return "ponyo"; }; // override Fish#say
  //Ponyo.prototype.jump = function() { return "jump"; };

    // --- Human Class ---
    function Human(arg) {
//      console.log("call Human#constructor");
        Ponyo.call(this, arg); // call SuperClass (Ponyo) constructor
    }
    Human.extend(Ponyo); // Human extends Ponyo
    Human.name = "Human";
    Human.prototype.say = function() { return "human"; }; // override Ponyo#say
    Human.prototype.jump = function() { return "i can fly"; }; // override Fish#jump

// --- implement -------------------------------------------
new Test().add([
        testClassExtend,
        testStaticLiteralProperty,
        testStaticObjectProperty,
        testSharedLiteralProperty,
        testSharedObjectProperty,
    ]).run();

function testClassExtend(next) {

    var fish  = new Fish("Fish.arg");
    var ponyo = new Ponyo("Ponyo.arg");
    var human = new Human("Human.arg");

    if (fish.constructor.name  === "Fish" &&
        ponyo.constructor.name === "Ponyo" &&
        human.constructor.name === "Human") {

        if (fish.arg  === "Fish.arg" &&
            ponyo.arg === "Ponyo.arg" &&
            human.arg === "Human.arg") {

            if (fish.say()  === "fish" &&
                ponyo.say() === "ponyo" &&
                human.say() === "human") {

                if (fish.jump()  === "jump" &&
                    ponyo.jump() === "jump" &&
                    human.jump() === "i can fly") {

                    console.log("testClassExtend ok");
                    next && next.pass();
                    return;
                }
            }
        }
    }
    console.log("testClassExtend ng");
    next && next.miss();
}

function testStaticLiteralProperty(next) {

    // --- Fish Class ---
    Fish.staticLiteral = "Fish.staticLiteral";

    // --- Ponyo Class ---
    Ponyo.staticLiteral = "Ponyo.staticLiteral";

    // --- Human Class ---
    Human.staticLiteral = "Human.staticLiteral";

    if (Fish.staticLiteral  === "Fish.staticLiteral" &&
        Ponyo.staticLiteral === "Ponyo.staticLiteral" &&
        Human.staticLiteral === "Human.staticLiteral") {

        Fish.staticLiteral  = "new Fish.staticLiteral";
        Ponyo.staticLiteral = "new Ponyo.staticLiteral";
        Human.staticLiteral = "new Human.staticLiteral";

        if (Fish.staticLiteral  === "new Fish.staticLiteral" &&
            Ponyo.staticLiteral === "new Ponyo.staticLiteral" &&
            Human.staticLiteral === "new Human.staticLiteral") {

            console.log("testStaticLiteralProperty ok");
            next && next.pass();
            return;
        }
    }
    console.log("testStaticLiteralProperty ng");
    next && next.miss();
}

function testStaticObjectProperty(next) {

    // --- Fish Class ---
    Fish.staticObject = { value: "Fish.staticObject" };

    // --- Ponyo Class ---
    Ponyo.staticObject = { value: "Ponyo.staticObject" };

    // --- Human Class ---
    Human.staticObject = { value: "Human.staticObject" };

    if (Fish.staticObject.value  === "Fish.staticObject" &&
        Ponyo.staticObject.value === "Ponyo.staticObject" &&
        Human.staticObject.value === "Human.staticObject") {

        Fish.staticObject.value  = "new Fish.staticObject";
        Ponyo.staticObject.value = "new Ponyo.staticObject";
        Human.staticObject.value = "new Human.staticObject";

        if (Fish.staticObject.value  === "new Fish.staticObject" &&
            Ponyo.staticObject.value === "new Ponyo.staticObject" &&
            Human.staticObject.value === "new Human.staticObject") {

            console.log("testStaticObjectProperty ok");
            next && next.pass();
            return;
        }
    }
    console.log("testStaticObjectProperty ng");
    next && next.miss();
}

function testSharedLiteralProperty(next) {


    // --- Fish Class ---
    Fish.prototype.sharedLiteral = "Fish#sharedLiteral";

    // --- Ponyo Class ---
    Ponyo.prototype.sharedLiteral = "Ponyo#sharedLiteral";

    // --- Human Class ---
    Human.prototype.sharedLiteral = "Human#sharedLiteral";

    var fish  = new Fish("Fish.arg");
    var ponyo = new Ponyo("Ponyo.arg");
    var human = new Human("Human.arg");

    if (fish.sharedLiteral  === "Fish#sharedLiteral" &&
        ponyo.sharedLiteral === "Ponyo#sharedLiteral" &&
        human.sharedLiteral === "Human#sharedLiteral") {

        fish.sharedLiteral  = "new Fish#sharedLiteral";
        ponyo.sharedLiteral = "new Ponyo#sharedLiteral";
        human.sharedLiteral = "new Human#sharedLiteral";

        if (fish.sharedLiteral  === "new Fish#sharedLiteral" &&
            ponyo.sharedLiteral === "new Ponyo#sharedLiteral" &&
            human.sharedLiteral === "new Human#sharedLiteral") {

            console.log("testSharedLiteralProperty ok");
            next && next.pass();
            return;
        }
    }
    console.log("testSharedLiteralProperty ng");
    next && next.miss();
}

function testSharedObjectProperty(next) {

    // --- Fish Class ---
    Fish.prototype.sharedObject = { value: "Fish#sharedObject" };

    // --- Ponyo Class ---
    Ponyo.prototype.sharedObject = { value: "Ponyo#sharedObject" };

    // --- Human Class ---
    Human.prototype.sharedObject = { value: "Human#sharedObject" };

    var fish  = new Fish("Fish.arg");
    var ponyo = new Ponyo("Ponyo.arg");
    var human = new Human("Human.arg");

    if (fish.sharedObject.value  === "Fish#sharedObject" &&
        ponyo.sharedObject.value === "Ponyo#sharedObject" &&
        human.sharedObject.value === "Human#sharedObject") {

        fish.sharedObject.value  = "new Fish#sharedObject";
        ponyo.sharedObject.value = "new Ponyo#sharedObject";
        human.sharedObject.value = "new Human#sharedObject";

        if (fish.sharedObject.value  === "new Fish#sharedObject" &&
            ponyo.sharedObject.value === "new Ponyo#sharedObject" &&
            human.sharedObject.value === "new Human#sharedObject") {

            var object = { value: "sharedObject" };
            fish.sharedObject = object;

            if (fish.sharedObject.value  === "sharedObject" &&
                ponyo.sharedObject.value === "new Ponyo#sharedObject" &&
                human.sharedObject.value === "new Human#sharedObject") {

                console.log("testSharedObjectProperty ok");
                next && next.pass();
                return;
            }
        }
    }
    console.log("testSharedObjectProperty ng");
    next && next.miss();
}

