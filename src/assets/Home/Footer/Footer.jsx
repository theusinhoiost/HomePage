export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-4 text-center">
        {/* Sobre mim */}
        <p>
          Desenvolvido por <strong>Matheus Iost</strong>. Sinta-se à vontade para entrar em contato!
        </p>
        {/* Links de redes sociais */}
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.linkedin.com/in/matheusiost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/theusinhoiost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            GitHub
          </a>
        </div>
        {/* Copyright */}
        <p className="mt-3 mb-0">&copy; 2025 Matheus Iost. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
