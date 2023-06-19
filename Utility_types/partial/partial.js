var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "Welcome to my web appliaction",
    description: "to store user details with personal securoity credentials",
};
var todo2 = updateTodo(todo1, {
    description: "throw out the dummy user details with the cache",
});
console.log(todo1);
console.log(todo2);
