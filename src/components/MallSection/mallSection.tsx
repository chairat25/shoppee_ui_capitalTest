
// import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography, Button, Divider } from '@mui/material'
import { mallBrands } from '../../mockData/data'
import Slider from "react-slick"
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 960, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
  ],
};

export default function TopBanner() {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ p: 2 }}>
          {/* Header */}
          <Grid display="flex" justifyContent="space-between" alignItems="center">
            <Grid sx={{ mb: 2 }} display="flex" gap={2} alignItems="center">
              <Typography variant="h6" fontWeight={800} color="primary.main">
                SHOPEE MALL
              </Typography>
              <Typography variant="h6" fontWeight={200}>|</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/e9598d49f2f2ab0810e2.png"
                  alt="icon"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="subtitle1" fontWeight={200}>
                  ดีลพิเศษแบรนด์ชั้นนำ
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/7077c70ab0445eaaf96a.png"
                  alt="icon"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="subtitle1" fontWeight={200}>
                  ของแท้ 100%
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepagefe/2b0c3538f050999fef02.png"
                  alt="icon"
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="subtitle1" fontWeight={200}>
                  คืนเงิน/สินค้าใน 15 วัน
                </Typography>
              </Stack>
            </Grid>

            <Grid sx={{ mb: 2 }}>
              <Typography variant="caption" color="primary">ดูทั้งหมด</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 3 }} />

          {/* Content */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {/* Left Banner */}
            <Box
              sx={{
                flex: 1,
                bgcolor: "primary.main",
                color: "common.white",
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  โค้ดแบรนด์ลดเพิ่ม 30%
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
                  ช้อปแบรนด์ดังของแท้ การันตีคืนเงิน 2 เท่า
                </Typography>
                <Button variant="contained" color="secondary">
                  ช้อปเลย
                </Button>
              </Box>
            </Box>

            <Box sx={{ flex: 2, overflow: "hidden" }}>
              <Slider {...settings}>
                {mallBrands.map((b) => (
                
                  <Box key={b.id} sx={{ px: 2 }}>
                    <img 
                    src={b.imageProduct2} 
                    alt={b.title} 
                    style={{width:100, height:100,left:20, objectFit:'contain', marginBottom:8 ,marginLeft:10}}
                    />
                   
                      <Typography variant="body2" fontWeight={700}>
                        {b.title}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        ลดสูงสุด {b.off}%
                      </Typography>
           
                  </Box>
                ))}
              </Slider>
            </Box>

          </Stack>
        </Paper>
      </Container>

    </>
  )
}