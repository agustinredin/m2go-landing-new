import { Container } from "@/components/container";
import { Card } from "@/components/card";
import CardsData from '@/data/cards.json'
import { WhyUs } from "@/components/why-us";
import { FormSimple } from "@/components/form-simple";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Waves } from "@/components/waves";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <Container id="hero" className="!my-0 pt-16">
        <div className="flex items-end mt-12">
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
                Manjar2Go es tu alternativa para ordenar la comida que te
                encanta desde la comodidad de tu hogar, trabajo o donde quiera
                que estés.
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
                    <span className="text-xl font-bold text-white">
                      Entrega
                    </span>
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
                    <span className="text-xl font-bold text-white">
                      Variedad
                    </span>
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
      </Container>

      {/* waves */}
      <Waves/>  
      {/* stats */}
      <Stats/>

      {/* whyus */}
      <WhyUs/>
      {/* beneficios */}
      <Container id="beneficios">
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
                {
                  CardsData.splice(0, 3).map((item, index) => {
                    return (
                      <Card key={index} data={item} />
                    )
                  })
                }
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
      </Container>

      {/* features */}
      <Features/>

      {/* form simple */}
      <FormSimple/>
    </div>
  );
}
