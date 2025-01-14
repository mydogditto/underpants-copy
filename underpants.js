// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
if(typeof value === 'string'){
    return 'string'
  } else if (Array.isArray(value)){
    return 'array'
  } else if (typeof value === 'undefined'){
    return 'undefined'
  } else if(typeof value === 'number'){
    return 'number'
  } else if (typeof value === 'boolean'){
  return 'boolean'
  } else if (value === null){
    return 'null'
  } else if (typeof value === "function" ){
    return "function"
  } else if (value === 'object'){
  } return 'object'
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// array = array of strings 
// num = number of string 
_.first = function(array, number){
 // if array is not an array  return empty array
if (Array.isArray(array)=== false){
    return [];
    // if num is not a num or undefined return array[0]
} if(number === undefined || number === NaN){
return array[0];
// if number is negative return an empty array
} if (number < 0){
    return [];
     // if number is > that the length of the array
}if (number > array.length){
     // return the full array 
    return array;
}else {
    // else return a slliced verstion of the array until number 
    return array.slice(0, number)
}

}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    // if array is not array return empty array
    if(Array.isArray(array) === false){
        return []
        //if number is NaN or undefined  return array.length - 1
    } if(number === NaN || number === undefined){
        return array[array.length - 1]
        // if number is negative return an empty array
    } if(number < 0){
        return []
        // if number is > array.length return the whole array
    } if(number > array.length){
        return array
        // else return last element in the array using slice method
    } else {

        return array.slice(1, array[number.lengthn - 1])
    }
    
    
    
    
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){

// loop through the array
for(let i = 0; i < array.length; i++){
    // if array[i] is = value 
   if (array[i] === value){
    // return the index of the value // only the return the first instance of any value
    return i
}
}
// otherwise if value is not an array
// return -1
return -1

}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains  = function(array, value){
// loop through the array
for(let i = 0; i < array.length; i++){
    // if array[i] === value 
    if(array[i] === value){
        // return true 
        return true
    }
}
//  default value return false 
return false
}

