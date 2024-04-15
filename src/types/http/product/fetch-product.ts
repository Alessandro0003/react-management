import { Purchase } from '../../entities/purchases'

export async function FetchPurchases(): Promise<Purchase[]> {
  const purchaseResponse = await fetch('http://localhost:3333/purchases')

  const purchasesData: Purchase[] = await purchaseResponse.json()

  return purchasesData
}
