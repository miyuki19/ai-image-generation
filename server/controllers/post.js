import { v2 as cloudinary } from 'cloudinary'
import Post from '../db/models/post.js'
import dotenv from 'dotenv'

dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})

    res.status(200).json({ success: true, data: posts })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, data: err })
  }
}

const createAPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body.form
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })

    res.status(201).json({ success: true, data: newPost })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, data: err })
  }
}

export { getAllPosts, createAPost }
