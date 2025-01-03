import express from 'express';
import userRoutes from "./routes/user.js"

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/users',userRoutes);
app.get("/",(req,res)=>{res.send("hello from home")});
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
