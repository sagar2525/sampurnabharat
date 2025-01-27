export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
  bestSeller?: boolean;
}

export interface TestimonialType {
  id: string;
  name: string;
  content: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}