import images from './images';

const classics = [
  {
    title: 'Hot Latté',
    price: '$5',
    tags: 'Espresso | Steamed milk',
  },
  {
    title: 'Hot Cappuccino',
    price: '$6',
    tags: 'Espresso | thicker milk foam',
  },
  {
    title: 'Hot Mocha',
    price: '$7',
    tags: 'Espresso | white or dark chocolate sauce | steamed milk',
  },
  {
    title: 'Hot Breve Latté',
    price: '$6.75',
    tags: 'Espresso | steamed half and half',
  },
  {
    title: 'Hot Americano',
    price: '$4',
    tags: 'Espresso | hot water',
  },
];

const coldbrews = [
  {
    title: 'Caramel Brulée Latte',
    price: '$7.50',
    tags: 'Caramel Brulée Topping | Signature Espresso Roast',
  },
  {
    title: "Caramel Macchiato",
    price: '$6.75',
    tags: 'Caramel Drizzle | Signature Espresso Roast',
  },
  {
    title: 'Peppermint Mocha',
    price: '$5.50',
    tags: 'Chocolate Curls Topping | Signature Espresso Roast',
  },
  {
    title: 'Caffè Americano',
    price: '$3.50',
    tags: 'Chai | Signature Espresso Roast',
  },
  {
    title: 'Cream Cold Brew',
    price: '$5.25',
    tags: 'Barista Cocoa Powder | Irish Cream Cold Foam',
  },
];

const reviews = [
  {
    imgUrl: images.face1,
    name: "Emily C",
    date: "12-03-2022",
    title: "Amazing Coffee",
    description: "Always an amazing visit. Everyone should try them..."
  },
  {
    imgUrl: images.face2,
    name: "Joe D",
    date: "11-22-2022",
    title: "Great Place",
    description: "We enjoyed the beautiful garden setting, the wonderful coffee and..."
  },
  {
    imgUrl: images.face3,
    name: "Katelyn B",
    date: "10-31-2022",
    title: "Awesome Food",
    description: "Couldn't have been more satisified with my stop to Rize and..."
  },
  {
    imgUrl: images.face4,
    name: "Bryan R",
    date: "09-26-2022",
    title: "Super Relaxing",
    description: "Staff was amazing, everyone was super nice and it gave all around good vibes..."
  }
];
const data = {
  classics,
  coldbrews,
  reviews
}
export default data;