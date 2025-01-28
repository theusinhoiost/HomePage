function AboutMe() {
  return (
    <main>
      <div>
        <h1 className="display-6 text-center mb-4 ">Me conheça melhor</h1>
        <div className="accordion accordion-flush" id="accordionFlushAboutMe">
          {/* Ferramentas e tecnologias */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <i className="bi bi-tools me-2 "></i>
                Quais outras ferramentas você utiliza?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body bg-dark-subtle">
                Trabalho com diversas linguagens de programação,
                incluindo{" "}
                <strong>TypeScript/JavaScript, PHP, HTML, CSS e Python</strong>,
                além de ter experiência com frameworks e ferramentas como{" "}
                <strong>React, Vue.js, Bootstrap e SASS</strong>. Tenho
                conhecimento em bancos de dados como{" "}
                <strong>MySQL e MongoDB</strong> e utilizo ferramentas como{" "}
                <strong>VSCode e Git</strong> para desenvolver soluções
                eficientes. Atualmente, estou cursando o quinto semestre de
                Ciência da Computação e comecei a aprender Machine Learning com{" "}
                <strong>Python</strong>. Dedico-me a projetos pessoais e
                profissionais que unem funcionalidade e criatividade.
              </div>
            </div>
          </div>
          {/* Algo mais sobre você */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <i className="bi bi-person me-2"></i>
                Algo mais sobre você?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body bg-dark-subtle">
                Além de programar, gosto de praticar esportes como corrida e
                beach tennis. Também sou apaixonado por videogames, e sempre que
                posso, dedico meu tempo a explorar novos mundos e aventuras
                virtuais. Evito ambientes extremamente lotados, pois prefiro
                momentos mais tranquilos e agradáveis.
              </div>
            </div>
          </div>
          {/* Línguas */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <i className="bi bi-translate me-2"></i>
                Quais línguas você fala ou está aprendendo?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body bg-dark-subtle">
                Sou fluente em <strong>português brasileiro</strong> e{" "}
                <strong>inglês</strong>. Atualmente, estou aprendendo{" "}
                <strong>italiano</strong> e <strong>espanhol</strong>.
              </div>
            </div>
          </div>
          {/* Futuro */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <i className="bi bi-calendar-event me-2"></i>
                O que pensa sobre seu futuro?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body bg-dark-subtle">
                Meu objetivo é me tornar um desenvolvedor altamente qualificado,
                capaz de criar soluções que impactem positivamente a vida das
                pessoas. Planejo também aprofundar meus conhecimentos em áreas
                como inteligência artificial, desenvolvimento full-stack e
                gestão de projetos.
              </div>
            </div>
          </div>
          {/* Diferencial */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark-subtle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <i className="bi bi-lightbulb me-2"></i>
                Qual o seu diferencial?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse">
              <div className="accordion-body bg-dark-subtle">
                Meu diferencial é a combinação da minha formação em{" "}
                <strong>Biomedicina</strong> com minha sólida base em{" "}
                <strong>Ciência da Computação</strong>, onde estou no quinto
                semestre do curso. Essa interdisciplinaridade me permite aplicar
                conhecimentos tecnológicos para resolver problemas complexos e
                criar soluções inovadoras. Além disso, minha paixão por
                aprendizado constante e minha busca por avanços úteis à
                humanidade me impulsionam a explorar novas tecnologias e áreas,
                como Machine Learning, para desenvolver soluções que façam a
                diferença.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
