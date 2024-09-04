import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://krishna922003:krishna9203@cluster0.lsscp.mongodb.net/food-del').then(()=>console.log("DB Connected")))
}
