// src/data.js

export const allProducts = [
  {
    id: 'h1',
    faithId: 'hindu',
    name: 'Handcrafted Brass Puja Thali',
    price: 45,
    rating: 4.8,
    isNew: true,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1623835634563-1249b6574426?q=80&w=800',
    description: 'This heavy-weight brass Puja Thali is handcrafted by artisans in Moradabad. It features intricate floral etchings and comes with a complete set of accessories including a diya, bell, and kumkum holder. Perfect for daily rituals or festive occasions.'
  },
  {
    id: 'h2',
    faithId: 'hindu',
    name: 'Rudraksha Mala (108 Beads)',
    price: 25,
    rating: 4.5,
    isNew: false,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1616682708304-4091a13e2d67?q=80&w=800',
    description: 'Authentic 5-mukhi Rudraksha beads sourced from the foothills of the Himalayas. Traditionally knotted with silk thread, this mala is used for Japa (meditation) and is believed to bring peace, clarity, and protection to the wearer.'
  },
  {
    id: 'h3',
    faithId: 'hindu',
    name: 'Ganesha Stone Idol',
    price: 120,
    rating: 5.0,
    isNew: false,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1567591414240-e147e52d67a3?q=80&w=800',
    description: 'A hand-carved soapstone idol of Lord Ganesha, the remover of obstacles. The smooth finish and detailed craftsmanship make it a stunning centerpiece for your home altar or living room.'
  },
  {
    id: 'm1',
    faithId: 'muslim',
    name: 'Premium Velvet Prayer Rug',
    price: 60,
    rating: 4.9,
    isNew: true,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1583506925576-96af73551543?q=80&w=800',
    description: 'Experience comfort during Salah with this plush velvet prayer rug. Featuring a traditional Mihrab design inspired by Ottoman architecture, it is soft on the knees and durable enough for daily use.'
  },
  {
    id: 'm2',
    faithId: 'muslim',
    name: 'Crystal Tasbih Beads',
    price: 35,
    rating: 4.6,
    isNew: false,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1596716075908-01e4a7d65603?q=80&w=800',
    description: 'Elegant crystal Tasbih beads (33 count) designed for Dhikr. The facets catch the light beautifully, making this a thoughtful gift for Ramadan or Eid. Comes in a velvet pouch.'
  },
  {
    id: 'm3',
    faithId: 'muslim',
    name: 'Calligraphy Wall Art',
    price: 85,
    rating: 4.7,
    isNew: true,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800',
    description: 'A stunning piece of Islamic wall art featuring the Ayat al-Kursi in Thuluth script. Printed on archival canvas with gold-leaf detailing, this piece serves as a spiritual reminder and beautiful decor.'
  },
  {
    id: 'c1',
    faithId: 'christian',
    name: 'Olive Wood Cross',
    price: 40,
    rating: 4.9,
    isNew: false,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1558963773-a006db234e62?q=80&w=800',
    description: 'Hand-carved from genuine olive wood trimmings in Bethlehem. The natural grain of the wood makes every cross unique. It fits comfortably in the hand, perfect for prayer or as a comforting presence.'
  },
  {
    id: 'c2',
    faithId: 'christian',
    name: 'Scented Votive Candles',
    price: 15,
    rating: 4.2,
    isNew: true,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800',
    description: 'Set of 3 beeswax votive candles infused with Frankincense and Myrrh. These slow-burning candles create a serene atmosphere for prayer, meditation, or quiet reflection.'
  },
  {
    id: 's1',
    faithId: 'sikh',
    name: 'Steel Kara (Engraved)',
    price: 30,
    rating: 4.8,
    isNew: false,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1629814597402-23f2ee960241?q=80&w=800',
    description: 'High-quality stainless steel Kara, one of the five Ks of Sikhism. Engraved with the Mool Mantar, it is hypoallergenic, rust-proof, and serves as a constant reminder of the Guru’s teachings.'
  },
  {
    id: 's2',
    faithId: 'sikh',
    name: 'Wooden Kangha Comb',
    price: 12,
    rating: 4.5,
    isNew: true,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1590525254109-17367c3b9409?q=80&w=800',
    description: 'A small wooden comb (Kangha) meant to be worn in the hair. Hand-carved from Neem wood, which is known for its medicinal properties. Essential for maintaining the Kesh (uncut hair).'
  }
];

export const faiths = [
  {
    id: 'hindu',
    name: 'Hindu',
    subtitle: 'Vedic Rituals & Decor',
    heroImage: 'https://images.unsplash.com/photo-1623835634563-1249b6574426?q=80&w=800',
    color: '#D35400',
    fact: 'Hinduism is the oldest known religion, with roots dating back over 4,000 years.',
    get products() { return allProducts.filter(p => p.faithId === 'hindu') }
  },
  {
    id: 'muslim',
    name: 'Muslim',
    subtitle: 'Islamic Art & Essentials',
    heroImage: 'https://images.unsplash.com/photo-1583506925576-96af73551543?q=80&w=800',
    color: '#00695C',
    fact: 'Islamic art avoids figurative images to avoid idolatry, focusing on geometry and calligraphy.',
    get products() { return allProducts.filter(p => p.faithId === 'muslim') }
  },
  {
    id: 'christian',
    name: 'Christian',
    subtitle: 'Sacred Symbols & Gifts',
    heroImage: 'https://images.unsplash.com/photo-1558963773-a006db234e62?q=80&w=800',
    color: '#5D4037',
    fact: 'The cross became a popular Christian symbol roughly 200 years after Jesus.',
    get products() { return allProducts.filter(p => p.faithId === 'christian') }
  },
  {
    id: 'sikh',
    name: 'Sikh',
    subtitle: 'Five Ks & Heritage',
    heroImage: 'https://images.unsplash.com/photo-1629814597402-23f2ee960241?q=80&w=800',
    color: '#FF8F00',
    fact: 'Sikhism teaches equality for all people, regardless of caste, gender, or creed.',
    get products() { return allProducts.filter(p => p.faithId === 'sikh') }
  },
];