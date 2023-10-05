const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 20,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    //비밀번호를 암호화시킨다
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (PlainPassword, cb) {
  //plainPassword: 1234567 암호화된 비밀번호 어쩌구저쩌구랑 맞는지 체크를 함
  bcrypt.compare(PlainPassword, this.password, function (err, inMatch) {
    if (err) return cb(err),
     cb(null, inMatch);
  });
};

userSchema.methods.generateToken = function(cd){
    // jsonwebtoken이용해서 토큰을 생성하기
}

const User = mongoose.model("User", userSchema);

module.exports = { User };
