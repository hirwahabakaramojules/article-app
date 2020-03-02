
import express from 'express';
const app = express();
import home from "./routes/home";
import { urlencoded } from 'body-parser';

app.use(urlencoded({extended: false}));
app.use(express.json());

const port = 5000;

app.get('/',home);


app.listen(5000, ()=> console.log(`running on port ${port}...!!!`));
 
export default app;
