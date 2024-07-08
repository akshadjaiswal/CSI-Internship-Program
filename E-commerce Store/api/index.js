import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();

const corsOptions ={
  origin:'https://urban-store-in-apk.vercel.app', 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';
import cartRoutes from './routes/cart.js';
import paymentRoutes from './routes/stripe.js';
import mongoose from 'mongoose';
dotenv.config();
app.listen(process.env.PORT || 5001, () => {
  console.log("backend server is running on",process.env.PORT);
});
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("mongodb connetced!"))
  .catch((err) => console.log("error while connecting mongodb",err));
app.get('/api/test',(req,res)=>{
  console.log("test successfull!");
  res.status(200).json("success");
})

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/payments',paymentRoutes);
