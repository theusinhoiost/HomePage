export default function Carousel() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-6">Principais Tecnologias e Linguagens</h2>
      <div id="techCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores */}
        <div className="carousel-indicators my-1">
          <button
            type="button"
            data-bs-target="#techCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#techCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#techCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#techCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* JavaScript */}
          <div className="carousel-item active">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="d-block"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="mt-3">JavaScript</h5>
              <p className="text-center">
                Linguagem dinâmica e poderosa para desenvolvimento front-end e
                back-end.
              </p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="d-block"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="mt-3">TypeScript</h5>
              <p className="text-center">
                Superconjunto do JavaScript que traz tipagem estática e melhora
                a produtividade.
              </p>
            </div>
          </div>

          {/* React */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="d-block"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="mt-3">React</h5>
              <p className="text-center">
                Biblioteca JavaScript para criar interfaces de usuário
                interativas e dinâmicas.
              </p>
            </div>
          </div>

          {/* Python */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="d-block"
                style={{ width: "100px", height: "100px" }}
              />
              <h5 className="mt-3">Python</h5>
              <p className="text-center">
                Linguagem versátil, perfeita para automação, ciência de dados e
                inteligência artificial.
              </p>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#techCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#techCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
}
