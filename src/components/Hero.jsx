export default function Hero() {
  const technologies = ['React', 'JSX', 'Bootstrap', 'useState', 'Responsive']

  return (
    <section id="inicio" className="hero-section position-relative overflow-hidden">
      <div className="container py-5 py-lg-6">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow mb-3">DESARROLLO WEB · PRÁCTICA EXPERIMENTAL 2</p>
            <h1 className="display-3 fw-bold hero-title mb-4">
              Registro y acceso, <span>simple y dinámico.</span>
            </h1>
            <p className="lead hero-copy mb-4">
              FormLab es una Landing Page desarrollada con React, JSX y Bootstrap que integra
              un formulario dinámico de registro e inicio de sesión, manejo de estado con useState,
              eventos, validaciones del lado del cliente y un diseño completamente responsive.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <a className="btn btn-primary btn-lg rounded-pill px-4" href="#formulario">Probar formulario</a>
              <a className="btn btn-outline-secondary btn-lg rounded-pill px-4" href="#caracteristicas">Ver funcionalidades</a>
            </div>
            <div className="d-flex flex-wrap gap-2" aria-label="Tecnologías utilizadas en la Práctica Experimental 2">
              {technologies.map((item) => <span key={item} className="tech-pill">{item}</span>)}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual-card mx-auto" aria-hidden="true">
              <div className="visual-window">
                <div className="visual-window-bar"><span/><span/><span/></div>
                <div className="visual-code-line long" />
                <div className="visual-code-line medium" />
                <div className="visual-form-grid">
                  <div /><div /><div className="wide" /><div className="button-mock" />
                </div>
              </div>
              <div className="floating-badge badge-react">⚛ React</div>
              <div className="floating-badge badge-bootstrap">B Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
