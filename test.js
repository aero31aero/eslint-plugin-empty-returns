var rule = require('./index');
var RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
ruleTester.run("empty-returns", rule, {

    valid: [
        "var x = function() {return;}",
        "var x = function() {return true;}",
        "var x = function(hello) {return hello;}",
        "var x = function() {return 'hello';}",
        "var x = function() {return {};}",
        "var x = function() {return false;}",
    ],

    invalid: [
        {
            code: "var x = function() {return undefined;}",
            output: "var x = function() {return;}",
            errors: [{
                message: "Do not use `return undefined;`",
                type: "ReturnStatement"
            }]
        }
    ]
});
