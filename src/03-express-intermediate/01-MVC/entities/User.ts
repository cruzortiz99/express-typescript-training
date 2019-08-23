import fs from 'fs'
import path from 'path'
import * as repo from '../repositories/UserRepo'

const db = path.resolve(__dirname, '..', 'db')
const entity = path.resolve(db, 'user.json')
export class User {
  name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  save = async () => {
    const saved = await repo.save(this)
    return saved
  }

  static fetchAll = () => {
    const users = fs.readFileSync(entity)
    return JSON.parse(users.toString())
  }
}
