import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Imaad',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    // {
    //   // _id: '1',
    //   name: 'Nike Slim shirt',
    //   slug: 'nike-slim-shirt',
    //   category: 'Shirts',
    //   image: '/images/p1.jpg', // 679px × 829px
    //   price: 120,
    //   countInStock: 10,
    //   brand: 'Nike',
    //   rating: 4.5,
    //   numReviews: 10,
    //   description: 'high quality shirt',
    // },
    // {
    //   // _id: '2',
    //   name: 'Adidas Fit Shirt',
    //   slug: 'adidas-fit-shirt',
    //   category: 'Shirts',
    //   image: '/images/p2.jpg',
    //   price: 250,
    //   countInStock: 0,
    //   brand: 'Adidas',
    //   rating: 4.0,
    //   numReviews: 10,
    //   description: 'high quality product',
    // },
    // {
    //   // _id: '3',
    //   name: 'Nike Slim Pant',
    //   slug: 'nike-slim-pant',
    //   category: 'Pants',
    //   image: '/images/p3.jpg',
    //   price: 25,
    //   countInStock: 15,
    //   brand: 'Nike',
    //   rating: 4.5,
    //   numReviews: 14,
    //   description: 'high quality product',
    // },
    // {
    //   // _id: '4',
    //   name: 'Adidas Fit Pant',
    //   slug: 'adidas-fit-pant',
    //   category: 'Pants',
    //   image: '/images/p4.jpg',
    //   price: 65,
    //   countInStock: 5,
    //   brand: 'Puma',
    //   rating: 4.5,
    //   numReviews: 10,
    //   description: 'high quality product',
    // },
    {
      // _id: '4',
      name: 'Nike Football',
      slug: 'nike-football',
      category: 'Balls',
      image: '/images/nike-football.jpg',
      price: 55,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 37,
      description: 'high quality Nike Football',
    },
    {
      // _id: '4',
      name: 'Adidas Football',
      slug: 'adidas-football',
      category: 'Balls',
      image: '/images/adidas-football.jpg',
      price: 50,
      countInStock: 100,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 45,
      description: 'high quality Adidas Football',
    },
    {
      // _id: '4',
      name: 'Real Madrid Jersey',
      slug: 'rma-jersey',
      category: 'Shirts',
      image: '/images/rma-jersey.jpg',
      price: 99,
      countInStock: 100,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 30,
      description: 'high quality Real Madrid jersey',
    },
    {
      // _id: '4',
      name: 'FC Barcelona Jersey',
      slug: 'fcb-jersey',
      category: 'Shirts',
      image: '/images/fcb-jersey.jpg',
      price: 89,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 35,
      description: 'high quality FCB jersey',
    },
    {
      // _id: '4',
      name: 'Nike Pure Platinum Shoes',
      slug: 'shoe1',
      category: 'Shoes',
      image: '/images/shoe1.jpg',
      price: 200,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 75,
      description: 'high quality Nike Shoes',
    },
    {
      // _id: '4',
      name: 'Liverpool Jersey',
      slug: 'liv-jersey',
      category: 'Shirts',
      image: '/images/liv-jersey.jpg',
      price: 79,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 50,
      description: 'high quality Liverpool jersey',
    },
    {
      // _id: '4',
      name: 'Nike Red/White Shoes',
      slug: 'shoe2',
      category: 'Shoes',
      image: '/images/shoe2.jpg',
      price: 111,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 70,
      description: 'high quality Nike Shoes',
    },
    {
      // _id: '4',
      name: 'Nike Pink/Purple Shoes',
      slug: 'shoe3',
      category: 'Shoes',
      image: '/images/shoe3.jpg',
      price: 130,
      countInStock: 100,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 37,
      description: 'high quality Nike Shoes',
    },
    {
      // _id: '4',
      name: 'Nike Green Shoes',
      slug: 'shoe4',
      category: 'Shoes',
      image: '/images/shoe4.jpg',
      price: 150,
      countInStock: 100,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 37,
      description: 'high quality Nike Shoes',
    },
  ],
};
export default data;
