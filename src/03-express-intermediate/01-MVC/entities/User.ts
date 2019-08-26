import * as repo from '../repositories/UserRepo'

export class User {
  public name: string = ''
  public age: number = 0
  public constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public save = async () => {
    const saved = await repo.save(this)
    return saved
  }

  public static fetchAll = async () => {
    const users = await repo.fetchAll()
    return users
  }
}
