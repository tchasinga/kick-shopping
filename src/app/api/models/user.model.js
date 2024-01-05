import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 8) {
              throw new Error('Password must be at least 8 characters long');
            }
          }
    },
}, { timestamps: true });

UserSchema.post('validate' , function (user) {
    console.log('New user validated', user);
    // user.password = user.password.toUpperCase();
    user.password = bcrypt.hashSync(user.password, 10);

})

const User = models.User || model('User', UserSchema); 

export default User;
// this page is for code Models 
