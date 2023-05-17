import { Pet } from '../models/pets';

export const getMockPets = (): Pet[] => [
  new Pet('Pelotillas', 'German Shepperd', 'Ambrosio'),
  new Pet('Espinaca', 'Rottweiler', 'Caitlyn Jenner'),
  new Pet('Joseba', 'Caniche', 'Tony Pepperoni'),
];
