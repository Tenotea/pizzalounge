import PizzasTemplate from "../../components/templates/pizzas-template/PizzasTemplate";
import pizzaList from '../../db/pizza.db'

export default function PizzasPage () {
  return (
    <section>
      <PizzasTemplate
        pizzas={pizzaList}
        currentPage={1}
        totalPages={4}
      />
    </section>  
  )
}
