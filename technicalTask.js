//Find the unique elements in an array, removes any duplicates, and classify the unique elements into two arrays: one containing even numbers and the other containing odd numbers.

function findArrayElements(nums){
    const uniqueSet = new Set(nums);
    //console.log(uniqueSet);
    const uniqueArray = Array.from(uniqueSet);

    const evenNumbers = uniqueArray.filter(num => num % 2 ===0);
    const oddNumbers = uniqueArray.filter(num => num % 2 !==0);

    return [evenNumbers, oddNumbers];

}
const arrayElement = findArrayElements([1, 2, 3, 4, 5, 6, 4, 6]);
console.log("Array Elements", arrayElement);

//Create a program that calculates the total number of hours from a given number of days. Use data-type number.
  
function calculatesNumbers(days){
    const hoursOfday = 24;
    const totalHours = days * hoursOfday;
    return totalHours

}
const days= 5;
const totalNumberofHours = calculatesNumbers(days);
console.log(totalNumberofHours);

//Find the largest number from this array [5, 2, 9, 1,5, 6].

const arrayNumbers = [5, 2, 9, 1, 5, 6];
const largestNumber = Math.max(...arrayNumbers);
console.log(largestNumber);

//Find the summation from this array elements [1, 2, 3, 4, 5].
    const myArray = [1, 2, 3, 4, 5];
        sum = 0
    for(let i=0; i<myArray.length; i++){
        sum += myArray[i]
    }
    console.log(sum);

    //Reverse the string “Hello World”

    function reverseString(str){
        let  reverseStr = "";
        for(let i=str.length-1; i>=0; i--){
           reverseStr += str[i];
        }
         
        return reverseStr;
       
    }
     const origrinalString = "Hello World";
     const reverseStr =  reverseString(origrinalString);
     console.log("Reverse String", reverseStr);
    

   




