use('a1');

// db.users.insertOne({
//     _id: 3,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password123"
// });

db.users.find({});


// db.users.updateOne(
//     {
//     _id: 3,
// },
//     {
//         $set: {
//             status: 'active',
//         },
//     }
// );

// db.users.find({_id: 3});

// db.users.insertMany([{
//     _id: 6,
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     password: "password456"
// },
// ]);


// db.users.updateOne(
//     {
//     _id: 5,
// },
//     {
//         $unset: {
//            random:1,
//         },
//     }
// );

// db.users.find({_id: {$lt:5}});

// db.users.updateOne(
//     {
//     _id: 5,
// },
//     {
//         $unset: {
//            random:1,
//         },
//     }
// );
// db.users.find({_id: {$gte:5}});

db.users.updateOne(
    {
    _id: 5,
},
    {
        $unset: {
           random:1,
        },
    }
);
// db.users.find({_id: {$in:[5,6]}});

// db.users.find({},{_id: 1, name: 1}).limit(100)
// db.users.find({_id: {$gt:5}});
// db.users.find({_id: {$in:[5,6]}}).sort({_id:-1});
// db.users.find({_id: {$gte:5}}).limit(3)
db.users.find({_id: {$gte:5}}).limit(3).sort({_id:-1})

