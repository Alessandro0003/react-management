import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateProductSchema } from '../../schema/schema-product'

export function CreateProduct() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, CreateProductSchema>({
    mutationFn: async (formData) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      await fetch('http://localhost:3333/purchases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-purchases'],
      })
    },
  })
}
