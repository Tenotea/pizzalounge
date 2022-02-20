export type BillingInformation = {
  firstname: string
  lastname: string
  email: string
  address: string
  card: {
    number: string
    expiry: string
    cvv: string
  }
}
