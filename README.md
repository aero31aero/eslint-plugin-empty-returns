# Returns should omit specifying undefined. (empty-returns)

This rule is for codebases where we want to use `return;` instead of `return undefined;`.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
invalid: [{
    code: "var x = function() {return undefined;}",
    output: "var x = function() {return;}",
}]
```

Examples of **correct** code for this rule:

```js
valid: [
    "var x = function() {return;}",
    "var x = function() {return true;}",
    "var x = function(hello) {return hello;}",
    "var x = function() {return 'hello';}",
    "var x = function() {return {};}",
    "var x = function() {return false;}",
]
```
