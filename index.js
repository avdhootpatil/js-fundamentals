

const carID = 100;   //read only


if (true) {
    // let foo = 9;
    var foo = 9;                    //let has block scoping , var will work here
}

console.log(foo);


console.log('webpack starterkit');

// destructuring objects
let car = { id: 5000, style: 'convertibel' };
let { id, style } = car;
console.log(id, style);







// spread syntax

function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, rest);
}

let carId = [1, 2, 3, 5, 6, 7];
startCars(...carId);       // taking an array and spreading it into the number of variables







// IIFE (immediately invoked function expression)

let app = (function () {
    let carID = 123;
    console.log("in function");
    return {};
})();

console.log(app);






// closure

let app1 = (function () {
    let carID = 1234;
    let carName = "hector";
    let getID = function () {
        return carID;
    };
    let getName = function () {
        return carName;
    };
    return {
        getid: getID,
        getCarName: getName
    };
})();

console.log(app1.getid(), app1.getCarName());







//this keyword
// this refers to an object and not function as an object
let o = {
    carName: "s3",
    getCarName: function () {
        return this.carName;
    }
};

console.log(o.getCarName());





//bind

let ob = {
    carId: 789,
    getID: function () {
        return this.carId;
    }
};

let newCar = { carId: 123 };

let fn = ob.getID.bind(newCar);
console.log(fn());





// Arrow function

let getID = () => 123;
console.log(getID());


// Default parameter
let trackCar = function (carId, city = 'NY') {
    console.log(`Tracking car ${carId} in ${city}`);
};


console.log(trackCar(384));
console.log(trackCar(348, 'Pune'));






// contructor function

function Car(id) {
    this.carId = id;
    this.startCar = function () {
        console.log('start : ', this.carId);
    };
};

let car1 = new Car(123);
car1.startCar();






//prototype
// if there are million cars constructor will create million functions
// hence,we use prototypes where methods are being used 
// to reduce memory useage

function Carr(id) {
    this.carId = id;
};


Carr.prototype.startCar = function () {
    console.log("start : ", + this.carId);
};


let car2 = new Carr(123);
car2.startCar();






// converting to JSON
let car3 = {
    id: 123,
    style: "convertible",
    type: "sedan"
};


console.log(JSON.stringify(car));



// Class 
class Bike {
    // constructor
    constructor(id) {
        this.id = id;
    }

    // Method
    identify() {
        return `Car ID : ${this.id}`;
    }
}

let bike = new Bike(123);
console.log(bike.identify());




//  Timer
// Firing function once

let timeout = setTimeout(function () {
    console.log("Hi from Pune!!!");
}, 2000);

// cancel the timeout
clearTimeout(timeout);





// firing function on intervals

let timeInterval = setInterval(function () {
    console.log("Hi from mumbai!!");
}, 2000);

// CLearing interval
clearInterval(timeInterval);




// The location object
console.log(location.port, location.href, location.hostname,
    location.pathname, location.search);


//  Document object
console.log(document.body);


// Error handling in js
try {
    let cart = newCart;
}
catch (error) {
    console.log('error:', error);
}

console.log('continuing...');




// Developer defined errors
try {
    // throwing custom error
    throw new Error('Custom error');
} catch (error) {
    console.log("Error : ", error);
} finally {
    console.log('This always executes');
}




// Promise
// A temporary holder for a value that you'll retrieve once an
// asynchronous operation has been complete.

//  creating a promise

let promise = new Promise(
    function (resolve, reject) {
        setTimeout(resolve, 100, 'value');
    });

console.log(promise);




// resolving the promise
let promise1 = new Promise(
    function (resolve, reject) {
        setTimeout(resolve, 100, 'value');
    }
);
promise.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('rejected: ' + error)
);




// Data access using http
// Using XHR low level mechanism

// HTTP request using XHR
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("GET", "http(s)://5d493bde2d59e50014f21107.mockapi.io/js/:users", true);
xhttp.send();


