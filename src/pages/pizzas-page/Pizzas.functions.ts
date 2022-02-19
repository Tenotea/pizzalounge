import db from '../../db/pizza.db'

export function getPizzaItems (page: number) {
  const itemsPerPage = 6
  const startIndex = itemsPerPage * (page - 1)
  const endIndex = startIndex + itemsPerPage
  return {
    items: db.slice(startIndex, endIndex), 
    total: Math.ceil(db.length / itemsPerPage)
  }
}
