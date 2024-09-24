import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (!fullname || !username || !password || !confirmpassword || !gender) {
      return res.status(400).json({ message: "all fields required" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ message: " confirm password should be same" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: " user already exists , username dusra daal bhai" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    // profile photo
    const maleprofilephoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleprofilephoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // gender === "Male" ? maleprofilephoto : femaleprofilephoto ,
  

    await User.create({
      fullname,
      username,
      password: hashedpassword,
      profilephoto: gender === "Male" ? maleprofilephoto : femaleprofilephoto ,
      gender,
    });
    return res.status(200).json({message: "// moj kar" , success:true});
  } catch (error) {
    console.log(error);
  }
};

//login//

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "fields required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: " user not registered", success: false });
    }

    const ispasswordmatch = await bcrypt.compare(
      req.body.password,
      user.password
    ); //// User.password is coming undefined  because i using "User.password" instead "user.password"

    if (!ispasswordmatch) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password ", success: false });
    }

    const tokendata = {
      userid: user._id,
    };
    const token =  jwt.sign(tokendata, process.env.Jwt_secret_key, {
      expiresIn: "1d",
    });
    // console.log(token)
    return res.cookie('token', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1d
        httpOnly: true,
        secure:false ,
        sameSite: "Lax",
      })
      .json({
        _id: user._id,
        username: user.username,
        fullname: user.fullname,
        profilephoto: user.profilephoto,
        
      });
  } catch (error) {
    console.log(error);
  }
};

// logout //

export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token"," " , { maxAge: 10 }).json({
      message: "Logged out success",
    });
  } catch (error) {
    console.log(error);
  }
};

// get other users// 

export const getotheruser = async (req, res) => {
  try {
    const loggedinUserid = req.id;
    const otheruser = await User.find({ _id: { $ne: loggedinUserid } }).select(
      "-password"
    );
    return res.status(200).json(otheruser);
  } catch (error) {
    console.log(error);
  }
};
 