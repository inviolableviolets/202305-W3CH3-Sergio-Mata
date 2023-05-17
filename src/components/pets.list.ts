/* eslint-disable no-unused-vars */
import { getMockPets } from '../data/mock.pets';
import { Pet } from '../models/pets';
import { Component } from '../models/component';

import './pets.list.css';

export class PetsList extends Component {
  pets: Pet[];
  constructor(selector: string) {
    super(selector);
    this.pets = getMockPets();
    this.render();
    console.log(this.element);
    console.log(this.pets);
  }

  render() {
    super.cleanHTML(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => item.id !== element.dataset.id);
    console.log(this.pets);
    this.render();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `
          <li>
            <img src="/images/${item.name}.jpg" alt="Pet" />
            <span>Name: ${item.name}</span>
            <span>ID: ${item.id}</span>
            <span>Owner: ${item.owner}</span>
            <div class="actions">
            <span>Adopted: </span>
            <input type="checkbox" ${item.isAdopted ? 'checked' : ''}>
                <span>Deceased: </span>
                <i class="button" role="button" data-id=${item.id}>☠️</i>
            </div>
          </li>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}
