const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    return res.json({msg:"Hellow from meddleware 1"});
    next();
});
// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});
app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    });
});
app.path('/api/users/:id', (req, res) => {
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