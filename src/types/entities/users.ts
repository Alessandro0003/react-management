export interface User {
  id: string
  name: string
  email: string
  purchases: string[]
}

export interface UserResponse {
  users: User[]
}
