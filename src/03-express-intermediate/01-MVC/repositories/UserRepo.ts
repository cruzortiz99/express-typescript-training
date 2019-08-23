import fs from 'fs'
import path from 'path'
import { User } from '../entities/User'

const db = path.resolve(__dirname, '..', 'db')
const userDoc = path.resolve(db, 'user.json')

const connection: () => Promise<User[]> = () => {
  const usersJson = JSON.stringify([])
  return new Promise((resolve, reject) => {
    fs.readdir(db, (err) => {
      if (err) {
        return fs.mkdir(db, (err) => {
          if (err) return reject(err)
          fs.writeFile(userDoc, usersJson, (err) => {
            if (err) return reject(err)
          })
        })
      }
      fs.readFile(userDoc, (err, data) => {
        if (err) {
          return fs.writeFile(userDoc, usersJson, (err) => {
            if (err) return reject(err)
          })
        }
        const users: User[] = JSON.parse(data.toString())
        resolve(users)
      })
    })
  })
}

export const save = async (user: User) => {
  const usersInDoc = await connection()
  usersInDoc.push(user)
  return new Promise((resolve, reject) => {
    fs.writeFile(userDoc, JSON.stringify(usersInDoc), (err) => {
      if (err) return reject(err)
      resolve(user)
    })
  })
}

export const fetchAll: () => Promise<User[]> = async () => {
  const userInDoc = await connection()
  return userInDoc
}
