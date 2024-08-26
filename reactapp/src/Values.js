const profile = {
    name: 'John Doe',
    email: "",
    age: 30,
    hobbies: ['reading', 'painting', 'cooking'],
    address: {
        street: "123 Main St",
        city: 'New York',
        state: 'NY',
        zip: "12345",
        country: {
            name: 'United States',
            code: "US"
        },
    },
};

const {address:{country:{code:countryCode}}}=profile;

console.log("Code: ", Code); 

console.log("🚀 ~ country:", country);

console.log("address:", address);

console.log("Country Code: ", countryCode); 


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

