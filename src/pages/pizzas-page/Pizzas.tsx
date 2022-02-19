import { useEffect, useState } from "react";
import PizzasTemplate from "../../components/templates/pizzas-template/PizzasTemplate";
import { Pizza } from "../../types/Pizza";
import { getPizzaItems } from "./Pizzas.functions";

export default function PizzasPage () {
  const [currentPage, setCurrentPage] = useState(1)
  const [pizzaList, setPizzaList] = useState([] as Pizza[])
  const [ totalPages, setTotalPages ] = useState(1)
  
  useEffect(() => {
    const _pizzaList = getPizzaItems(currentPage)
    setPizzaList(_pizzaList.items)
    setTotalPages(_pizzaList.total)
  }, [currentPage])

  return (
    <section>
      <PizzasTemplate
        pizzas={pizzaList}
        currentPage={currentPage}
        totalPages={totalPages}
        onPaginateNext={() => setCurrentPage( currentPage < totalPages ? currentPage + 1 : currentPage)}
        onPaginatePrevious={() => setCurrentPage( currentPage > 1 ? currentPage - 1 : currentPage)}
      />
    </section>  
  )
}
