// db.js

// usersList array
usersList = [
  {
    id: "1",
    name: "test",
    email: "test@gmail.com",
    password: "123456",
    role: "user", // user,seller
  },
];

// userData object after auth
userData = {
  id: "1",
  name: "kareem",
  email: "kareem@gmail.com",
  role: "user",
};
localStorage.setItem("userData", JSON.stringify(userData));
// productsList array
productsList = [
  {
    id: "1",
    images: ["src2.png", "src2.png", "src3.png", "src4.png"],
    name: "product 1",
    description: "test description test description test description",
    price: 200, // 200 EGP
    discount: 10, // 10%
    quantity: 50,
    category: {
      id: "6439d2d167d9aa4ca970649f",
      name: "Electronics",
    },
    seller: {
      id: "1",
      name: "km store",
    },
    rating: 4.8,
  },
  {
    id: "2",
    images: ["src1.png", "src2.png"],
    name: "product 2",
    description: "description for product 2",
    price: 150,
    discount: 5,
    quantity: 30,
    category: {
      id: "6439d2d167d9aa4ca9706500",
      name: "Books",
    },
    seller: {
      id: "2",
      name: "bookstore",
    },
    rating: 4.3,
  },
  {
    id: "3",
    images: ["src3.png"],
    name: "product 3",
    description: "description for product 3",
    price: 500,
    discount: 20,
    quantity: 10,
    category: {
      id: "6439d2d167d9aa4ca9706501",
      name: "Clothing",
    },
    seller: {
      id: "3",
      name: "fashionista",
    },
    rating: 4.6,
  },
  {
    id: "4",
    images: ["src4.png", "src5.png"],
    name: "product 4",
    description: "description for product 4",
    price: 750,
    discount: 15,
    quantity: 20,
    category: {
      id: "6439d2d167d9aa4ca9706502",
      name: "Home Appliances",
    },
    seller: {
      id: "4",
      name: "home store",
    },
    rating: 4.1,
  },
  {
    id: "5",
    images: ["src5.png", "src1.png"],
    name: "product 5",
    description: "description for product 5",
    price: 300,
    discount: 0,
    quantity: 25,
    category: {
      id: "6439d2d167d9aa4ca9706503",
      name: "Toys",
    },
    seller: {
      id: "5",
      name: "toy store",
    },
    rating: 3.9,
  },
  {
    id: "6",
    images: ["src2.png", "src2.png"],
    name: "product 6",
    description: "description for product 6",
    price: 900,
    discount: 25,
    quantity: 5,
    category: {
      id: "6439d2d167d9aa4ca9706504",
      name: "Sports Equipment",
    },
    seller: {
      id: "6",
      name: "sports store",
    },
    rating: 4.9,
  },
  {
    id: "7",
    images: ["src3.png"],
    name: "product 7",
    description: "description for product 7",
    price: 1000,
    discount: 30,
    quantity: 15,
    category: {
      id: "6439d2d167d9aa4ca9706505",
      name: "Furniture",
    },
    seller: {
      id: "7",
      name: "furniture store",
    },
    rating: 4.7,
  },
  {
    id: "8",
    images: ["src2.png", "src5.png"],
    name: "product 8",
    description: "description for product 8",
    price: 50,
    discount: 5,
    quantity: 100,
    category: {
      id: "6439d2d167d9aa4ca9706506",
      name: "Stationery",
    },
    seller: {
      id: "8",
      name: "stationery store",
    },
    rating: 4.2,
  },
  {
    id: "9",
    images: ["src1.png"],
    name: "product 9",
    description: "description for product 9",
    price: 600,
    discount: 20,
    quantity: 12,
    category: {
      id: "6439d2d167d9aa4ca9706507",
      name: "Automotive",
    },
    seller: {
      id: "9",
      name: "auto store",
    },
    rating: 4.4,
  },

];
localStorage.setItem("productsList", JSON.stringify(productsList));

// cartList array
cartList = [
  {
    id: "1", // id of the cart item
    cartOwner: "1", // id of user
    totalCartPrice: 30742, // 30742 EGP
    products: [
      {
        count: 2,
        product: {
          id: "1",
          images: ["src2.png", "src2.png", "src3.png", "src4.png"],
          name: "product 1",
          description: "test description test description test description",
          price: 200, // 200 EGP
          discount: 10, // 10%
          quantity: 50,
          category: {
            id: "6439d2d167d9aa4ca970649f",
            name: "Electronics",
          },
          seller: {
            id: "1",
            name: "km store",
          },
          rating: 4.8,
        },
        totalPrice: 400, // product price (200) * count (2) = 400
      },
    ],
  },
];
// localStorage.setItem("cartList", JSON.stringify(cartList));

// ordersList array
ordersList = [
  {
    id: "1", // id of the order item
    orderOwner: "1", // id of user
    totalOrderPrice: 120529,
    taxPrice: 0,
    shippingPrice: 0,
    paymentMethodType: "cash",
    isPaid: false,
    isDelivered: false,
    shippingAddress: {
      details: "details",
      city: "Cairo",
    },
    products: [
      {
        count: 2,
        product: {
          id: "1",
          images: ["src2.png", "src2.png", "src3.png", "src4.png"],
          name: "product 1",
          description: "test description test description test description",
          price: 200, // 200 EGP
          discount: 10, // 10%
          quantity: 50,
          category: {
            id: "6439d2d167d9aa4ca970649f",
            name: "Electronics",
          },
          seller: {
            id: "1",
            name: "km store",
          },
          rating: 4.8,
        },
        totalPrice: 400, // product price (200) * count (2) = 400
      },
      
    ],
  },
];
