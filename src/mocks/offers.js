export default [
  {
    id: 0,
    isPremium: true,
    image: `img/apartment-01.jpg`,
    price: 120,
    isFavorite: false,
    rate: 1,
    name: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    bedroomsCount: 3,
    adultsCount: 4,
    host: {
      name: `Angelina`,
      isPro: true,
      avatar: `img/avatar-angelina.jpg`
    },
    images: [
      `img/studio-01.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`
    ],
    reviews: [
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      }
    ],
  },
  {
    id: 1,
    isPremium: false,
    image: `img/room.jpg`,
    price: 80,
    isFavorite: true,
    rate: 2,
    name: `Wood and stone place`,
    type: `Private room`,
    bedroomsCount: 3,
    adultsCount: 4,
    host: {
      name: `Max`,
      isPro: false,
      avatar: `img/avatar-max.jpg`
    },
    images: [
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/room.jpg`,
    ],
    features: [
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`
    ],
    reviews: [
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      },
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      }
    ],
  },
  {
    id: 2,
    isPremium: false,
    image: `img/apartment-02.jpg`,
    price: 132,
    isFavorite: false,
    rate: 3,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    bedroomsCount: 3,
    adultsCount: 4,
    host: {
      name: `Piter`,
      isPro: false,
      avatar: `img/avatar-angelina.jpg`
    },
    images: [
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`
    ],
    reviews: [
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      }
    ],
  },
  {
    id: 3,
    isPremium: true,
    image: `img/apartment-03.jpg`,
    price: 180,
    isFavorite: false,
    rate: 4,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    bedroomsCount: 3,
    adultsCount: 4,
    host: {
      name: `Sam`,
      isPro: false,
      avatar: `img/avatar-angelina.jpg`
    },
    images: [
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
    ],
    features: [
      `Towels`,
      `Heating`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`,
      `Fridge`
    ],
    reviews: [
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      },
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      }
    ],
  },
  {
    id: 4,
    isPremium: false,
    image: `img/room.jpg`,
    price: 80,
    isFavorite: false,
    rate: 5,
    name: `Wood and stone place`,
    type: `Private room`,
    bedroomsCount: 3,
    adultsCount: 4,
    host: {
      name: `John`,
      isPro: false,
      avatar: `img/avatar-angelina.jpg`
    },
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`,
    ],
    features: [
      `Wi-Fi`,
      `Towels`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Cable TV`
    ],
    reviews: [
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      },
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      },
      {
        user: {
          name: `Max`,
          isPro: true,
          avatar: `img/avatar-max.jpg`,
        },
        rate: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: String(new Date()),
      }
    ],
  }
];
