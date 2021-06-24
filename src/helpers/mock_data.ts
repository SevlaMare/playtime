import { ranked, duel, fun, training } from '../assets/icon';

export const CATEGORIES = [
  { id: '1', title: 'Ranked', icon: ranked },
  { id: '2', title: 'Duel 1v1', icon: duel },
  { id: '3', title: 'Fun', icon: fun },
  { id: '4', title: 'Pratice', icon: training },
];

export const APPOINTMENTS = [
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

export const PLAYERS = [
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

export const GUILDS = [
  {
    id: '1',
    name: 'Lendários',
    icon: 'image.png',
    owner: true,
  },
  {
    id: '2',
    name: 'Galera do Game',
    icon: 'image.png',
    owner: false,
  },
];
