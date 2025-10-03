export function Inicio() {
return(
    <div className="portfolio-container">
      {/* Sección de Bienvenida */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">¡Hola, soy [Tu Nombre]!</h1>
          <p className="hero-subtitle">Desarrollador Web y Diseñador UI/UX</p>
          <a href="#proyectos" className="cta-button">Ver mis Proyectos</a>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="about-section section">
        <div className="section-content">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-details">
            <img src="https://placehold.co/300x300/a3c9f2/000000?text=Tu+Foto" alt="Tu foto de perfil" className="profile-photo" />
            <p className="about-text">
              Aquí puedes escribir una breve biografía. Habla de tu experiencia,
              tus habilidades y tu pasión por la tecnología.
              <br /><br />
              Por ejemplo: "Soy un desarrollador web con 5 años de experiencia,
              especializado en la creación de aplicaciones robustas y eficientes
              usando React y Node.js. Mi objetivo es convertir ideas complejas
              en soluciones digitales intuitivas y fáciles de usar."
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" className="projects-section section">
        <div className="section-content">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            {/* Ejemplo de Proyecto 1 */}
            <div className="project-card">
              <img src="https://placehold.co/400x250/a3c9f2/000000?text=Proyecto+1" alt="Proyecto 1" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Nombre del Proyecto 1</h3>
                <p className="project-description">Breve descripción del proyecto, tecnologías usadas (ej. React, Firebase).</p>
                <a href="#" className="project-link">Ver en GitHub</a>
              </div>
            </div>
            {/* Ejemplo de Proyecto 2 */}
            <div className="project-card">
              <img src="https://placehold.co/400x250/a3c9f2/000000?text=Proyecto+2" alt="Proyecto 2" className="project-image" />
              <div className="project-info">
                <h3 className="project-title">Nombre del Proyecto 2</h3>
                <p className="project-description">Breve descripción del proyecto, tecnologías usadas (ej. React, Node.js).</p>
                <a href="#" className="project-link">Ver en GitHub</a>
              </div>
            </div>
            {/* Puedes duplicar este div para agregar más proyectos */}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact-section section">
        <div className="section-content">
          <h2 className="section-title">Contacto</h2>
          <p className="contact-text">
            ¡Hablemos! Puedes contactarme a través de los siguientes canales:
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/tuperfil" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/tuperfil" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.53-2.06A5.05 5.05 0 0 0 16 3.19a5.09 5.09 0 0 0-3.92-1.92c-1.41 0-2.75.54-3.77 1.57A5.05 5.05 0 0 0 7 3.19a5.44 5.44 0 0 0-1.95 2.15 5.07 5.07 0 0 0-1.53 2.06c0 3.73 3.3 4.92 6.44 5.27A3.37 3.37 0 0 0 18.94 17.13V20"></path><path d="M12 11.23a6 6 0 0 0 1.92 4.77"></path></svg>
            </a>
            <a href="mailto:tu.email@example.com" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
)
    
}