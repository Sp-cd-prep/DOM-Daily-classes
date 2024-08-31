// Access the heading element by its ID
// const headingElement = document.getElementById('myHeading');

// Change the text and style
// headingElement.textContent = "New Heading Text";
// headingElement.style.color = "blue";
// headingElement.style.backgroundColor = "yellow";



// const container = document.querySelectorAll(".box");

// container.style.color = "red";
// container.forEach(paragraph => {
//     console.log(paragraph.textContent);
//   });
// innerHTML
// innerText
// textContent


//innerText

// const element = document.getElementById("main")
// const result = element.innerText;
// console.log(result)

//innerHTML

// const element = document.getElementById("main")
// const result = element.innerHTML;
// console.log(result)

//textContent

// const element = document.getElementById("main")
// const result = element.textContent;
// console.log(result)



// When a function is called with the new keyword, the function will be used as a constructor.


// getMonth():
// return the month with 0 to 11 . 0 means january, 11 december


// Node vs Elements

// Node: is a basic building block of a DOM Tree. Nodes can be element ,comments, or text. 
// Every node has a parent and can have children. 

//-> A node is a DOM Object,while element is a specific type of Node.
//-> All element are nodes, but not all nodes are elements.

// Spread opeartor(...): allows us to spread the value of an array and it helps us to destructure the array.

// generater Function
// - A generator function can stop in midway and then continue from where it stopped.
// - A generator is a function that produces a sequence of results instead of a single result.


// note : yield is an operator with which a generator can pause itself.
// syntax:


// function * generator(){
//     statement...;
//     yield "hello";
//     statement...;
// }

// const generatorObject = generator();

// console.log(generatorObject.next())


// yield operator returns an Object with 2 properties , value and done;
// Value property contains the value yielded by the generator function.
// Done property is a boolean that indicates wheather the generator has completed its execution. 

// when the generator is paused i.e waiting at a 'yield', then 'done' is 'false'
// when the generator has executed all its code and there are no more yield statement, then 'done' becomes 'true'  

// Callback hell
// callback hell is formed a piramid like structure or an anti-pattern with multiple callbacks which makes the code hard to read and debug when dealing with multiple asynchronous function.

//callback hell

// function demo(callback){
//     console.log("hello");
//     callback()
// }
// function demo2(callback){
//     console.log("world");
//     callback()
// }
// function demo3(callback){
//     console.log("universe");
//     callback()
// }
// function demo4(){
//     console.log("Milkyway")
// }

// demo(()=>{
//     demo2(()=>{
//         demo3(()=>{
//             demo4()
//         })
//     })
// })


// setTimeout(()=>{
//     console.log("1")
//     setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//             console.log("3");
//             setTimeout(()=>{
//                 console.log("4");
//                 setTimeout(()=>{
//                     console.log("5")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)




// Promise
// Why we need Promise

// -Promises are used to handle asynchronous function in javascript. 
// - They are easy to manage when dealing with multiple asynchronous function/opration.  

// Promise are the ideal choice for handeling Async function in the simplest manner.
// It can provide better error handeling than callbacks.

// Promise is devided into 3 states
// 1. pending: initial state, neither fullfilled nor rejected 
// 2. fulfilled: operation was completed successfully.
// 3. rejected: operation failed.


// Promise Consumers:tonhandel the promise 
// 1).then()

// 2).catch()

//Method-1 

// const promise = new Promise((resolve,reject)=>{
//     let payment=true;
//     if(payment==true){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })

// promise
// .then(()=>console.log("Dashboard Access"))

// .catch(()=>console.log("Dashboard Access denied"))

//Method-2

// function pro(){
//     return new Promise((res, rej) => {
//        res()
//        console.log("Hello");
//    })
// }
//    pro().then(()=>console.log("world"))
//    .catch(()=>console.log("error"))
   
//Method-3
// function pro(){
//     return new Promise((res, rej) => {
//        res()
//        console.log("Hello");
//    }).then(()=>console.log("world"))
//    .catch(()=>console.log("error"))
// }
// pro()
   

// finally()

// function pro(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//           res("Promise resolved")
//         },1000)
//    })
//    .then((res)=>console.log(res))
//    .catch(()=>console.log("error"))
//    .finally(()=>console.log("Promise is completed "))
//    }
//    pro()


