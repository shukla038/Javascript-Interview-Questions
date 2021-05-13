
const logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
]

// 1.  forEach polyfill
Array.prototype.forEachPoly = (callBack) => {
    for(let i=0; i<this.length;i++){
        callBack(this[i], i, this);
    }
}
logicAlbums.forEachPoly(item => console.log(item));

//2.  map Polyfill
Array.prototype.mapPoly = (callBack) => {
    let result = [];
    for(let i=0;i<this.length; i++){
        result.push(callBack(this[i],i,this));
    }
    return result;
}
logicAlbums.mapPoly(item => item);

//3.  filter polyfill

const logicAlbumsFilter = [
    {
      name: 'Bobby Tarantino',
      rating: 5,
    },
    { name: 'The Incredible True Story', rating: 4.5 },
    {
      name: 'Supermarket',
      rating: 4.9,
    },
    { name: 'Under Pressure', rating: 5 },
]
Array.prototype.filterPoly = (callBack) => {
    let result = [];
    for(let i=0;i<this.length; i++){
        if(callBack(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}
logicAlbumsFilter.filterPoly(item => item.rating > 4.9);

//4.  find polyfill
Array.prototype.findPoly = (callBack) => {
    for(let i=0;i<this.length; i++){
        if(callBack(this[i],i,this)){
            return this[i];
        }
    }
}
logicAlbumsFilter.findPoly(item => item.rating > 4.9);

//5.  reduce polyfill

Array.prototype.reduce = (callBack, initialVal) => {
    let accumulator = initialVal;
    for(i; i<this.length; i++){
        accumulator = callBack(result, this[i], i, this);
    }
    return accumulator;
}

//6.  flat function polyfill
Array.prototype.flatPolyfill = (depth = 1) => {
    var flatten = (arr, depth) => {
        if(depth<1) { 
            return arr.slice(); 
        }
        return arr.reduce((acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val, depth-1) :val);
        }) 
    }
    return flatten(this, depth);
}

//7.  shuffle array
  function shuffle(arr){
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random(currentIndex));
            currentIndex -= currentIndex;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
  }  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);

// 8. debounce Function
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}
  const debounce = function(func, delay=0){
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(()=>
        {
            func.apply(this, arguments);
        }, delay)
    }
}
const betterFunction = debounce(getData, 300);

// 9. Throttle Function
const loggerFunc = () => {
    console.count("Throttled Function");
  }
const Throttle = function(func, delay=0){
    let flag = true;
    return () => {
        if(flag){
            func.apply(this, arguments);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }    
}
const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize",betterLoggerFunction);

//10 . 4 ways to create object in javascript
//  source: https://dzone.com/articles/easy-javascript-part-13-four-ways-to-create-object

// 11. Currying
    // Ex- 1 infinite arguments
    var sum = (a) => (b) => b? sum(a+b) : a;
    sum(1)(2)();
    // limited arguments
    var multiply = (a,b,c) => {
        return (a*b*c);
    }
    var curry = (func) => {
        return function curried(...args) {
            if(args.length >= func.length){
                return funca.apply(this,...args);
            } else{
                return function(...args2){
                    return curried.apply(this, args.concat(args2));
                }
            }
        }
    }
    var curried = curry(multiply)
    curried(1)(2,3)

