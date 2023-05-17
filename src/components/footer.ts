/* eslint-disable no-unused-vars */
import { Component } from '../models/component';
import './footer.css';
export class Footer extends Component {
  constructor(selector: string, public brand: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer>
      <span>${this.brand}</span>
    </footer>
    `;
  }
}