// Promise chaining:

// function pro(num){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//           console.log(num);
//           res()
//         },1000)
//    })
//    }
//    pro(1)
//    .then(()=>pro(2))
//    .then(()=>pro(3))
//    .then(()=>pro(4))
//    .then(()=>pro(5))
//    .catch(()=>console.log("error"))


// Promise.all():takes the promises in a form of array. We can access the .then method only if my all promises has been resolved.

// const promise1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("promise 1 is resolved")
//     },1000);
// })
// const promise2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res("promise 2 is resolved")
//     },1000);
// })

// Promise.all([promise1,promise2])
// .then((x)=>console.log("Both promises resolved ",x))
// .catch((error)=>console.log(error));



// Async and await

// Async function:
// it will always returns a promise
// if it can be any value which is non-promise, the async will automatically wrap this inside a promise and return.
// if the return value is promise then it will not wrapped into another promise

// we can handel the promise by using async and await

// const pro = new Promise((res,rej)=>{
//     res("promise resolved")
// })

// async function sample(){
//     return pro
// }

// const dataPro = sample()
// dataPro.then((res)=>console.log(res))


// Await
// await is only be use inside the async function
// await handel the promise even if we dont use .then method
// The use of await pauses the async function untill the promise returns a result

// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved")
//     },5000)
// })

// pro.then((res)=>console.log(res));
// console.log("hii")

// async function handelPromise(){
//    const value =  await pro;
//    console.log(value);
//    console.log("Dashboard access")
// }
// handelPromise()


// Q. Print 1 to 5 in a duration of one second

// function pro(num){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//           console.log(num);
//           res()
//         },1000)
//     })
//     }
    
// async function printNum(){
//     await pro(1);
//     await pro(2);
//     await pro(3);
//     await pro(4);
//     await pro(5);
// }   
// printNum()


// JSON

// It is often used to transmit data between a server and a web application.

// fetch

// the fetch function used to make a network Request. It takes a URL as its argument and returns a Promsie that resolves to the response Object.


// fetch('https://jsonplaceholder.typicode.com/todos/1')

    //   .then(response => console.log(response)) //used to handel the resolves value of promise

    //   output

    // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}
    // body: (...)
    // bodyUsed:false
    // headers: 
    // Headers {}
    // ok: true
    // redirected: false
    // status: 200
    // statusText: ""
    // type: "cors"
    // url: "https://jsonplaceholder.typicode.com/users"
//    }

    //   .then(response=>console.log(response.json()))// it is a method of response object that reads the response and returns a promise. It basically parse the JSON data from the response and return it

    //   output

// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(10)


        // .then(data=>console.log(data)) this method is chained to handel the promise which is returned by response.json()



        async function getData(){

            try{
              const res = await fetch('https://jsonplaceholder.typicode.com/users')
              const data  = await res.json()
            
                const tbody = document.getElementById("user");
                  data.forEach((user)=>{
          
                    const tr = document.createElement("tr");
                    const td1 = document.createElement("td")
                    const td2 = document.createElement("td")
          
                    td1.textContent = user.name;
                    td2.textContent = user.email;
          
                    tbody.appendChild(tr);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
          
                  })
                }
                catch(error){
                  console.error(error,"api error")
                }
                }
          
              getData()
          



// Prototype              

// are the mechanism by which javascript object inherit features from one another.
// Every object in javascript has a built-in property which is called its prototype.

// The js prototype allows you to add new properties to object constructor/function constructor. 

// Prototype is itself an object. So the prototype will have its own prototype. Now it will make prototype chaining. 



// function Person(name, age) {
//     this.name = name;
//         this.age = age;
// }

// Person.prototype.grade = "A+"
// const person1 = new Person("Alice", 25);


// console.log(person1.name,person1.age,person1.grade); 



// __proto__


// function Car(name,model){
//     this.name= name;
//     this.model = model;
//   }

//   //prototype syntax 
//   // Car.__proto__.owner = "Jhon"
//   const carModel = new Car("Audi","220d");

//   //__proto__ syntax
//   // carModel.prototype.owner = "Jhon";
//   console.log(carModel.owner + " is the owner of "+carModel.name);
//   console.log(carModel);




// Cookies
// cookies are small pieces of data stroed on the clients computer by the web server 
// cookies can store upto 4KB of data






