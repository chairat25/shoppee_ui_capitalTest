import { AppBar, Toolbar, Box, IconButton, Typography, InputBase, Container, Stack, Button, Grid, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import SearchIcon from '@mui/icons-material/Search'

export default function Header() {
    return (
    <>

        <AppBar color="primary" elevation={1} sx={{}}>
             {/* Top bar */}
     <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.1)",
          px: 2,
          py: 0.5,
          fontSize: 12,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" underline="hover">
              Seller Centre
            </Link>
            <Link href="#" color="inherit" underline="hover">
              เปิดร้านค้า
            </Link>
            <Link href="#" color="inherit" underline="hover">
              ดาวน์โหลด
            </Link>
            <Link href="#" color="inherit" underline="hover">
              ติดตามเรา
            </Link>
          </Stack>

          {/* Right */}
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" underline="hover">
              การแจ้งเตือน
            </Link>
            <Link href="#" color="inherit" underline="hover">
              ช่วยเหลือ
            </Link>
            <Link href="#" color="inherit" underline="hover">
              ไทย ▼
            </Link>
            <Link href="#" color="inherit" underline="hover">
              pondzchairat
            </Link>
          </Stack>
        </Container>
      </Box>
            <Container>
                <Toolbar disableGutters sx={{ gap: 2, py:1 ,}}>
                    
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ flexShrink: 0 }}>
                        <IconButton edge="start" sx={{ display: { xs: 'inline-flex', md: 'none' } }} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>Shopu</Typography>
                    </Stack>
                    <Box sx={{ flex: 1, position: 'relative' }}>
                        <InputBase
                            placeholder="ค้นหาสินค้า โปรโมชัน ร้านค้า…"
                            sx={{
                                width: '100%',
                                color: 'common.white',
                                bgcolor: 'rgba(255,255,255,0.15)',
                                px: 2,
                                py: 1,
                                borderRadius: 6,
                            }}
                            endAdornment={<SearchIcon sx={{ opacity: 0.8 }} />}
                        />
                    </Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 1 }}>
                        <Button variant="outlined" color="inherit" size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>เข้าสู่ระบบ</Button>
                        <IconButton color="inherit"><ShoppingCartOutlined /></IconButton>
                    </Stack>
                            
                </Toolbar>
            </Container>
        </AppBar>
        


        </>
    )
}