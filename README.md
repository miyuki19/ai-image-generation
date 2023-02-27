<p align="left"> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

# AI Image Generation Web Application
This is an AI Image Generation web application built using React, Node.js, Express, MongoDB, Tailwind CSS, OpenAI DALL-E model, and Cloudinary. The application allows users to generate unique images based on the text descriptions they provide.

## Demo URL

```
https://ai-image-generation-client.onrender.com/
```

![Capture.png](https://github.com/miyuki19/ai-image-generation/blob/main/Capture.PNG)

![GENERATE IMG](https://github.com/miyuki19/ai-image-generation/blob/main/Generate_Image.PNG)

## Features

- User can upload and save images on the server using Cloudinary
- User can input text descriptions of images they want to generate
- AI image generation using OpenAI DALL-E model
- User can download the generated images

## Installation

To run the application, follow these steps:

1. Clone the repository and navigate to the project directory

```
git clone https://github.com/miyuki19/ai-image-generation
```

2. Install the dependencies on both `server` and `client` folder by

```
yarn install
```

3. Create a `.env` file in `server` with the following envinroment variables:

```
MONGODB_URL=
OPENAI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
PORT=
```

4. Create a `.env` file in `client` with the following envinroment variables:

```
VITE_APP_API_URL=
```

5. Start the server and client

```
yarn start
```

## Technologies Used

- React - a JavaScript library for building user interfaces
- Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine
- Express - a minimal and flexible Node.js web application framework
- MongoDB - a document-based, NoSQL database
- Tailwind CSS - a utility-first CSS framework for rapidly building custom designs
- OpenAI DALL-E model - a deep learning image generation model
- Cloudinary - a cloud-based image and video management service

## License

This project is licensed under the MIT License - see the LICENSE file for details.
