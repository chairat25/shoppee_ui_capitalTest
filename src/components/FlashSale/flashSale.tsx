import { Box, Container, Typography, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material'
import { flashSale } from '../../mockData/data'
export default function FlashSale() {
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>FLASH SALE</Typography>
                    <Typography variant="body2" color="text.secondary">ดีลเด็ด อัปเดตทุกชั่วโมง</Typography>
                </Stack>
                <Box sx={{ display: 'grid', gap: 2, gridAutoFlow: 'column', gridAutoColumns: { xs: '70%', sm: '40%', md: '24%' }, overflowX: 'auto', pb: 1 }}>
                    {flashSale.map((item) => (
                        <Card key={item.id} sx={{ minWidth: 220 }}>
                            <CardMedia image={item.image} sx={{ height: 140 }} />
                            <CardContent>
                                <Typography variant="body2" noWrap>{item.title}</Typography>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>฿{item.price}</Typography>
                                    <Chip size="small" color="primary" label={`-${item.discountPercent}%`} />
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </>
    )
}