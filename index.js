import express from "express";
import userRouter from './routes/users.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send("Hello My Name is API");
})

app.get('/api/name/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello,${name}`);
})
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})