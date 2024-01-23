import type { ExceptionDto, User } from 'backend-sdk'

export function isUserResponse(response: User | ExceptionDto): response is User {
  return (response as User).id !== undefined
}
