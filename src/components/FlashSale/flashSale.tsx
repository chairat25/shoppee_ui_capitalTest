import { Box, Container, Typography, Card, CardMedia, CardContent, Chip, Stack, styled } from '@mui/material'
import { flashSale } from '../../mockData/data'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <Box
            onClick={onClick}
            sx={{
                ":hover": { cursor: "pointer" },
                position: "absolute",
                  right: 1,
                top: "30%",
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

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <Box

            onClick={onClick}
            sx={{
                position: "absolute",
                left: 1,
                top: "30%",
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

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "10px",
    responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 960, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};


// Custom Arrow ซ้าย


export default function FlashSale() {
    return (
        <Container sx={{ mt: 4 }}>
            {/* หัวข้อ */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2 }}
            >
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    FLASH SALE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ดีลเด็ด อัปเดตทุกชั่วโมง
                </Typography>
            </Stack>


            <Slider {...settings}>
                {flashSale.map((item) => (
                    <Box key={item.id} sx={{ px:2}} >
                        <Card sx={{ minWidth: 200,mx:1 }} >
                            <CardMedia
                                image={item.image}
                                sx={{ height: 160 }}
                            />
                            <CardContent>
                                <Typography variant="body2" noWrap>
                                    {item.title}
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                        ฿{item.price}
                                    </Typography>
                                    <Chip
                                        size="small"
                                        color="primary"
                                        label={`- ${item.discountPercent}%`}
                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
}
