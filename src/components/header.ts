import { Component } from '../models/component';
import './header.css';

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>${this.title}</h1>
    </header>
    `;
  }
}
