export interface OrderForm {
  name: string
  phone: string
  city: string
  address: string
  notes?: string
  packageId: string
  packageName: string
  price: number
  priceUSD: number
}

export interface Order extends OrderForm {
  id: string
  paypalOrderId?: string
  status: 'pending' | 'paid' | 'cancelled'
  createdAt: string
}
