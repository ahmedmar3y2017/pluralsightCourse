var message = "ahmed mohamed mar3y";

console.log(message)
var Anumber = 10;
var undef;
var result = document.getElementById("result");
result.innerHTML = "This is My Js File ";
console.log("Type of : " + typeof(undef));

console.log("Type of : " + typeof(message));
console.log("Type of : " + typeof(result));

// ----------------------- conditions ---------------------

if (Anumber == "10") {
    console.log("This is equsl Number " + Anumber)

}
// not execute
if (Anumber === "10") {
    console.log("This is exactly  equsl Number " + Anumber)

}


if (undef == undefined) {

    console.log("this is Undefined ");


}

// ---------------------- functions ---------------------

function showMessage(msg, more) {
// if defined 
    if (more) {

        console.log("This is Message : " + msg + "   " + more);

    } else {
        console.log("This is Message : " + msg);


    }


}


showMessage("ahmed mohamed ");
showMessage("ahmed mohamed ", " More More ");

// -- var Message -----
var functionFF = function ShowVarFunction(msg) {
    console.log("Done The msg : " + msg);
}

functionFF("Message");

// -- parameter Message ---

var MessageParameter = function Message(message, fun) {

    console.log("message : " + message);
    fun();
}

MessageParameter("ahmed mar3y", function () {
    console.log("Cal Back Function ")

})


// ---------------- Object ------------------------

var PersonObject = {
    name: "ahmed",
    age: 20,
    Function: function () {
        console.log("This is My Function ");
    }
    ,
    address: {

        city: "tanta ",
        country: "zayat"

    }


}
PersonObject.phoneNumber = "123456789";
console.log(PersonObject.name);
console.log(PersonObject.address.city)
console.log(PersonObject.phoneNumber)


// -------------- arrays ------------------

var results = [
    {
        name: "mohamed",
        age: 25,
        Function: function () {
            console.log("This is My Function ");
        }
        ,
        address: {

            city: "tanta ",
            country: "zayat"

        }


    }, {
        name: "ahmed",
        age: 20,
        Function: function () {
            console.log("This is My Function ");
        }
        ,
        address: {

            city: "tanta ",
            country: "zayat"

        }


    }


];

console.log(results.length);

console.log(results[0]);


// ----------- looping -----------

for (var x = 0; x < results.length; x++) {


    var result = results[x];

    if (result.age > 22 )continue;
    console.log("Loop : " + (x + 1) + result.name);


}


















