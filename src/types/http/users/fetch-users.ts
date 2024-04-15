import { User } from '../../entities/users'

export async function FetchUser(): Promise<User[]> {
  const userResponse = await fetch('http://localhost:3333/users')

  const userData: User[] = await userResponse.json()

  return userData
}
