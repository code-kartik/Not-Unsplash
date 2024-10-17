import { Box, Card, CardMedia } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const ImageCarousel = (props) => {
  const images = useSelector((state) => state.images);

  const getDataUrl = async (url) => {
    const response = await axios.get(url, { responseType: "blob" });
    const imageDataUrl = URL.createObjectURL(response.data);

    return imageDataUrl;
  };

  const handleDownload = async (imageUrl) => {
    const a = document.createElement("a");
    a.href = await getDataUrl(imageUrl);
    a.download = "image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", transform: props.translate }}
    >
      {images.map((imgObj, index) => {
        const { raw, compressed } = imgObj;
        return (
          <Card
            key={index}
            sx={{
              width: 400,
              height: 225,
              margin: 2,
              backgroundColor: "#fff",
              ":hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              onClick={() => {
                handleDownload(raw);
              }}
              component="img"
              image={compressed}
              height="225"
              sx={{
                objectFit: "cover",
              }}
            />
          </Card>
        );
      })}
    </Box>
  );
};

export default ImageCarousel;
