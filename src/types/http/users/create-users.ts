import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SchemaUser } from '../../schema/schema-user'
import { User } from '../../entities/users'

export function CreateUsers() {
  const queryClient = useQueryClient()

  const mutation = useMutation<void, Error, SchemaUser, User>({
    mutationFn: async (formData) => {
      try {
        const response = await fetch('http://localhost:3333/users')
        const data: User[] = await response.json()

        const emailAlreadyExists = data.some(
          (user) => user.email === formData.email,
        )

        if (emailAlreadyExists) {
          throw new Error('Email already exists')
        }

        await fetch('http://localhost:3333/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
      } catch (error) {
        throw new Error((error as Error).message)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-user'],
      })
    },
  })

  return mutation
}
