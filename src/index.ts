import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';
import userLogin from './routes/auth';
import userChat from './routes/chat';

const PORT = 4000;

// app init code below
const app = express();
app.use(bodyParser.json());



// routes define below code
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/user',userLogin);
app.use('/api/v1/chat',userChat);


app.listen(PORT,()=>console.log(`server start port listing ${PORT}`) );


