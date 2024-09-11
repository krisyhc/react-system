export type { BaseRes } from './base'

export interface LoginParams {
  username: string
  password: string
  code: string
}

export type LoginResponse = {
  token:string
}

export interface CaptchResponse {
  code: string
}

export interface UserInfoResponse {
  age?: number
  avator?: string
  email?: string
  permission: any[]
  role: string[]
  sex?: '男' | '女'
  username: string
  _id: string


}