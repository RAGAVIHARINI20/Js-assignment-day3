//exploring about console functions

/*Mainly used to console.log(print) the output to the console. 
We can put any type inside the log(), be it a string, array, object, boolean etc.*/

console.log("hi i'm going to explore about console funcyions");
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined);  
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log 

/*console.error()

Used to log error message to the console. Useful in testing of code.
 By default the error message will be highlighted with red color.
 
 */

 console.error('This is a error'); 

 /*console.warn()

Used to log warning message to the console. 
By default the warning message will be highlighted with yellow color.

*/

console.warn('This is a warning.');  

/*console.clear()

Used to clear the console. 
The console will be cleared,in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’

*/

console.clear(); 

/* Whenever we want to know the amount of time spend by a block or a function,
 we can make use of the time() and timeEnd() methods provided by the javascript console object. 

 */

console.time('abc'); 
let fun =  function(){ 
    console.log('fun is running'); 
} 
let fun2 = function(){ 
    console.log('fun2 is running..'); 
} 
fun(); // calling fun(); 
fun2(); // calling fun2(); 
console.timeEnd('abc'); 


/* console.table()

This method allows us to generate a table inside a console. 
The input must be an array or an object which will be shown as a table. 

*/

console.table({'a':1, 'b':2});

/*console.count()

This method is used to count the number that the function hit by this counting method.*/

for(let i=0;i<5;i++){ 
    console.count(i); 
} 


