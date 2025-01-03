import { Container } from "./container";
import ScrollAnimatedDiv from "./scroll-animated-div";

export const Features = () => {
  return (
    <Container id="features" triggerAnim={false}>
      <div>
        <div className="features-main-container py-8">
          <div className="feature-heading mb-8">
            <span className="text-3xl font-bold text-grey">
              ¿Cómo funciona la App?
            </span>
          </div>
          <div className="features-container flex justify-evenly items-start max-lg:flex-wrap">
            <div className="features-content-container flex-1 max-lg:w-full max-lg:pb-12">
              <div className="features-description lg:w-3/4">
                <span className="text-md font-normal text-grey">
                  M2GO podría convertirse en tu app favorita para pedir comida.
                  Nos dedicamos a ofrecer un servicio robusto, seguro y
                  eficiente, pensado tanto para empresas como para consumidores,
                  garantizando una experiencia fácil, rápida y de alta calidad.
                </span>
              </div>
              <div className="max-lg:flex max-md:flex-col max-md:items-start items-center">
                <div className="features-checklist lg:px-6 py-12 flex flex-col gap-4">
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
                <div className="download-options flex gap-[20px] m-0 md:max-lg:ml-auto mr-0 md:max-lg:mr-12">
                  <a href="https://apps.apple.com/us/app/manjar2go/id1529762329" target="_blank">
                    <img src="./app_store.png" alt="apple-store" className="h-full"/>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=zero.system.manjar2go.app">
                    <img src="./google_play.png" alt="google-play" className="h-full" />
                  </a>
                </div>
              </div>
            </div>
            <div className="features-card-main-container max-lg:w-full">
              <div className="features-card-container -mt-4 flex justify-between items-center gap-12">
                <div className="wrapper flex flex-col justify-between items-start gap-12">
                  <ScrollAnimatedDiv as="div" duration={2} className="card-container flex items-center justify-start lg:px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
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
                  </ScrollAnimatedDiv>
                  <ScrollAnimatedDiv as="div" duration={3} className="card-container flex items-center justify-start lg:px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
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
                  </ScrollAnimatedDiv>
                </div>
                <div className="wrapper flex flex-col justify-between items-start gap-12">
                  <ScrollAnimatedDiv duration={2.5} className="card-container flex items-center justify-start lg:px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
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
                  </ScrollAnimatedDiv>
                  <ScrollAnimatedDiv duration={3.5} className="card-container flex items-center justify-start lg:px-4 py-6 rounded-xl cards-shadow gap-3 w-72">
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
                  </ScrollAnimatedDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
