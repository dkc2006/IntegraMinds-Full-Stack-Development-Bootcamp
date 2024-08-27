use("a1");

db.users.insertOne({
    _id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
});


db.users.updateOne({
    _id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
});