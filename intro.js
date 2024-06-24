const users=["kafayat","Ebele","Joseph","Camelita","Lydia"]//5

//use index to get items in an array
console.log(users[0]);
console.log(users[4]);

//loop through the users array 
for(let i=0; i<users.length; i++){
    console.log(users[i])
}
const firstName="jayeola"
const firstString="hello"
const age=24
const profession="DataScientist"


console.log(firstString+ " " +firstName + "your age is" + " " + age)

//template literals
console.log(`hello ${firstName} your age is ${age} and you are a ${profession} and your tag is ${profession=="Student"?"black":"white"}`)


0,1,2,3,4,5,6,7,8,9
//loop users and use template literals 
for(let i=0; i<users.length; i++){
         console.log(`my name is ${users[i]}`)
        }

//global object 
console.log(global );

//setTimeout function to log hi every 3 seconds
setTimeout(()=>{
console.log("hiii")
},5000)
console.log("hello")

console.log(__dirname)



