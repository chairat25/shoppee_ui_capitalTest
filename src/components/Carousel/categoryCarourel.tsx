// import React from 'react'
import { Container } from '@mui/material'
import Grid from "@mui/material/Grid";
import CategoryItem from './categoryItem'
import { categories } from '../../mockData/data'

export default function CategoryCarourel() {
    return (
        <Container sx={{ mt: 3 }}>
            <Grid display={"flex"} sx={{mb: 2,justifyContent: 'flex-start' }} fontWeight={100} >หมวดหมู่</Grid>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {categories.map((c) => (
                    <Grid key={c.id}>
                        <CategoryItem title={c.title} image={c.image ?? ""} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}