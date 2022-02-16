import HomeLeftColumn from "../../organisms/home-left-column/HomeLeftColumn";
import HomePizzaImage from "../../organisms/home-pizza-image/HomePizzaImage";
import './HomeTemplate.scss'

export default function HomeTemplate () {
  return (
    <section id="home-template">
      <div className="content-container">
        <HomeLeftColumn />
      </div>
      <HomePizzaImage />
    </section>
  )
}
