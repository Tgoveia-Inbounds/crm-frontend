import { AxiosInstance } from '@/helpers/axios'
import {
  UsersApiFactory,
  type User,
  type CreateUserDto,
  type UpdateUserDto,
  type ExceptionDto
} from 'backend-sdk'
import { defineStore } from 'pinia'

const model = UsersApiFactory(undefined, import.meta.env.VITE_BE_BASE_URL, AxiosInstance)

export const useUserStore = defineStore('user', () => {
  const findAll: () => Promise<User[]> = async () => {
    const { data } = await model.findAllUsers()
    return data
  }

  const create: (user: CreateUserDto) => Promise<User | ExceptionDto> = async (user) => {
    try {
      const { data } = await model.createUser(user)
      return data
    } catch (e: any) {
      if (e.response?.data) {
        return e.response.data
      } else {
        return {
          message: 'Something went wrong, please try again later.'
        }
      }
    }
  }

  const update: (user: User, updateUserDto: UpdateUserDto) => Promise<User | ExceptionDto> = async (
    user,
    updateUserDto
  ) => {
    const { data } = await model.updateUser(user.id, updateUserDto)
    return data
  }

  const remove: (user: User) => Promise<void | ExceptionDto> = async (user) => {
    await model.removeUser(user.id)
  }

  return { findAll, create, update, remove }
})
