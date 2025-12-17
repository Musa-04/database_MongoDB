use("ecommerce");
db.products.insertOne({
    name:"Mustafeez Shaikh",
    phone:8123321828,
    email:"mustafeez.shaikh@example.com",
    message:"Hello, I am interested in your products.",
    city:"Mumbai",
    role:"Student",
    createdAt:"2025-12-17"
})
db.products.insertMany([{
    name:"Mustafeez Shaikh",
    phone:8123321828,
    email:"mustafeez.shaikh@example.com",
    message:"Hello, I am interested in your products.",
    city:"Mumbai",
    role:"Student",
    createdAt:"2025-12-17"
},
{
    name:"Ayaan Khan",
    phone:9123456780,
    email:"ayaan.khan@example.com",
    message:"I would like to know more about your services.",
    city:"Belgaum",
    status:"Active",
    role:"Developer",
    createdAt:"2025-11-10"
},
{
    name:"Sara Patil",
    phone:9988776655,
    email:"sara.patil@example.com",
    message:"Can you provide a quote for bulk orders?",
    city:"Pune",
    status:"Inactive",
    role:"Manager",
    createdAt:"2025-10-05"
},
{
    name:"Neha Sharma",
    phone:8877665544,
    email:"neha.sharma@example.com",
    message:"I'm interested in your products.",
    city:"Delhi",
    status:"Active",
    role:"Designer",
    createdAt:"2025-12-17"
}])

db.products.find({"city":"Belgaum"}).pretty();

db.products.updateOne({"name":"Ayaan Ali Khan"})