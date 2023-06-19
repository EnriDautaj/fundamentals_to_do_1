function beCheerful(){
    console.log("good morning!");
}

for(var i = 1; i < 99; i++){
    beCheerful(i);
}


function isItMyBirthday(num1, num2){
    let day = 9;
    let month = 12;
    
    if(num1 == day || num2 == day){
        if(num1 == month || num2 == month){
            console.log("How did you know?");
        }
    }
    else{
        console.log("Just antoher day...");
    }
}

isItMyBirthday(9, 12);
isItMyBirthday(3, 5)


function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Example usage
  console.log(isLeapYear(2000)); 
  console.log(isLeapYear(2020));   
  console.log(isLeapYear(1900));   
  console.log(isLeapYear(2022));
  
  


  
  
  function printCount(){
    var count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 == 0){
            console.log(i);
            count++;
        }
    }
    console.log(`There are ${count} multiples of 5`);
}

printCount();



for (let num = 1; num <= 100; num++) {
    if (num % 10 === 0) {
      console.log("Coding Dojo");
    } else if (num % 5 === 0) {
      console.log("Coding");
    } else {
      console.log(num);
    }
  }

  
  
  
  function myFunction(incoming) {
    console.log(incoming);
  }
  
  // Example usage
  myFunction("Hello, world!");  
  myFunction(42);                
  myFunction(true);    
  
  
let sum = 0;

for (let num = -299999; num <= 299999; num += 2) {
  sum += num;
}

console.log("The sum of odd integers from -300,000 to 300,000 is:", sum);

  
  
let num = 2016;

while (num > 0) {
  console.log(num);
  num -= 4;
}



function printMultiples(lowNum, highNum, mult) {
    for (let num = highNum; num >= lowNum; num--) {
      if (num % mult === 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  printMultiples(2, 9, 3);


  function printMultiples(param1, param2, param3, param4) {
    let num = param2;
  
    while (num <= param3) {
      if (num % param1 === 0 && num !== param4) {
        console.log(num);
      }
      num++;
    }
  }
  
  // Example usage
  printMultiples(3, 5, 17, 9);
  
  
