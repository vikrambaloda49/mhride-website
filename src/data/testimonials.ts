export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
  location: string;
  rideCount: number;
  memberSince: string;
  verified: boolean;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Assistant Manager",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "Absolutely incredible service! The drivers are professional, cars are spotless, and the app is so intuitive. I've been using it daily for my commute and it's never let me down. Best ride service in the city!",
    location: "Medicine Hat, AB",
    rideCount: 18,
    memberSince: "2024",
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Manager",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "Game changer for business travel. The premium vehicles are perfect for client meetings, and the reliability is unmatched. I can always count on arriving on time and in style.",
    location: "Medicine Hat, AB",
    rideCount: 89,
    memberSince: "2024",
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "The convenience is unreal. From booking to payment, everything is seamless. The drivers know the best routes and the cars are always clean. It's become an essential part of my daily routine.",
    location: "Medicine Hat, AB",
    rideCount: 12,
    memberSince: "2025",
    verified: true,
    featured: false
  },
  {
    id: 4,
    name: "David Kim",
    role: "Software Engineer",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "As a tech person, I appreciate the attention to detail in the app. Real-time tracking, transparent pricing, and the ability to schedule rides in advance - it's perfectly executed.",
    location: "Medicine Hat, AB",
    rideCount: 26,
    memberSince: "2025",
    verified: true,
    featured: true
  },
  {
    id: 5,
    name: "Jessica Wang",
    role: "N/A",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "Outstanding customer service and attention to detail. Whether it's early morning airport runs or late night rides home, they're always professional and punctual. Highly recommended!",
    location: "Medicine Hat, AB",
    rideCount: 23,
    memberSince: "2024",
    verified: true,
    featured: false
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "N/A",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "The premium experience at an affordable price. Clean vehicles, professional drivers, and a smooth booking process. It's clear they care about customer satisfaction in every detail.",
    location: "Medicine Hat, AB",
    rideCount: 18,
    memberSince: "2024",
    verified: true,
    featured: true
  },
  {
    id: 7,
    name: "Rachel Green",
    role: "Operations Manager",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "Reliable, safe, and comfortable. As someone who travels frequently for work, I need a service I can trust. This platform delivers consistently, and the drivers are always courteous and professional.",
    location: "Brooks, AB",
    rideCount: 267,
    memberSince: "2021",
    verified: true,
    featured: false
  },
  {
    id: 8,
    name: "Michael Brown",
    role: "Investment Banker",
    company: "Local Customer",
    avatar: "",
    rating: 5,
    testimonial: "Exceptional service quality that exceeds expectations. The attention to cleanliness, punctuality, and customer care sets them apart. Perfect for both personal and business use.",
    location: "Redcliff, AB",
    rideCount: 134,
    memberSince: "2023",
    verified: true,
    featured: true
  }
];

export const stats = {
  totalRides: "20K+",
  happyCustomers: "1K+",
  averageRating: 4.9,
  citiesCovered: 5
};