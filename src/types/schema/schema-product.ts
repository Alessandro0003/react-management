import { z } from 'zod'

export const createProductSchema = z.object({
  product: z.string(),
  price: z.string(),
  description: z.string(),
  quantity: z.number(),
})

export type CreateProductSchema = z.infer<typeof createProductSchema>
