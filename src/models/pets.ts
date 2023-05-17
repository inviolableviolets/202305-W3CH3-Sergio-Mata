export type PetStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements PetStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1000000).toString();
  }

  id: string;
  isAdopted: boolean;
  constructor(public name: string, public breed: string, public owner: string) {
    this.id = Pet.generateID();
    this.isAdopted = false;
  }
}
