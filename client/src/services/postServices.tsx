import axios from 'axios'

export const generateImageFromPrompt = async (prompt) => {
  try {
    const result = await axios({
      url: '/dalle',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ prompt: prompt }),
    })
    return result.data
  } catch (err) {
    console.log('Error on generating image. ', err)
  }
}

export const createAPost = async (form) => {
  try {
    const result = await axios({
      url: '/post',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ form: form }),
    })
    return result.data
  } catch (err) {
    console.log('Error on creating post. ', err)
  }
}

export const getAllPosts = async () => {
  try {
    const result = await axios({
      url: '/post',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return result.data
  } catch (err) {
    console.log('Error on getting all posts.')
  }
}
