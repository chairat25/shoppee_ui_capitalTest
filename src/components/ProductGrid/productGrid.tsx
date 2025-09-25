// import * as React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Chip, Stack } from '@mui/material'
import { products } from '../../mockData/data'
export default function ProductGrid() {
    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>สินค้าแนะนำสำหรับคุณ</Typography>
                <Grid container spacing={2}>
                    {products.map((p) => (
                        <Grid key={p.id} >
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia image={p.image} sx={{ pt: '70%' }} />
                                <CardContent sx={{ flex: 1 }}>
                                    <Stack spacing={1}>
                                        <Typography variant="body2" sx={{ height: 38, overflow: 'hidden' }}>{p.title}</Typography>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography variant="h6" fontWeight={800}>฿{p.price}</Typography>
                                            {p.discountPercent && <Chip size="small" color="primary" label={`-${p.discountPercent}%`} />}
                                            {p.badge && <Chip size="small" variant="outlined" label={p.badge} />}
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}