module.exports = {
    rules: {
        "main": {
            meta: {
                docs: {
                    description: "Returns should omit specifying undefined.",
                    category: "Fill me in",
                    recommended: false
                },
                fixable: 'code',
                schema: [
                ]
            },
            create: function(context) {
                return {
                    ReturnStatement(node) {
                        if (
                            node.argument !== null &&
                            node.argument.type === "Identifier" &&
                            node.argument.name === "undefined"
                        ) {
                            let fixthis = function(fixer) {
                                var fixed = fixer.replaceText(node, 'return;');
                                return fixed;
                            }
                            context.report({
                                node: node,
                                message: "Use `return;` instead of `return undefined;`",
                                fix: fixthis,
                            });
                        }
                    }
                };
            }
        }
    }
};