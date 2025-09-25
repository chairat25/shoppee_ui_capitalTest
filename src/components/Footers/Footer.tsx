// import * as React from 'react'
import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'

export default function Footer() {
    const support = [{
        name: 'ศูนย์ช่วยเหลือ', links: ['ลิงก์ตัวอย่าง 1', 'ลิงก์ตัวอย่าง 2', 'ลิงก์ตัวอย่าง 3']
    }, {
        name: 'ติดตามเรา', links: ['ลิงก์ตัวอย่าง 1', 'ลิงก์ตัวอย่าง 2', 'ลิงก์ตัวอย่าง 3']
    }, {
        name: 'ดาวน์โหลดแอป', links: ['ลิงก์ตัวอย่าง 1', 'ลิงก์ตัวอย่าง 2', 'ลิงก์ตัวอย่าง 3']
    }]
    return (
        <Box sx={{ mt: 6, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
            <Container sx={{ py: 4 }}>
                <Grid container spacing={2}>
                    {support.map((h, idx) => (
                        <Grid key={idx}>
                            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>{h.name}</Typography>
                            <Stack spacing={0.5}>
                                {h.links.map((l, idx) => <Link href="#" key={idx} underline="hover" color="text.secondary">{l}</Link>)}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} Shopu — โคลน UI เพื่อการศึกษา</Typography>
            </Container>
        </Box>
    )
}