const profile = {
    name: 'John Doe',
    age: 30,
    email: "",
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    hobbies: ['reading', 'painting', 'cooking'],
    country:{
        name: 'United States',
        code:"US"
    }
};

const {address:{country:{code:countryCode}}}=profile;

console.log("Country Code: ", countryCode); // Logs the country code: US

console.log("🚀 ~ countryCode:", countryCode);



// const {
//     age: myAge,
//     address,
//     address: { city },
//     hobbies,
//     hobbies: [firstHobby,secondHobby,thirdHobby,fourthHobby="No Hobby found"]
// }=profile;

// console.log(" ~ age:", age);       // Logs the age: 30
// console.log("myAge:", myAge);

// console.log("address:", address); // Logs the address
//     console.log("city:", city);             // Logs the city: 'New York'
//     console.log(hobbies);
//     console.log("firstHobby:", firstHobby); 
//     console.log("thirdHobby:", thirdHobby); 
//     console.log("fourthHobby:", fourthHobby); 
//     console.log("secondHobby:", secondHobby);
    

    
   

// const {age} = profile;
// console.log("🚀 ~ age:", age);

// Destructuring profile object
// const {
//     name,
//     email,
//     age,
//     address,
//     address: { city },
//     hobbies,
//     hobbies: [firstHobby]
// } = profile;

// console.log("🚀 ~ address:", address);       // Logs the address object
// console.log("🚀 ~ city:", city);             // Logs the city: 'New York'
// console.log("🚀 ~ email:", email);           // Logs the email, which is an empty string
// console.log("🚀 ~ firstHobby:", firstHobby); // Logs the first hobby: 'reading'
// console.log("🚀 ~ name:", name);             // Logs the name: 'John Doe'
// console.log("🚀 ~ age:", age);               // Logs the age: 30
// console.log("🚀 ~ hobbies:", hobbies);       // Logs the hobbies array


/*
1. Array Destructuring
2. Object Destructuring
3. Nested Object Destructuring

----------------------------------------------------------------

* Destructuring with Default values
* Destructuring with Aliases
*/

