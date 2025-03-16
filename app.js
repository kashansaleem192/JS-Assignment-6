// Asignment 21-25

// // Q 1
// var firstName = prompt("Enter Your First Name")
// var LastName = prompt("Enter Your Last Name")
// var fullName = alert( "Hi" + firstName, " ",LastName , "Welcome to our Website" )

// // Q 2
// var favourite_mobiles = prompt( "Enter Your Favourite Mobile Brands")
// console.log("My Favourite Phones  is :" , favourite_mobiles)
// var stringLength =favourite_mobiles.length
// console.log( "String Length", stringLength)

// // Q 3
// var string = "Pakistani"
// var index = string.indexOf("n");
// console.log( "String", string  )
// console.log(  "Index Number"+index
// )

// // Q 4

// var String1 = "Hello World"
// var IndexNum = String1.lastIndexOf("l")
// console.log( "String", String1  )
// console.log( "Index Number",IndexNum)

// // Q 5
// var string = "Pakistani"
// var Char3 = string.charAt(3)

// console.log( "String", string  )
// console.log(  "Character at index 3 is", Char3)

// Q 6
// var firstName = prompt("Enter Your First Name")
// var LastName = prompt("Enter Your Last Name")
// var fullNames = firstName.concat(" " , LastName)
// console.log( fullNames ,"Welcome to our Website")

// Q 7

var word = "Hyedarabad"
var afterReplace = word.replace("Hyedar", "Islam")
console.log("City ", word);
console.log("After Replace", afterReplace)

// Q 8

var message = "Ali and Sami are best friends. They play cricket and football together."
var replaceWord = message.replaceAll("and ", " & ")
console.log(message)
console.log("After Replace ", replaceWord)

// Q 9
var value = "472"
var newvalue = 472
console.log("Value", typeof value )
console.log( "Value",typeof newvalue)

// Q 10
var user_input = prompt("Enter your Country name")
var upperCase = user_input.toUpperCase()
console.log("User Input" ,user_input)
console.log( "Upper Case", upperCase)

// Q 11

var  user_input1 = prompt( "Enter Your City Name")
var firstChar = user_input1.slice(0,1).toUpperCase()
var moreChar = user_input1.slice(1).toLowerCase()
console.log("User Input", user_input1)
console.log( "Title Case", firstChar+moreChar )

// Q 12

var num = 35.36;
var string =num.toString().replace("." ,"");
console.log( "Number",num);
console.log("String",string);

// Q 13
 
var userNameInput = prompt( "Enter a User Name");
var specailChar = ["@",",",".","!"];

for(var i = 0 ;i<userNameInput.length;i++){
    if(userNameInput.slice(i,i+1) === "@" ||","||"."||"!") {
       console.log( "Please Enter a Valid User Name");
       break;
    }

}