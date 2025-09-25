import * as React from 'react'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'

export default function ProBanner() {
    return (
        <>
            <Paper sx={{
                bgcolor: '#f44336',
                color: 'common.white',
                p: 3,
                height: '100%',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>โค้ดแบรนด์ลดเพิ่ม 30%</Typography>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" fontWeight={700}>✔ ของแท้ 100% การันตีคืนเงิน 2 เท่า</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" fontWeight={700}>🚚 ส่งฟรี* ทั่วไทย เมื่อช้อปครบ 200.-</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" fontWeight={700}>↩ คืนเงิน/สินค้า ฟรี ภายใน 15 วัน</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}