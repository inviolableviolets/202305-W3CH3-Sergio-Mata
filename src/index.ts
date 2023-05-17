import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { PetsList } from './components/pets.list';

import './style.css';

new Header('.root', "F'ING ASTOUNDING MAGNIFICENT STUPENDOUS PETS");
new Main('.root');
new PetsList('main');
new Footer('.root', 'Awesome Pets © 2023');
