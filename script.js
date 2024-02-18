// 1. 다음의 코드를 es6문법을 이용하여 재작성 하시오.
// ES5
// let name = "noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address = "Seoul"

// let store = { name:name, fruits:fruits, address: address}

// console.log(store);

//ES6
let name = "noona's fruit store"
let fruits = ["banana","apple","mango"]
let address = "Seoul"

let store = {name, fruits, address}

console.log(store);

// 2. ES6문법을 이용하여 다음과 같이 출력하시오.
// 제 가게 이름은 noona's fruit store 입니다. 위치는 서울에 있습니다.

let name = "noona's fruit store"
let fruits = ["banana","apple","mango"]
let address = "Seoul"

console.log(`제 가게 이름은 ${name} 입니다. 위치는 ${address}에 있습니다.`)

// 3. 다음 코드를 Destructoring을 이용하여 해결하시오.
function calculate(obj) { //함수 안을 바꾸시오.
    var {a, b, c} = obj
    return a+b+c
}
console.log(calculate({a:1, b:2, c:3}))

// 4. 다음 문제에 정답이 true가 나오게 하시오.
let name = "noona's fruit store"
let fruits = ["banana","apple","mango"]
let address = {
    country: "Korea",
    city: "Seoul"
}

function findStore(obj){
    return name == "noona store" || address.city == "Seoul"
}
console.log(findStore(name, fruits, address.city))

// 5. 다음과 같이 프린트되게 코드를 바꾸시오.
function getNumber(){
    let array = [1,2,3,4,5,6] //여기서부터 바꾸시오.
    let [first, , third, forth,...rest] = array
    return {first, third, forth}
}
console.log(getNumber()) // 결과값 { first:1, third:3, forth:4 }

// 6. 다음의 결과가 true가 되게 하시오.
function getCalendar(first,...rest) {
    return (
        first === "January" &&
        rest[0] === "February" &&
        rest[1] === "March" &&
        rest[2] === undefined
    );
}
console.log(getCalendar()); // 여기를 바꾸시오.
console.log(getCalendar("January", "February", "March")); 

// 7. 두 어레이들 중 최소값을 찾는 함수를 완성하시오.
function getMinimum() {
    let a = [45, 23, 78]
    let b = [54, 11, 9]
    return Math.min(...a,  ...b) // 여기를 바꾸시오.
}

console.log(getMinimum())

// 8. 다음의 함수를 화살표 함수로 바꾸시오.
function sumNumber() {
    // 여기서부터 바꾸시오.
    const sum = function(a,b) {
        return a+b;
    };
    return sum(40, 10);
}
console.log(sumNumber())

function sumNumber() {
    // 여기서부터 바꾸시오.
    const sum = (a,b)=> a+b;
    return sum(40, 10);
}
console.log(sumNumber())

// 9. 다음 함수를 화살표 함수로 바꾸시오.
// function sumNumber() {
//     // 여기서부터 바꾸시오.
//     return addNumber(1)(2)(3);
//     function addNumber(a){
//         return function (b) {
//             return function (c) {
//                 return a + b + c;
//             }
//         }
//     }
// }
// console.log(sumNumber())

function sumNumber() {
    //     // 여기서부터 바꾸시오.
        let addNumber=(a)=>(b)=>(c)=> a+b+c
        return addNumber(1)(2)(3);
    }
    console.log(sumNumber())
