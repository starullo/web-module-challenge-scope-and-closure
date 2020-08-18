

/*
2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js */
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

/* MY ANSWER */
function createBase(num) {
    return function(num2) {
        return num + num2;
    }
}

