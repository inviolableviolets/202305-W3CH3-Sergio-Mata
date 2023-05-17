import { Pet } from '../models/pets';

export const getMockPets = (): Pet[] => [
  new Pet('Pelotillas', 'German Shepperd', 'Ragno'),
  new Pet('Espinaca', 'Rottweiler', 'Mauricio'),
  new Pet('Joseba', 'Caniche', 'El Menda'),
];
