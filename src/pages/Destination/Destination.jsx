import "./destination.css"
import Navbar from "../../components/NavBar"
import { useState } from "react"
import Header from "../../components/Header"

const Destination = ({ destination }) => {
  const [index, setIndex] = useState(0)
  let data = destination[index]

  const handleSelect = (selected) => {
    switch (selected) {
      case "moon":
        setIndex(0)
        break
      case "mars":
        setIndex(1)
        break
      case "europa":
        setIndex(2)
        break
      case "titan":
        setIndex(3)
        break
      default:
        setIndex(0)
        break
    }
    const btns = document.querySelectorAll(".dest-dest")
    const removeActiveClass = () => {
      btns.forEach((button) => {
        button.classList.remove("active")
      })
    }
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        removeActiveClass()
        btn.classList.add("active")
      })
    })
  }

  return (
    <section className=" destination-home ">
      <Navbar />
      <div className="dest-container">
        <Header num="01" text="pick your destination" />
        {/* flex */}
        <div className="flex items-center justify-center flex-col lg:flex-row lg:space-x-[9.75rem]">
          {/* image */}
          <img
            src={data.images.png}
            alt={`${data.name} image`}
            className="dest-image"
          />

          {/* slideshow and text */}
          <div className="lg:w-[27.8125rem] lg:h-[29.5rem] ">
            {/* slider/switcher/toggle */}
            <div className="flex items-center justify-center lg:justify-start space-x-7 md:space-x-9 mb-5 md:mb-9 ">
              <span
                className="dest-dest active"
                aria-label="see moon info"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                moon
              </span>
              <span
                className="dest-dest"
                aria-label="see mars info"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                mars
              </span>
              <span
                className="dest-dest"
                aria-label="see europa info"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                europa
              </span>
              <span
                className="dest-dest"
                aria-label="see titan info"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                titan
              </span>
            </div>
            {/* text */}
            <div className="text-center lg:text-left">
              {/* heading */}
              <h2 className="text-white text-head_md md:text-[5rem] lg:text-head_lg font-belle uppercase">
                {data.name}
              </h2>

              <article className="dest-article">{data.description}</article>
              <span className="dest-line"></span>
              {/* distance */}
              <div className="dest-distance">
                {/* avg distance */}
                <div className="block text-center lg:text-left h-[3.8125rem] w-[13.5rem] space-y-3">
                  <p className="text-lightBlue uppercase text-sm tracking-[2.36px] font-barlowCondensed">
                    avg. distance
                  </p>
                  <p className="text-white uppercase font-belle text-[1.75rem]">
                    {data.distance}
                  </p>
                </div>
                {/* travel time */}
                <div className="block text-center lg:text-left h-[3.8125rem] w-[13.5rem] space-y-3">
                  <p className="text-lightBlue uppercase text-sm tracking-[2.36px] font-barlowCondensed">
                    est. travel time
                  </p>
                  <p className="text-white uppercase font-belle text-[1.75rem]">
                    {data.travel}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
