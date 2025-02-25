import axios from "axios";

// upload image to imgbb and return url
export const saveImage = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "taskify");

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dcoupychq/image/upload",
      formData
    );
    return data.secure_url;

  } catch (error) {
    console.error(
      "Image upload failed: ",
      error.response?.data || error.message
    );
    return null;
  }
};
