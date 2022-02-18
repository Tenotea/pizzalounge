import Pagination from "../../organisms/pagination/Pagination";
import PizzaList from "../../organisms/pizza-list/PizzaList";
import { PizzasTemplateProps } from './PizzasTemplate.d'
import './PizzasTemplate.scss'

export default function PizzasTemplate ({ pizzas, currentPage, totalPages }: PizzasTemplateProps) {
  return (
    <section id="pizzas-template">
      <PizzaList
        pizzas={pizzas}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages} 
      />
    </section>
  )  
}