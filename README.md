# MongoDB CRUD Operations

This repository contains basic examples of **CRUD operations** in MongoDB.
It is created for learning and practice purposes.

CRUD stands for:
- **C**reate
- **R**ead
- **U**pdate
- **D**elete

---

## 📁 Project Files

| File Name | Description |
|---------|------------|
| `01_setup.mongodb.js` | MongoDB connection and basic setup |
| `02_reading.mongodb.js` | Read / Find operations |
| `03_update.mongodb.js` | Update operations |
| `04_delete.mongodb.js` | Delete operations |
| `06_project.mongodb.js` | Small practice project using CRUD |

---

## 🟢 Create (Insert Data)

Used to add new documents into a collection.

### Example:
```js
db.users.insertOne({
  name: "Mustafeez",
  phone: "9876543210",
  message: "Learning MongoDB CRUD"
})
