import { Card } from "./Card";
import "../../../src/styles.css";

export const CoursesPage = () => {
  return (
    <div className="container mx-auto">
      {/*====================
        Nav-courses
        =====================*/}
      <nav className="d-flex justify-content-between align-items-center border-bottom border-info pb-3 my-4">
        <h5 className="mb-0">Cursos</h5>
        {/*==================
         Button Sign-out 
         ===================*/}
        <a href="#">
          <i className="fas fa-sign-out h5" style={{ marginBottom: 0 }}></i>
        </a>
      </nav>
      <div className="row justify-content-center gap" style={{ gap: "1.5rem" }}>
        <Card
          header="Curso 1"
          title="Primer pagina web"
          description="Crea tu primer pagina web utilizando solo HTML y CSS"
        />
        <Card
          header="Curso 2"
          title="Entorno desarrollo"
          description="Configura tu entorno de desarrollo en VS-code"
        />
        <Card
          header="Curso 3"
          title="Curso HTML"
          description="Aprende HTML para principiantes y avanzados"
        />
        <Card
          header="Curso 4"
          title="Curso GIT"
          description="Aprende GIT en este curso practico desde cero"
        />
        <Card
          header="Curso 5"
          title="Curso CSS"
          description="Aprende CSS para principiantes desde cero"
        />
        <Card
          header="Curso 6"
          title="Curso FLEXBOX"
          description="Aprende CSS-FLEXBOX desde principante a avanzado"
        />
        <Card
          header="Curso 7"
          title="Curso GRID"
          description="Aprende CSS-GRID desde principiante a avanzado"
        />
        <Card
          header="Curso 8"
          title="Curso BOOTSTRAP"
          description="Aprende BOOTSTRAP con este curso completo"
        />
        <Card
          header="Curso 9"
          title="SASS-BOOTSTRAP"
          description="Aprende a como personalizar estilos de Bootstrap con Sass"
        />
        <Card
          header="Curso 10"
          title="Curso TAILWIND"
          description="Aprende TAILDWIND desde cero, con este curso completo"
        />
      </div>
    </div>
  );
};
