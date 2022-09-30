import { Card } from "../components/Card";
import "../../../src/styles.css";

const cards = [
  {
    header: "Curso 1",
    title: "Primer pagina web",
    description: "Crea tu primer pagina web utilizando solo HTML y CSS",
  },
  {
    header: "Curso 2",
    title: "Entorno desarrollo",
    description: "Configura tu entorno de desarrollo en VS-code",
  },
  {
    header: "Curso 3",
    title: "Curso HTML",
    description: "Aprende HTML para principiantes y avanzados",
  },
  {
    header: "Curso 4",
    title: "Curso GIT",
    description: "Aprende GIT en este curso practico desde cero",
  },
  {
    header: "Curso 5",
    title: "Curso CSS",
    description: "Aprende CSS para principiantes desde cero",
  },
  {
    header: "Curso 6",
    title: "Curso FLEXBOX",
    description: "Aprende CSS-FLEXBOX desde principante a avanzado",
  },
  {
    header: "Curso 7",
    title: "Curso GRID",
    description: "Aprende CSS-GRID desde principiante a avanzado",
  },
  {
    header: "Curso 8",
    title: "Curso BOOTSTRAP",
    description: "Aprende BOOTSTRAP con este curso completo",
  },
  {
    header: "Curso 9",
    title: "SASS-BOOTSTRAP",
    description: "Aprende a como personalizar estilos de Bootstrap con Sass",
  },
  {
    header: "Curso 10",
    title: "Curso TAILWIND",
    description: "Aprende TAILDWIND desde cero, con este curso completo",
  },
];
export const CoursesPage = () => {
  return (
    <div className="container mx-auto">
      {/* Nav-courses<============= */}
      <nav className="d-flex justify-content-between align-items-center border-bottom border-info pb-3 my-4">
        <h5 className="mb-0">Cursos</h5>
        {/* Button Sign-Out<========= */}
        <a href="#">
          <i className="fas fa-sign-out h5" style={{ marginBottom: 0 }}></i>
        </a>
      </nav>
      {/* Cards<===================== */}
      <div className="row justify-content-center" style={{ gap: "1.5rem" }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {/* Footer<==================== */}
      <div className="d-flex justify-content-center border-top border-info mt-5 mb-3 pt-5">
        <ul className="nav border-bottom border-light pb-3">
          <li className="nav-item">
            <a href="#" className="nav-link text-info">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-info">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-info">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-info">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-info">
              About
            </a>
          </li>
        </ul>
      </div>
      <span className="d-flex justify-content-center text-info  mb-5">
        © 2021 Bootcamp Dragon Path, Inc
      </span>
    </div>
  );
};
