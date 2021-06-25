import { ranked, duel, fun, training } from '../assets/icon';

const USER = {
  id: '1',
  username: 'Sevla',
  firstName: 'Thiago',
  avatar: 'avatar.png',
  email: 'email@email.com',
  token: '12348JDIOJ#MIO',
};

const CATEGORIES = [
  { id: '1', title: 'Ranked', icon: ranked },
  { id: '2', title: 'Duel 1v1', icon: duel },
  { id: '3', title: 'Fun', icon: fun },
  { id: '4', title: 'Pratice', icon: training },
];

const APPOINTMENTS = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Legend',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 at 20:40',
    description: 'Today we reach top10 without lost any match!',
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Legend',
      icon: null,
      owner: false,
    },
    category: '1',
    date: '22/06 at 20:40',
    description: 'Today we reach top10 without lost any match!',
  },
];

const PLAYERS = [
  {
    id: '1',
    username: 'Sevla',
    avatar_url: 'https://github.com/sevlamare.png',
    status: 'online',
  },
  {
    id: '2',
    username: 'Mare',
    avatar_url: 'https://github.com/sevlamare.png',
    status: 'offline',
  },
];

const GUILDS = [
  {
    id: '1',
    name: 'Legends',
    icon: 'image.png',
    owner: true,
  },
  {
    id: '2',
    name: 'Gamming team',
    icon: 'image.png',
    owner: false,
  },
];

export { USER, CATEGORIES, APPOINTMENTS, PLAYERS, GUILDS };
