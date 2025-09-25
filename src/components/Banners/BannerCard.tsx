
// import * as React from "react";
import { Paper, Typography, Box } from "@mui/material";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface BannerCardItem {
  text: string;
  bg: string;
}

interface BannerCardProps {
  items: BannerCardItem[];
    text: string;
  bg: string;
}


const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        bgcolor: "rgba(0,0,0,0.4)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
      }}
    >
      ▶
    </Box>
  );
};

// Custom Arrow ซ้าย
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        bgcolor: "rgba(0,0,0,0.4)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
      }}
    >
      ◀
    </Box>
  );
};

export default function BannerCard({ items }: BannerCardProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // 3 วิ ต่อสไลด์
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box width={600} mx={"auto"} >
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box key={index} >
            <Paper
              elevation={0}
              sx={{
                bgcolor: item.bg,
                height: 250,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
                fontWeight: 700,
              }}
            >
               <img
                src={item.text}
                alt={`slide-${index}`}
                style={{
                   width: "100%",
                  height: "100%",
                  objectFit: "cover",

                }}
              />
              
            </Paper>
        
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
