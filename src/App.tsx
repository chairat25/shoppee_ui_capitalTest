
import './App.css'
import Header from './components/Header/header'
import TopBanner from './components/Banners/TopBanner'
import CategoryCarourel from './components/Carousel/categoryCarourel'
import FlashSale from './components/FlashSale/flashSale'
import MallSection from './components/MallSection/mallSection'
import ProductGrid from './components/ProductGrid/productGrid'
import Footer from './components/Footers/Footer'
import { Box } from '@mui/material'


export default function App() {
  return (
    <>
      <Box>
        <Header />
        <TopBanner />
        <CategoryCarourel />
        <FlashSale />
        <MallSection />
        <ProductGrid />
        <Footer />
      </Box>
    </>
  )
}
