import type { ExceptionDto } from 'backend-sdk'

export function isErrorResponse(response: unknown): response is ExceptionDto {
  return (response as ExceptionDto).error !== undefined
}
