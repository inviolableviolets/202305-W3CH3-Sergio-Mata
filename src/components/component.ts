/* eslint-disable no-undef */
export abstract class Component {
  // selector!: string;  SE PONE 'PUBLIC' EN CASOS ASÍ, DONDE SE PIDE POR PARÁMETRO
  template!: string; //SE PONE '!' PORQUE YA LA INICIALIZARÁ EL HIJO, ES UNA PROMESA DE QUE NO SERÁ NULL
  element!: Element;
  constructor(public selector: string) {
    // this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error('Invalid selector.');
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
    return this.element;
  }
}
