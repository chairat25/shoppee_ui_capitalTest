import * as React from 'react'
import { Box, Paper, Typography } from '@mui/material'

interface CategoryItemProps {
    title: string;
    image: string;
}
export default function CategoryItem(props: CategoryItemProps) {
    return (
        <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, borderRadius: 3 }}>
            <Box component="img" src={props.image} alt={props.title} sx={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }} />
            <Typography variant="body2" textAlign="center" sx={{ lineHeight: 1.2 }}>{props.title}</Typography>
        </Paper>
    )
}