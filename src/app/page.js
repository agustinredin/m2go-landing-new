import { Container } from "@/components/container";
import { Card } from "@/components/card";
import CardsData from "@/data/cards.json";
import { WhyUs } from "@/components/why-us";
import { FormSimple } from "@/components/form-simple";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Waves } from "@/components/waves";

export default function Home() {
  const appOptions = [
    {
      icon: "/entrega.svg",
      title: "Entrega",
      description: "Menos de 30 minutos",
    },
    {
      icon: "/variedad.svg",
      title: "Variedad",
      description: "Numerosos restaurantes",
    },
    {
      icon: "/oportunidad.svg",
      title: "Oportunidad",
      description: "Beneficios para tu local",
    },
  ];
  return (
    <div>
      {/* hero */}
      <Container id="hero" className="!my-0 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] place-content-center place-items-center mt-12">
          <div className="max-lg:w-full max-lg:mt-16 max-lg:flex max-lg:flex-col max-lg:gap-2 pb-16 lg:pb-32 flex-1">
            <p className="text-dgreen font-bold text-2xl">Manjar2go</p>
            <h2 className="text-5xl lg:text-7xl text-dgreen font-black">
              Tu comida favorita
            </h2>
            <h2 className="text-4xl lg:text-6xl mb-2 text-grey font-black">
              al alcance de tus manos
            </h2>
            <div className="my-2 lg:w-[60%]">
              <p className="text-muted text-lg">
                Manjar2Go es tu alternativa para ordenar la comida que te
                encanta desde la comodidad de tu hogar, trabajo o donde quiera
                que estés.
              </p>
              <div className="flex my-6 mr-8">
                <div className="flex-1 relative aspect-[4/1] max-h-[72px]">
                <a href="https://apps.apple.com/us/app/manjar2go/id1529762329" target='_blank'>
                  <img
                    className="h-[100%]"
                    alt="App Store"
                    src="/app_store.png"
                  ></img>
                </a>
                </div>
                <div className="flex-1 relative aspect-[4/1] max-h-[72px]">
                <a href="https://play.google.com/store/apps/details?id=zero.system.manjar2go.app" target="_blank">
                  <img
                    className="h-[100%]"
                    alt="Google Play"
                    src="/google_play.png"
                  ></img>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-lg:w-full hero-image-container h-full flex flex-col flex-1 justify-between">
            <div className="hero-image flex justify-center">
              <img
                src="/hero.png"
                alt="hero-image"
                className="lg:px-auto lg:h-[75vh]"
              />
            </div>
            <div className="max-lg:flex-col max-lg:text-black text-white option-main-container flex lg:items-center max-lg:mx-auto lg:justify-center gap-16 pt-12">
              {/* <div className="option-container flex items-center justify-center">
                <div className="option-logo">
                  <img
                    src="/entrega.svg"
                    alt="entrega"
                    className="w-16 h-16 mr-4 lg:mr-12 max-lg:border-2 max-lg:border-green max-lg:w-content max-lg:rounded-full"
                  />
                </div>
                <div className="option">
                  <div className="option-label">
                    <span className="text-xl font-bold">
                      Entrega
                    </span>
                  </div>
                  <div className="option-text">
                    <span className="text-md flex flex-col">
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
                    className="w-16 h-16 mr-4 lg:mr-12 max-lg:border-2 max-lg:border-green max-lg:w-content max-lg:rounded-full"
                  />
                </div>
                <div className="option">
                  <div className="option-label">
                    <span className="text-xl font-bold">
                      Variedad
                    </span>
                  </div>
                  <div className="option-text">
                    <span className="text-md">
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
                    className="w-16 h-16 mr-4 lg:mr-12 max-lg:border-2 max-lg:border-green max-lg:w-content max-lg:rounded-full"
                  />
                </div>
                <div className="option">
                  <div className="option-label">
                    <span className="text-xl font-bold">
                      Oportunidad
                    </span>
                  </div>
                  <div className="option-text">
                    <span className="text-md flex flex-col">
                      Beneficios para tu local
                    </span>
                  </div>
                </div>
              </div> */}
              {appOptions.map((option, index) => (
                <div
                  className="option-container grid grid-cols-[auto_1fr] items-center"
                  key={index}
                >
                  <div className="w-16 lg:w-20 flex-shrink-0">
                    <img
                      src={option.icon}
                      alt={option.title}
                      className="w-16 h-16 mr-4 lg:mr-12 max-lg:border-2 max-lg:border-green max-lg:w-content max-lg:rounded-full"
                    />
                  </div>
                  <div className="option flex flex-col min-w-0 max-lg:ml-12">
                    <div className="option-label">
                      <span className="text-xl font-bold">{option.title}</span>
                    </div>
                    <div className="option-text">
                      <span className="text-md">{option.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* waves */}
      <Waves />
      {/* stats */}
      <Stats />

      {/* whyus */}
      <WhyUs />
      {/* beneficios */}
      <Container id="beneficios">
        <div>
          <div className="card-main-wrapper py-16">
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
              <div className="cards-wrapper flex-wrap flex justify-center items-center gap-[5vw]">
                {CardsData.splice(0, 3).map((item, index) => {
                  return <Card key={index} data={item} />;
                })}
                <div className=" min-h-32 card unique-card h-[326px] flex flex-col justify-center items-center rounded-lg w-72 bg-cover">
                  <a href="/restaurantes" target="_blank">
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
      </Container>

      {/* features */}
      <Features />

      {/* form simple */}
      <FormSimple />
    </div>
  );
}
