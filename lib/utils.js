import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CompanyName = "Gadg-it"

// Gadgets product examples — English + Arabic names
export const gadgets = [
  {
    id: "g001",
    name: "Mini Bluetooth Speaker",
    category: "Audio",
    price: 19.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/5c/46/8e/5c468e2cfd4684fd2b6ec75f837799ca.jpg",
      "https://i.pinimg.com/1200x/85/5e/49/855e494f08b5de9b1b7d56d39dd6f232.jpg"
    ],
    description: "A compact wireless speaker with powerful sound, perfect for travel, parties, and everyday music.",
    tags: ["portable", "wireless", "gift"]
  },
  {
    id: "g002",
    name: "Smart LED Lamp",
    category: "Home",
    price: 29.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/bb/f8/8c/bbf88c47efbef60f53daed089c5c2358.jpg",
      "https://i.pinimg.com/1200x/cd/8c/2f/cd8c2f5c0f240c1b00815380cf9fe8dd.jpg",
      "https://i.pinimg.com/1200x/54/91/37/5491374da6ceccc29d81a6b5ac353d77.jpg"
    ],
    description: "A modern smart lamp with customizable RGB lighting, ideal for home ambiance or workspace lighting.",
    tags: ["smart", "rgb", "home"]
  },
  {
    id: "g003",
    name: "Wireless Earbuds",
    category: "Audio",
    price: 39.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/0d/ee/9f/0dee9f8abf019825da473f9eb6ffabf9.jpg",
      "https://i.pinimg.com/736x/a9/44/fc/a944fcbe7e5e5704c8ead3506755746f.jpg"
    ],
    description: "Comfortable wireless earbuds with deep bass, long battery life, and seamless Bluetooth pairing.",
    tags: ["wireless", "bluetooth", "fitness"]
  },
  {
    id: "g004",
    name: "Portable Power Bank",
    category: "Power",
    price: 24.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/1200x/91/b9/7c/91b97c24af4a30bf61826e2d3d73153d.jpg",
      "https://i.pinimg.com/736x/10/34/b6/1034b6b805f28b3992eaa1300f958d35.jpg"
    ],
    description: "A reliable portable charger that keeps your devices powered during travel, work, and emergencies.",
    tags: ["portable", "charging", "travel"]
  },
  {
    id: "g005",
    name: "Magnetic Fast Charger",
    category: "Charging",
    price: 14.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg",
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg",
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg"
    ],
    description: "A magnetic USB fast charger that snaps in place instantly for quick and convenient charging.",
    tags: ["magnetic", "fast-charge", "accessory"]
  },
  {
    id: "g006",
    name: "Smart Watch",
    category: "Wearable",
    price: 79.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg",
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg",
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg"
    ],
    description: "A feature-rich smartwatch that tracks health, notifications, fitness goals, and daily activities.",
    tags: ["health", "notifications", "wearable"]
  },
  {
    id: "g007",
    name: "USB Rechargeable Hand Fan",
    category: "Comfort",
    price: 12.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg",
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg",
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg"
    ],
    description: "A portable USB fan that keeps you cool anywhere — ideal for summer, travel, and outdoor use.",
    tags: ["usb", "portable", "summer"]
  },
  {
    id: "g008",
    name: "Mini Projector",
    category: "Video",
    price: 129.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg",
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg",
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg"
    ],
    description: "A compact projector for movies, gaming, and presentations with bright display and easy setup.",
    tags: ["projector", "home-theater", "portable"]
  },
  {
    id: "g009",
    name: "Wireless Keyboard",
    category: "Computer",
    price: 29.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg",
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg",
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg"
    ],
    description: "A stylish wireless keyboard with silent keys and a compact design for work and study.",
    tags: ["wireless", "compact", "office"]
  },
  {
    id: "g010",
    name: "Laser Distance Measurer",
    category: "Tools",
    price: 49.99,
    currency: "USD",
    image: [
      "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg",
      "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg",
      "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg"
    ],
    description: "A precise laser measurer for builders, designers, and DIY tasks, offering quick accurate results.",
    tags: ["tools", "measuring", "construction"]
  }
];

;
