import { Component } from '../models/component';
import './main.css';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main>
    
    </main>
    `;
  }
}
