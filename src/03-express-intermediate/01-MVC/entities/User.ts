const users: User[] = []

export class User {
  name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  save = () => {
    users.push(this)
    return this
  }

  static fetchAll = () => {
    return users
  }
}
