export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1
  },
  // {
  //   price: 1,
  //   name: "Soda",
  //   section: "Drinks",
  //   choices: ["Coke", "Sprite", "Root Beer"]
  // }
];

export const foods = foodItems.reduce((res, food) => {
  // if we don't have a "section" inside our empty object 
  if(!res[food.section]) {
    // add in food.section as the key
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});