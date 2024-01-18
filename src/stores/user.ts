import { AxiosInstance } from '@/helpers/axios'
import { UsersApiFactory, type User, type CreateUserDto, type UpdateUserDto } from 'backend-sdk'
import { defineStore } from 'pinia'

const model = UsersApiFactory(undefined, import.meta.env.VITE_BE_BASE_URL, AxiosInstance)

export const useUserStore = defineStore('user', () => {
  const findAll: () => Promise<User[]> = async () => {
    const { data } = await model.findAllUsers()
    return data
  }

  const create: (user: CreateUserDto) => Promise<User> = async (user) => {
    const { data } = await model.createUser(user)
    return data
  }

  const update: (user: User, updateUserDto: UpdateUserDto) => Promise<User> = async (
    user,
    updateUserDto
  ) => {
    const { data } = await model.updateUser(user.id, updateUserDto)
    return data
  }

  const remove: (user: User) => Promise<void> = async (user) => {
    await model.removeUser(user.id)
  }

  return { findAll, create, update, remove }
})