/** _.each 
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
_.each({a: 1, b:2}, function(e, i, a)){ console.log(e)};
*/ 
_.each = function (collection, func){
// determine if collection is an array
if(Array.isArray(collection)){
// loop through collection
for(let i = 0; i < collection.length; i++){
    //invoke the callback function with element, index, collection
    func(collection[i], i, collection)
}
}
// else it is an object
else {
if(typeof collection === "object"){
// loop through the object
for(let key in collection )
{// call calback function collection[key], key, collection
    func(collection[key], key, collection)
}
}
}
}



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    // create output array
    let output = []
    // loop through the array 
    for(let i = 0; i < array.length; i++){
        // if array[i] with indexOf invoked on it = -1 will filter out the duplicits
       if(output.indexOf(array[i]) === -1){
        // push just the first ocurences of each number
        output.push(array[i])
       }
        
    }
    // return output array
    return output

}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    // create an output array
    let output = []
    // loop through the array
    for(let i = 0; i < array.length; i++){
        // if the result of the callback is truthy 
       if(func(array[i], i, array)){
        // push array[i]
            output.push(array[i])
        }
    }
     return output
} 



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    // setup an output array
    let output = []
    // loop through the array
    for(let i = 0; i < array.length; i++){
    // set up a func calling array[i], i, array = to false 
    if(!func(array[i], i, array)){
        // push array[i] to output 
        output.push(array[i])
    }
    }
     // return output
    return output
    
   
}
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    // set up array truthy
    let truthy = []
    // set up array falsey
    let falsey = []
    // setup output array
    let output = []
    // loop through the array
    for(let i = 0; i < array.length; i++){
        // if func invocation  array[i], i, array
        if(func(array[i], i, array)){
              // push to truthy
            truthy.push(array[i])
             // else push to false
        } else{ falsey.push(array[i])}
    }
    
    // use push to add truthy & to output 
    output.push(truthy, falsey)
    // return output 
    return output
    


}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
   // setup output array
   let output = []
   // see if collection is an array
   if(Array.isArray(collection)){
   // loop through the array 
    for(let i = 0; i < collection.length; i++){
// set callback to a variable 
// callback should be the invokation of collection[i], i, collection: collection[i] is all that is required
        output.push(func(collection[i], i, collection))
        
   
   // push the result of the invokation to ouput 
    }
    // else the collection must be a object
   } else {
// loop through collection
    for(let key in collection){
     // set callback function to a variable 
     // callback function should be collection[key], key, collection
     let result = func(collection[key], key, collection)
      // push variable to output  
     output.push(result)
    }
   }
   // return output
   return output
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property){

// loop through the array of objects using map() set to a variable 
let result = _.map(array, function(object){
// the function input should be a single object from the array of objects should return for map should be object[key]
   return  object[property]
})
// return the variable that was set to the result of the function
return result
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
// if func is undefined
if(func === undefined){
//if array is array
if(Array.isArray(collection)){
    // loop through the array
    for(let i = 0; i < collection.length; i++){
// if the collection[i] as a whole is falsy 
if(!collection[i]){
    // return false
    return false
}

    }
    // else the collection is an object
} else{
    // loop through the object 
    for(key in collection){
// if collection[key] is falsey 
if(!collection[key]){
// return false
return false
}
    }
}


}// if function is defined // else if collection is an array
else {
    if(Array.isArray(collection)){
      // loop through the array  
      for(let i = 0; i < collection.length; i++){
       // if invoking the calback is falsey !func(collection[i]) 
       if(!func(collection[i], i, collection)){
        return false
       }
      }
      // else collection is an object
    } else{
        // loop through the object called collection 
        for(let key in collection){
        // if callback !func(collection[key]) is false 
        if(!func(collection[key], key, collection)){
            // return false
            return false
        }
        }
    }
   
} 
return true
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){

// if func is undefined
if(func === undefined){
    //if array is array
    if(Array.isArray(collection)){
        // loop through the array
        for(let i = 0; i < collection.length; i++){
    // if the collection[i] as a whole is truthy 
    if(collection[i]){
        // return true
        return true
    }
    
        }
        // else the collection is an object
    } else{
        // loop through the object 
        for(key in collection){
    // if collection[key] is truthy 
    if(collection[key]){
    // return true
    return true
    }
        }
    }
    
    
    }// if function is defined // else if collection is an array
    else {
        if(Array.isArray(collection)){
          // loop through the array  
          for(let i = 0; i < collection.length; i++){
           // if invoking the calback is truthy func(collection[i]) 
           if(func(collection[i], i, collection)){
            return true
           }
          }
          // else collection is an object
        } else{
            // loop through the object called collection 
            for(let key in collection){
            // if callback !func(collection[key]) is true 
            if(func(collection[key], key, collection)){
                // return true
                return true
            }
            }
        }
       
    } 
    // return true
    return false
    }



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
// inishalize a accumulation variable 
let accum;
// if seed is undefined
if(seed === undefined){
    // set output value to array[0]
    accum = array[0]
    // loop through the array starting from one b/c seed is the first iteration
    for(let i = 1; i < array.length; i++){
        // accum variable = to calling the function acc, array[i], i, 
        accum = func(accum,array[i], i)
    }
    // otherwise acc = seed
} else{ accum = seed
// loop through the array
for(let i = 0; i < array.length; i++){
// set acc to the result of the function call on acc, array[i], i, 
accum = func(accum, array[i], i)
}
}
// return acc 
return accum
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// use spred opporater to indicate any number of objects can be passed in
// we can assume objects are grouped in a collection
_.extend = function(obj1, obj2, ...obj){
// loop through the objects collection created by the spread opporater 
   
        // use the Object.assign method to destructivly add the properties to target
       return  Object.assign(obj1, obj2, ...obj);
       }
    // return target 
   

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}