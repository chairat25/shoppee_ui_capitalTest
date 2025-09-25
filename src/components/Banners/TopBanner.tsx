import { Box, Container, Grid, Stack, } from '@mui/material';
import BannerCard from './BannerCard';
export default function TopBanner() {
    const banners = [
        { text: "https://down-th.img.susercontent.com/file/th-11134258-81ztl-mexu7nq1akn64f@resize_w797_nl.webp", bg: "" },
        { text: "https://down-th.img.susercontent.com/file/th-11134258-81ztj-mexu0jx9mhomd0@resize_w797_nl.webp", bg: "" },

    ];
    const sideBanners = [
        "https://down-th.img.susercontent.com/file/th-11134258-81ztm-mexugojrbq4h88@resize_w398_nl.webp", // รูปบน
        "https://down-th.img.susercontent.com/file/th-11134258-81ztk-mf108mvqlp1m4c@resize_w398_nl.webp", // รูปล่าง
    ];
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={5}>
                    <Stack >
                        <BannerCard
                            text="ส่งฟรี* โค้ดลดเพิ่ม สูงสุด 50%"
                            bg="#ff6a3d"
                            items={banners}
                        />
                        </Stack>
                        <Stack spacing={1}>
                            {sideBanners.map((img, i) => (
                                <Box
                                    key={i}
                                    component="img"
                                    src={img}
                                    alt={`side-banner-${i}`}
                                    sx={{ width: "120%" }}
                                />
                            ))}
                        </Stack>
            
                </Grid>
            </Container>



        </>
    )
}