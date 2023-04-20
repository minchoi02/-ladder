/*
// (1) 0 <= random < 1
const rand1 = Math.random();
document.write('(1) ' + rand1 + '<br>');

// (2) 0
const rand2 = Math.floor(Math.random());
document.write('(2) : ' + rand2 + '<br>');

// (3) 0 <= random <= 9
const rand_0_9 = Math.floor(Math.random() * 10);
document.write('(3) : ' + rand_0_9 + '<br>');

// (4) 0 <= random <= 10
const rand_0_10 = Math.floor(Math.random() * 11);
document.write('(4) : ' + rand_0_10 + '<br>');

// (5) 0 <= random <= 99
const rand_0_99 = Math.floor(Math.random() * 100);
document.write('(5) : ' + rand_0_99 + '<br>');

// (6) 0 <= random <= 100
const rand_0_100 = Math.floor(Math.random() * 101);
document.write('(6) : ' + rand_0_100 + '<br>');

// (7) 1 <= random <= 10
const rand_1_10 = Math.floor(Math.random() * 10) + 1;
document.write('(7) : ' + rand_1_10 + '<br>');

// (8) 2 <= random <= 5
const rand_2_5 = Math.floor(Math.random() * 4) + 2;
document.write('(8) : ' + rand_2_5 + '<br>');
*/

/*
let sValue = ["one", "two", "three", "four", "five"];
let sPick = Math.floor(Math.random() * sValue.length);
console.log(sPick);
// 5개의 값 중 랜덤으로 하나 출력됨
*/

/*3.14랜덤 계산방식*/
/*
var pi = 0;
var under = 1;
var type = -1;
for(var i=0;i<10000;i++){
    pi += type*1/under;
    under += 2;
    type *= -1
}

console.log(4*pi);
*/

var pi = 1;
var under = 1;
var type = -1;
for(var i=0;i<10000;i++){
    pi += type*1/under;
    under += 3;
    type *= -1
}

console.log(4*pi);

/*
var pi = 0;
var under = 1;
var type = -1;
for(var i=0;i<10000;i++){
    pi += type*1/under;
    under += 2;
    type *= -1
}

console.log(4*pi);
*/
/*
var pi = 1;
var under = 2;
var type = -2;
for(var i=0;i<10000;i++){
    pi += type*1/under;
    under += 2;
    type *= -1
}

console.log(100/pi);
*/
//console.timeLog(100)


/*
var numbers1 = [10, 30, 50, 70, 90];
var numbers2 = new Array(20, 40, 60, 80, 100);

var mixedArr = ['a', 1, 'b', 2, new Date(), "today"];
var objArr = [
  {
    "id" : 20192010,
    "name" : "HongGilDong",
    "dept" : "Software"
  },
  {
    "id" : 20192011,
    "name" : "KimSanrang",
    "dept" : "Business Management"
  },
  {
    "id" : 20192012,
    "name" : "KangDongSu",
    "dept" : "Computer Engineering"
  }
];

console.log(numbers1);
console.log(numbers2);
console.log(mixedArr);
console.log(objArr[2].name, objArr[2].dept);
*/

/*
const map = new Map();
map.set("2019101","HongGilDong");
map.set("2019102","KimSaRang");
map.set("2019103","KandDongSu");

console.log("### Original data: forEach with Arrow")
map.forEach((value, key) => console.log(key, value));

console.log("### Original data: for-of")
for(let item of map ) {
  console.log(item[0],item[1]);
}

console.log("### Original data: for-of with key, map")
for(let [key, value] of map ) {
  console.log(key,value);
}

console.log("### Original data: map.keys()")
const keys = map.keys();
for(let key of keys) {
  console.log(map.get(key));
}

console.log("### Map functions")
console.log("get 201901: "+map.get("2019101"));
map.delete("2019103")
console.log("after delete 201903, has : ", map.has("2019103"));
*/

/*
let student = {
    'id': 2019101,
    'name': 'HongGilDong',
    'scores': [95,80,91,85],
    'getTotalScore': function() {
      return this.scores.reduce((prev, curr) => prev + curr);
    }
  }
  
  console.log(student.getTotalScore());
  */
  /*
  function Product(name, price) {
    this.name = name;
    this.price = price;
    this.getInfo = function() {
      return this.name + " , " + this.price;
    }
  }
  */
  
  /*
  class Product {
    constructor(name, price)  {
      this.name = name;
      this.price = price;
    }
  
    getInfo() {
      return this.name + " , " + this.price;
    }
  }
  */
  /*
  let p1 = new Product("애플 아이폰",1000000);
  let p2 = new Product();
  p2.name = "삼성 갤럭시"
  p2.price = 1100000;
  
  console.log(p1.getInfo());
  console.log(p2.getInfo());
  */