import fs from 'fs'
import path from 'path'

const db = path.resolve(__dirname, '..', 'db')
const entity = path.resolve(db, 'user.json')
export class User {
  name: string = ''
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  save = () => {
    fs.readdir(db, (err) => {
      const usersJson = JSON.stringify([this])
      if (err) {
        return fs.mkdir(db, (err) => {
          if (err) return console.error(err)
          fs.writeFile(entity, usersJson, (err) => {
            if (err) return console.error(err)
          })
        })
      }
      fs.readFile(entity, (err, data) => {
        if (err) {
          return fs.writeFile(entity, usersJson, (err) => {
            if (err) return console.error(err)
          })
        }
        const usersInDB: User[] = JSON.parse(data.toString())
        usersInDB.push(this)
        const savedUsersJson = JSON.stringify(usersInDB)
        console.log(usersInDB)
        fs.writeFile(entity, savedUsersJson, (err) => {
          if (err) return console.error(err)
        })
      })
    })
    return this
  }

  static fetchAll = () => {
    const users = fs.readFileSync(entity)
    return JSON.parse(users.toString())
  }
}
