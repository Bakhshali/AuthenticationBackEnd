const { db } = require("./conf/db");
const express = require("express");
const { userRoutes } = require("./routes/userRoutes");
const app = express()

app.use(express.json())


db.connect()

app.use('/api/user', userRoutes)

app.listen(5000, () => {
    console.log('Server is running...');
})
