import mongoose from 'mongoose';
import User from '../models/user.model.js';

export default async function GET(req) {
  const { id } = req.query;

  try {
    const myLinks =
      'mongodb+srv://tchasingajacques:jack202050081@kick-shopping.qgo3vzq.mongodb.net/kick-shopping?retryWrites=true&w=majority';
    mongoose.connect(process.env.MONGO_URL || myLinks);

    // Assuming `id` is the ObjectId of the user you want to retrieve
    const user = await User.findById(id);

    if (!user) {
      return { status: 404, body: { error: 'User not found' } };
    }

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      emailVerified: user.emailVerified,
      admins: user.admins,
    };

    return { status: 200, body: userData };
  } catch (error) {
    console.error('Error retrieving user:', error);
    return { status: 500, body: { error: 'Internal Server Error' } };
  } finally {
    mongoose.connection.close();
  }
}
