/* const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    // const response = await openai.createImage({
    //   prompt: "Polar bear on ice cake",
    //   n: 1,
    //   size: "512x512",
    // }); 

    const response = await openai.createImage({
        model: "dall-e-3",
        prompt: "a white siamese cat",
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url;
    console.log(response);

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = { generateImage }; */

// import { OpenAI } from "openai";
const { OpenAI } = require("openai");

// import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openai.images.generate({
      model: "dall-e-2",
      // prompt:"Polar bear on ice skate",
      prompt:prompt,
      // size:"1024x1024",
      size: imageSize,
      quality: "standard",
      n: 1,
    });

    console.log(response);
    // const imageUrl = response.data.data[0].url;
    const imageUrl = response.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};
module.exports = { generateImage };
// async function main() {
//   // const image = await openai.images.generate({ prompt: "A cute baby sea otter" });
//   const image = await openai.images.generate({
//     model: "dall-e-3",
//     prompt: "A cute baby sea otter",
//   });

//   console.log(image.data);
// }
// main();
