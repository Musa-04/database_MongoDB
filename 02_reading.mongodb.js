use("ecommerce");
// db.products.find({"name":"Wireless Mouse"})
// db.products.find({category:"Electronics"})
// db.products.find({price:{$gt:50}})
// db.products.find({price:{$lt:20}})
// db.products.find({price:{$gte:100,$lte:500000}})
// db.products.find({inStock:true})

// db.products.find({ $or:[{category:"Electronics"},{price:{$lt:30}}]})
// db.products.find().sort({ price: -1 }).skip(1).limit(1)
db.products.find().pretty()