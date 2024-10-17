import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addImageUrl, emptyStack } from "../redux/slicer/imageSlicer";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch();

  const apiKey = "ZwkVmvPKRmmvbgHmnUZPMZkLgU_ikcelfJ9bGR9mMtc";
  const baseUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl);

      let responseBody = response.data;

      const imageUrls = responseBody.map((item) => {
        return item.urls.raw;
      });

      dispatch(emptyStack());
      for (const url of imageUrls) {
        const compressedUrl = await compressImage(url);
        dispatch(addImageUrl({raw:url, compressed:compressedUrl}));
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const compressImage = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const originalBlob = await response.blob();
    const originalSize = originalBlob.size;


    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "anonymous"

    return new Promise((resolve) => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
 
        let width = img.width;
        let height = img.height;

        const maxWidth = width * 0.5;
        const maxHeigth = height * 0.5;
        
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeigth) {
            width *= maxHeigth / height;
            height = maxHeigth;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const compressedImageUrl = canvas.toDataURL("image/jpeg", 0.3);

        fetch(compressedImageUrl)
          .then((res) => res.blob())
          .then((compressedBlob) => {
            const compressedSize = compressedBlob.size;

            const compressPercentage = ((originalSize - compressedSize)/originalSize) * 100;
            console.log(compressPercentage.toFixed(2));

            resolve(compressedImageUrl);
          });
      };

      img.onerror = (error) => {
        console.error("image error: " + error);
        resolve(imageUrl);
      };
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(to bottom, black 10%, gray 50%, black 98%)",
      }}
    >
      <Navbar />
    </Box>
  );
};

export default Home;
