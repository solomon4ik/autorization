define(['jquery'],function ($) {
    var allMethods = {};
    allMethods.showAllert = function showAllert(value) {
        alert("boom");
        $("body").html(value);
    };
    allMethods.logConsole = function logConsole(value) {
        console.log(value);
    };
    allMethods.hello = "HelloWorld";
    return allMethods;
});

