import type { Category, Product } from "../interface/Types";

export const categories: Category[] = [
  { id: 'mask', title: 'หน้ากากอนามัย', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=256' },
  { id: 'fashion', title: 'เสื้อผ้าแฟชั่น', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=256' },
  { id: 'bag', title: 'กระเป๋า', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=256' },
  { id: 'watch', title: 'นาฬิกา', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=256' },
  { id: 'camera', title: 'กล้อง', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=256&auto=format&fit=crop' },
  { id: 'home', title: 'ของใช้ในบ้าน', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=256' },
  { id: 'beauty', title: 'ความงาม', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=256' },
  { id: 'sport', title: 'กีฬา', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=256' },
  { id: 'toy', title: 'ของเล่น', image: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=256' },
  { id: 'auto', title: 'ยานยนต์', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=256' },
]

export const flashSale: Product[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `fs-${i + 1}`,
  title: `สินค้า Flash ${i + 1}`,
  price: 199 + i * 20,
  image: `https://images.unsplash.com/photo-15${
    80 + i
  }-?auto=format&fit=crop&w=400&q=60`.replace("photo-15", "photo-15"),
  discountPercent: 20 + (i % 4) * 10,
}));

export const mallBrands: {
  id: string;
  title: string;
  image: string;
  off: number;
  imageProduct: string;
}[] = [
  {
    id: "lotus",
    title: "Lotus™",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=512",
    imageProduct: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=512",
    off: 30,
  },
  {
    id: "loreal",
    title: "LORÉAL",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=512",
    imageProduct: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=512",
    off: 50,
  },
  {
    id: "ck",
    title: "CK",
    image: "https://images.unsplash.com/photo-1520975922324-8b456906c813?w=512",
    imageProduct: "https://images.unsplash.com/photo-1520975922324-8b456906c813?w=512",
    off: 60,
  },
  {
    id: "evb",
    title: "EVENBOY",
    image: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
    imageProduct: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
    off: 40,
  },
    {
    id: "evb",
    title: "EVENBOY",
    image: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
    imageProduct: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
    off: 40,
  },
  //    {
  //   id: "evb",
  //   title: "EVENBOY",
  //   image: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
  //   imageProduct: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
  //   off: 40,
  // },
  //      {
  //   id: "evb",
  //   title: "EVENBOY",
  //   image: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
  //   imageProduct: "https://images.unsplash.com/photo-1520975605361-5ccda55f3f5b?w=512",
  //   off: 40,
  // },
  
  
];

export const products: Product[] = Array.from({ length: 36 }).map((_, i) => ({
  id: `p-${i + 1}`,
  title: `สินค้าแนะนำ ${i + 1}`,
  price: 99 + i * 13,
  image: `https://images.unsplash.com/photo-16${
    10 + (i % 80)
  }?auto=format&fit=crop&w=600&q=60`.replace("photo-16", "photo-16"),
  badge: i % 3 === 0 ? "ยอดนิยม" : undefined,
  discountPercent: i % 5 === 0 ? 45 : undefined,
}))
