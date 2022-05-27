// 1-create a function receives a parameter data. You must write the code based on the following rules:
// -Your function must always return a promise
// - If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// - If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// -If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function func(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== "number") {
            reject("error");
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("odd");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("even");
            }, 2000);
        }
    });
}
func("4") //eror
    .then(num => console.log(num))
    .catch(err => console.log(err));
func(4) //even after 2s
    .then(num => console.log(num))
    .catch(err => console.log(err));



//2-output?
function job1(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("result of job1");
        }, 1000);
    });
}

function job2(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("result of job2");
        }, 1000);
    });
}

var promise = job1();
promise
    .then(function(data1){
        console.log("data1", data1); //displays "data1" and resolve of job1() after 1s and returns function job2() ti next then --> data1 result of job1
        return job2();
    })
    .then(function(data2){
        console.log("data2", data2); //displays "data2" and resolve of job2() after 1s and returns the string:"hello world" to next then --> data2 result of job2
        return "hello world";
    })
    .then(function(data3){
        console.log("data3", data3); //displays "data3" and "hello world" from previous then instantly --> data3 hello world
    });



// 3-what is output :
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1"); //Error 1 -> because of reject(line67) this code is executed
  })
  .then(function () {
    console.log("Success 4"); //Success 4 -> every branch after catch would be executed
  });




// 4-Create an async function to show “i love you!!” after 3 seconds with promise.
const loadMsg = async () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i love you");
    }, 3000);
  });
  console.log(await myPromise); //i love you after 3s
};
//second sol:
// async function myDisplay() {
//   let myPromise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("I love You !!");
//     }, 3000);
//   });
//   return await myPromise;
// }

loadMsg();
