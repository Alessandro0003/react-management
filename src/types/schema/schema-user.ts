import { z } from 'zod'

export const schemaUser = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Invalid email' }),
})

export type SchemaUser = z.infer<typeof schemaUser>
