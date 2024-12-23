export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="flex items-end px-16 mt-12">
        <div className="pb-32 flex-1">
          <p className="text-dgreen font-bold text-2xl">Manjar2go</p>
          <h2 className="text-7xl text-dgreen font-black">
            Tu comida favorita
          </h2>
          <h2 className="text-6xl mb-2 text-grey font-black">
            al alcance de tus manos
          </h2>
          <div className="my-2 w-[60%]">
            <p className="text-muted text-lg">
              Manjar2Go es tu alternativa para ordenar la comida que te encanta
              desde la comodidad de tu hogar, trabajo o donde quiera que estés.
            </p>
            <div className="flex my-6 mr-8">
              <div className="flex-1 relative aspect-[4/1] max-h-[72px]">
                <img
                  className="h-[100%]"
                  alt="App Store"
                  src="/app_store.png"
                ></img>
              </div>
              <div className="flex-1 relative aspect-[4/1] max-h-[72px]">
                <img
                  className="h-[100%]"
                  alt="Google Play"
                  src="/google_play.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-container h-full flex flex-col flex-1 justify-between">
          <div className="hero-image flex justify-center">
            <img
              src="/hero.png"
              alt="hero-image"
              className="px-auto h-[75vh]"
            />
          </div>
          <div className="option-main-container flex items-center justify-center gap-16 pt-12">
            <div className="option-container flex items-center justify-center">
              <div className="option-logo">
                <img
                  src="/entrega.svg"
                  alt="entrega"
                  className="w-16 h-16 mr-12"
                />
              </div>
              <div className="option">
                <div className="option-label">
                  <span className="text-xl font-bold text-white">Entrega</span>
                </div>
                <div className="option-text">
                  <span className="text-md text-white flex flex-col">
                    Menos de 30 minutos
                  </span>
                </div>
              </div>
            </div>
            <div className="option-container flex items-center justify-center">
              <div className="option-logo">
                <img
                  src="/variedad.svg"
                  alt="Variedad"
                  className="w-16 h-16 mr-12"
                />
              </div>
              <div className="option">
                <div className="option-label">
                  <span className="text-xl font-bold text-white">Variedad</span>
                </div>
                <div className="option-text">
                  <span className="text-md text-white">
                    Numerosos restaurantes
                  </span>
                </div>
              </div>
            </div>
            <div className="option-container flex items-center justify-center">
              <div className="option-logo">
                <img
                  src="/oportunidad.svg"
                  alt="Oportunidad"
                  className="w-16 h-16 mr-12"
                />
              </div>
              <div className="option">
                <div className="option-label">
                  <span className="text-xl font-bold text-white">
                    Oportunidad
                  </span>
                </div>
                <div className="option-text">
                  <span className="text-md text-white flex flex-col">
                    Beneficios para tu local
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* waves */}
      <div className="relative h-[8rem]">
        <object
          data="/wave_1.svg"
          type="image/svg+xml"
          className="absolute w-full bottom-0 -z-20"
        >
          Your browser does not support SVG
        </object>
        <object
          data="/wave_2.svg"
          type="image/svg+xml"
          className="absolute w-full bottom-0 -z-10"
        >
          Your browser does not support SVG
        </object>
      </div>
      {/* stats */}
      <div className="stats-container flex justify-evenly items-center section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
        <div className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">150+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Restaurantes</span>
          </div>
        </div>
        <div className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">3000+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Clientes</span>
          </div>
        </div>
        <div className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">9000+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Pedidos</span>
          </div>
        </div>
        <div className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">1900+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Productos</span>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="bottom-container-main">
        {/* whyus */}
        <div className="why-us-main-container">
          <div className="grid grid-cols-2 place-content-center justify-items-center gap-[80px]">
            <div className="why-us-hero">
              <img src="/why-us.png" alt="why-us" />
            </div>
            <div className="">
              <div className="heading">
                <span className="text-5xl font-bold text-dgreen flex flex-col leading-normal mb-8">
                  Atendiendo
                  <span className="text-5xl font-bold text-grey -mt-1">
                    tus necesidades
                  </span>
                </span>
              </div>
              <div className="mt-4 mb-8 w-[80%]">
                <span className="text-xl font-normal text-muted">
                  En M2GO hemos desarrollado esta plataforma para agilizar sus
                  solicitudes. Sabemos lo que deseas y comprendemos tus
                  necesidades. Por ello, nos enfocamos en satisfacer cada una de
                  las exigencias al asociarnos con restaurantes de reconocida
                  trayectoria cerca de ti.
                </span>
              </div>
              <div className="why-us-footer flex items-center gap-18">
                <div className="wrapper">
                  <div className="testmonio flex items-center gap-4 mb-[15px]">
                    <div className="bar">
                      <img
                        src="/signature-bar.svg"
                        alt="signature-bar"
                        className="h-12"
                      />
                    </div>
                    <div className="ceo -mt-1 text-muted">
                      <span className="text-lg font-normal italic">
                        Testimonio del CEO
                      </span>
                    </div>
                  </div>
                  <div className="signature">
                    <img
                      src="/signature.svg"
                      alt="signature"
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* beneficios */}
        <div>
          <div className="card-main-wrapper px-12 py-16">
            <div className="cards-content-container pb-12">
              <div className="cards-content-container flex flex-col gap-2 items-center">
                <div className="cards-heading px-4 py-4 border-b-green border-b-[3px]">
                  <span className="text-4xl font-semibold text-grey">
                    Beneficios de <span className="text-green">M2GO</span> para
                    tu negocio
                  </span>
                </div>
              </div>
            </div>
            <div className="cards-container">
              <div className="cards-wrapper flex justify-center items-center gap-16">
                <div className="card flex flex-col justify-center items-center bg-white rounded-lg shadow-md max-w-sm w-64">
                  <div className="card-image w-full">
                    <img
                      className="w-full object-cover rounded-t-lg"
                      src="./cards/card1.png"
                      alt="visibilidad"
                    />
                  </div>
                  <div className="card-heading pt-4 pb-2 text-center">
                    <span className="text-lg font-bold">Visibilidad</span>
                  </div>
                  <div className="text-center px-4 pt-2 pb-4">
                    <span className="text-sm text-muted">
                      Le darás visibilidad y credibilidad a tu empresa en la Web
                    </span>
                  </div>
                </div>
                <div className="card flex flex-col justify-center items-center bg-white rounded-lg shadow-md max-w-sm w-64">
                  <div className="card-image w-full">
                    <img
                      className="w-full object-cover rounded-t-lg"
                      src="./cards/card2.png"
                      alt="visibilidad"
                    />
                  </div>
                  <div className="card-heading pt-4 pb-2 text-center">
                    <span className="text-lg font-bold">Exposición</span>
                  </div>
                  <div className="text-center px-4 pt-2 pb-4">
                    <span className="text-sm text-muted">
                      Ganarás clientes nuevos que utilizan nuestra plataforma
                    </span>
                  </div>
                </div>
                <div className="card flex flex-col justify-center items-center bg-white rounded-lg shadow-md max-w-sm w-64">
                  <div className="card-image w-full">
                    <img
                      className="w-full object-cover rounded-t-lg"
                      src="./cards/card3.png"
                      alt="visibilidad"
                    />
                  </div>
                  <div className="card-heading pt-4 pb-2 text-center">
                    <span className="text-lg font-bold">Análisis</span>
                  </div>
                  <div className="text-center px-4 pt-2 pb-4">
                    <span className="text-sm text-muted">
                      Conocerás mejor las preferencias de los clientes.
                    </span>
                  </div>
                </div>
                <div className="card unique-card self-stretch flex flex-col justify-center items-center rounded-lg max-w-sm w-64 bg-cover bg-center bg-no-repeat">
                  <a href="#">
                    <div className="card-link flex justify-center items-center gap-2 px-[16px] py-[10px] border-2 border-solid border-white rounded-lg">
                      <span className="text-lg text-white font-bold">
                        Ver todos
                      </span>
                      <img src="./chevron.svg" alt="chevron" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* features */}
        <div>
          <div className="features-main-container px-16 py-8">
            <div className="feature-heading mb-8">
              <span className="text-3xl font-bold text-grey">
                ¿Cómo funciona la App?
              </span>
            </div>
            <div className="features-container flex justify-evenly items-start">
              <div className="features-content-container flex-1">
                <div className="features-description w-3/4">
                  <span className="text-md font-normal text-grey">
                    M2GO podría convertirse en tu app favorita para pedir
                    comida. Nos dedicamos a ofrecer un servicio robusto, seguro
                    y eficiente, pensado tanto para empresas como para
                    consumidores, garantizando una experiencia fácil, rápida y
                    de alta calidad.
                  </span>
                </div>
                <div className="features-checklist px-6 py-12 flex flex-col gap-4">
                  <div className="list flex items-center gap-2">
                    <img
                      src="./circle-check.svg"
                      alt="verified"
                      className="w-6 h-6"
                    />
                    <span className="text-md text-grey">Respuesta rápida</span>
                  </div>
                  <div className="list flex items-center gap-2">
                    <img
                      src="./circle-check.svg"
                      alt="verified"
                      className="w-6 h-6"
                    />
                    <span className="text-md text-grey">
                      Interfaz de usuario sencilla
                    </span>
                  </div>
                  <div className="list flex items-center gap-2">
                    <img
                      src="./circle-check.svg"
                      alt="verified"
                      className="w-6 h-6"
                    />
                    <span className="text-md text-grey">Staff profesional</span>
                  </div>
                </div>
                <div className="download-options flex gap-[20px]">
                  <img src="./app_store.png" alt="apple-store" />
                  <img src="./google_play.png" alt="google-play" />
                </div>
              </div>
              <div className="features-card-main-container">
                <div className="features-card-container -mt-4 flex justify-between items-center gap-12">
                  <div className="wrapper flex flex-col justify-between items-start gap-12">
                    <div className="card-container flex items-center justify-start px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
                      <div className="card-logo">
                        <img
                          src="./explora.svg"
                          alt="explora"
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="card">
                        <div className="card-label">
                          <span className="text-lg font-bold text-grey">
                            Explora
                          </span>
                        </div>
                        <div className="card-text">
                          <span className="text-sm font-normal flex flex-col">
                            Listado de restaurantes basados en su localización.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-container flex items-center justify-start px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
                      <div className="card-logo">
                        <img
                          src="./entrega-y -recogida.svg"
                          alt="explora"
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="card">
                        <div className="card-label">
                          <span className="text-lg font-bold text-grey">
                            Entrega y Recogida
                          </span>
                        </div>
                        <div className="card-text">
                          <span className="text-sm font-normal flex flex-col">
                            Servicio de entrega a domicilio o recogida en
                            restaurante.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper flex flex-col justify-between items-start gap-12">
                    <div className="card-container flex items-center justify-start px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
                      <div className="card-logo">
                        <img
                          src="./seguimiento.svg"
                          alt="explora"
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="card">
                        <div className="card-label">
                          <span className="text-lg font-bold text-grey">
                            Seguimiento
                          </span>
                        </div>
                        <div className="card-text">
                          <span className="text-sm font-normal flex flex-col">
                            Sigue tu pedido en vivo, desde principio a fin.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-container flex items-center justify-start px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
                      <div className="card-logo">
                        <img
                          src="./pago-online.svg"
                          alt="Pago online"
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="card">
                        <div className="card-label">
                          <span className="text-lg font-bold text-grey">
                            Pago Online
                          </span>
                        </div>
                        <div className="card-text">
                          <span className="text-sm font-normal flex flex-col">
                            Puedes pagar OnLine con tarjeta de crédito.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form simple */}
        <div>
          <div className="simple-form-main-container py-12 flex flex-col items-center gap-12">
            <div className="form-content-container flex flex-col gap-2 items-center">
              <div className="form-heading px-4 py-2 border-b-dgreen border-b-2">
                <span className="text-3xl font-semibold text-grey">
                  Déjanos una consulta
                </span>
              </div>
              <div className="form-description">
                <span className="text-lg font-normal text-muted">
                  Por favor llena el siguiente formulario y te contactaremos lo
                  antes posible.
                </span>
              </div>
            </div>
            <div className="simple-form-container">
              <div className="form-container px-12 flex items-center">
                <div className="form-hero flex">
                  <img
                    src="./form-hero.png"
                    className="max-w-xl"
                    alt="form-hero"
                  />
                </div>
                <div className="simple-form flex-1">
                  <form action="submit">
                    <div className="fields-container flex flex-col justify-between gap-6">
                      <div className="fields flex gap-2 items-center">
                        <input
                          className="bg-dgreen w-full text-white text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                          placeholder="E-Mail"
                          type="email"
                          name="email"
                          id="email"
                        />
                        <input
                          className="bg-dgreen text-white text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                          placeholder="Telefono"
                          type="number"
                        />
                      </div>
                      <div className="fields">
                        <input
                          className="bg-dgreen text-white w-full text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                          placeholder="Nombres y apellidos"
                          type="text"
                          name="text"
                          id="text"
                        />
                      </div>
                      <div className="fields">
                        <textarea
                          rows="5"
                          className="bg-dgreen text-white text-md w-full resize-none font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                          placeholder="Envía un mensaje"
                          name="comment"
                          id="comment"
                        ></textarea>
                      </div>
                    </div>
                    <div className="button-container my-6">
                      <button
                        className="bg-highlight text-white text-lg font-bold rounded-lg outline-none w-full py-2"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div>
          <div className="footer-main-container px-8 pt-16 text-white">
            <div className="footer-wrapper bg-highlight px-6 pt-8 rounded-tl-xl rounded-tr-xl">
              <div className="footer-container flex justify-evenly items-center">
                <div className="footer-logo">
                  <img
                    src="./logo-alt.png"
                    alt="footer-logo"
                    className="w-16"
                  />
                </div>
                <div className="footer-links">
                  <div className="footer-label flex justify-center pb-3">
                    <span className="text-lg font-bold">Producto</span>
                  </div>
                  <div className="links flex flex-col justify-center items-center gap-1">
                    <a className="text-md" href="#">
                      Términos y Condiciones
                    </a>
                    <a className="text-md" href="#">
                      Politica de Privacidad
                    </a>
                  </div>
                </div>
                <div className="footer-links">
                  <div className="footer-label flex justify-center pb-3">
                    <span className="text-lg font-bold">Conecta</span>
                  </div>
                  <div className="links flex flex-col justify-center items-center gap-1">
                    <a className="text-md" href="#">
                      Preguntas Frecuentes
                    </a>
                    <a className="text-md" href="#">
                      Contacto
                    </a>
                  </div>
                </div>
                <div className="social-links flex justify-center items-center gap-8">
                  <a href="#">
                    <img
                      src="./facebook-square-brands.svg"
                      alt="facebook"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./instagram.svg"
                      alt="instagram"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
              <div className="copyright-container text-lg text-white py-8">
                <div className="copyright-text flex justify-center items-center">
                  <span className="font-normal">
                    © 2024 |&nbsp; 
                    <span className="text-dgreen font-bold">
                      Manjar2Go
                    </span>
                     &nbsp;| Todos los derechos reservados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
