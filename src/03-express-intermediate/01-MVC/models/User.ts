export class User {
  name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello() {
    return `Hola mi nombre es ${this.name}, y tengo ${this.age} años`
  }
}
