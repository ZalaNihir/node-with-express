const express = require("express");
// const fs = require("fs");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
// const { log } = require("console");
const app = express();
const PORT = 3000;

// Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log("Mongo error", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true });

// Define the model for user's schema
const User = mongoose.model('users', userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    next();
});
// Routes
app.get('/', (req, res) => {
    return res.json({ msg: "Node running successfully." });
});
app.get('/users', async (req, res) => {
    const allDbusers = await User.find({});
    const html = `
    <ul>
        ${allDbusers.map(user => `<li>${user.firstName}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users', async (req, res) => {
    const allDbusers = await User.find({});
    return res.json(allDbusers);
});
app.get('/api/users/:id', async (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});
app.post('/api/users', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All Fields are required" });
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    return res.status(201).json({
        msg: "Success",
    });
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "success", id: users.length })
    // });
});
app.patch('/api/users/:id', (req, res) => {
    console.log(req);
});
app.delete('/api/users/:id', (req, res) => {
    console.log(req);
});
// The Other way to doing this task is simple by grouping
// app.route("/api/users/:id").get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// }).put((req, res) => {
//     console.log(req);
// }).delete((req, res) => {
//     console.log(req);
// });

app.listen(PORT, () => console.log(`Server Started at PORT http://localhost:${PORT}`));