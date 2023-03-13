export class UserDTO {
  id?: string;
  access_token?: string;
  name: string;
  surname_1: string;
  surname_2?: string;
  alias: string;
  birth_date: Date;
  email: string;
  password: string;

  constructor(
    name: string,
    surname_1: string,
    surname_2: string,
    alias: string,
    birth_date: Date,
    email: string,
    password: string
  ) {
    this.name = name;
    this.surname_1 = surname_1;
    this.surname_2 = surname_2;
    this.alias = alias;
    this.birth_date = birth_date;
    this.email = email;
    this.password = password;
  }

  public showUser(): string {
    let str: string = '';

    console.log('Email: ' + this.email);
    if (this.email !== null && this.email !== 'undefined') {
      str += 'Email: ' + this.email;
    }
    if (this.name !== null && this.name !== 'undefined') {
      str += 'Name: ' + this.name;
    }
    if (this.surname_1 !== null && this.surname_1 !== 'undefined') {
      str += 'surname_1: ' + this.surname_1;
    }
    if (this.surname_2 !== null && this.surname_2 !== 'undefined') {
      str += 'surname_2: ' + this.surname_2;
    }

    return str;
  }
}
