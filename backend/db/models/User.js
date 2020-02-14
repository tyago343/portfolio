import mongoose from "mongoose";
import bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});
userSchema.virtual("_password").set(function(password) {
  this._password = password;
});

userSchema.pre("save", function(next) {
  const user = this;
  if (user._password === undefined) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) console.log(err);
    bcrypt.hash(user._password, salt, function(err, hash) {
      if (err) console.log(err);
      user.hashed_password = hash;
      next();
    });
  });
});

userSchema.methods = {
  comparePassword: function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  }
};
const UserModel = mongoose.model("user", userSchema);

export default UserModel;
