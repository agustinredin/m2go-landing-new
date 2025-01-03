import { Card } from "@/components/card";
import { Container } from "@/components/container";
import Input from "@/components/input";
import ScrollAnimatedDiv from "@/components/scroll-animated-div";
import { Waves } from "@/components/waves";
import CardsData from "@/data/cards.json";

const steps = [
  {
    number: 1,
    title: "Comienzo",
    description:
      "El cliente selecciona tu negocio de la lista de negocios participantes.",
  },
  {
    number: 2,
    title: "Selección",
    description:
      "Escoge su producto favorito y realiza el pedido mediante la aplicación.",
  },
  {
    number: 3,
    title: "Recepción",
    description:
      "Tu negocio acepta y prepara la orden mientas el cliente espera.",
  },
  {
    number: 4,
    title: "Entrega",
    description:
      "Entregan el pedido a domicilio o el cliente lo recoge en tu negocio.",
  },
];

export default function Page() {
  return (
    <>
      <Container id="restaurantes-main" triggerAnim={false}>
        <div className="min-h-[50vh] text-grey">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[90vw] md:w-[75vw] mx-auto py-20">
            <div className="flex flex-col h-full">
              <h2 className="text-5xl md:text-6xl lg:text-[5vmax] leading-[0.9] tracking-tight font-black font-bold lg:w-[60%]">
                ¿Cómo funciona <span className="text-dgreen">M2Go</span> para tu
                restaurante?
              </h2>
            </div>
            <div className="flex flex-col w-full gap-[5em] mt-[12vh] lg:mt-0">
              {steps.map((step) => (
                <ScrollAnimatedDiv key={step.number} duration={0.45 * step.number}>
                  <div className="flex items-center">
                    <div className="w-32 lg:text-right">
                      <h1 className="text-9xl text-dgreen leading-[0.7] font-bold">
                        {step.number}
                      </h1>
                    </div>
                    <div className="h-full flex-1 ml-4">
                      <h3 className="text-3xl text-dgreen">{step.title}</h3>
                      <p className="text-xl text-left">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimatedDiv>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="card-main-wrapper lg:px-12 py-16">
            <div className="cards-content-container pb-12 max-lg:pt-24">
              <div className="cards-content-container flex flex-col gap-2 items-center">
                <div className="cards-heading px-4 py-4 border-b-green border-b-[3px] text-center">
                  <span className="text-3xl font-semibold text-grey">
                    Beneficios de <span className="text-green">M2GO</span> para
                    tu negocio
                  </span>
                </div>
              </div>
            </div>
            <div className="cards-container">
              <div className="cards-wrapper flex flex-wrap max-lg:justify-evenly justify-center items-center gap-16">
                {CardsData.map((item, index) => {
                  return <Card key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="min-w-full" id="restaurantes-form" triggerAnim={false}>
        <Waves />
        <div className="stats-container max-lg:bg-cover max-lg:bg-fixed  !py-4 flex flex-col section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
          <div className="lg:px-16 py-8 flex flex-col items-center">
            <h2 className="text-5xl mt-6 font-bold text-center">
              ¡M2Go hace lo mejor por ti y tu negocio!
            </h2>
            <div className="w-3/4 text-center max-lg:mt-12 mt-4 mb-12">
              <p className="text-xl">
                Queremos apoyarte en tu negocio, y ofrecerte un servicio de
                calidad, eficiencia y satisfacción. Conviértete en asociado y
                obtén los beneficios de trabajar con nosotros.
              </p>
            </div>
            <Container className="max-lg:px-0 my-4">
              <form className="space-y-6">
                <div className="flex flex-nowrap gap-4">
                  <Input
                    type="text"
                    id="negocio"
                    placeholder="Nombre del negocio"
                  />
                  <Input
                    type="text"
                    id="nombreapellido"
                    placeholder="Nombre y apellido"
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Input
                    type="text"
                    id="ubicacion"
                    placeholder="Ubicación"
                  />
                </div>
                <div className="flex w-full flex-nowrap gap-4">
                    <Input
                      type="number"
                      id="telefono"
                      placeholder="Teléfono"
                    />
                    <Input
                    type="email"
                    id="email"
                    placeholder="E-Mail"
                    />
                  </div>


                {/* Submit */}
                <div className="button-container my-6">
                    <button
                      className="bg-highlight text-white text-lg font-bold rounded-lg outline-none w-full py-2"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
              </form>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}
