import { FormSimple } from "@/components/form-simple";
import ScrollAnimatedDiv from "@/components/scroll-animated-div";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Waves } from "@/components/waves";
import { WhyUs } from "@/components/why-us";
import Link from "next/link";

const faqs = [
  {
    question: "¿Qué es M2Go?",
    answer:
      "Es una plataforma para la compra y entrega de comida. Nunca ha sido más fácil y rápido tener tu plato favorito.",
  },
  {
    question: "¿Dónde está disponible M2Go?",
    answer:
      "Revisa la aplicación y encontrarás los restaurantes cercanos a tu localidad. También puedes visualizar en el mapa toda la cobertura de M2Go.",
  },
  {
    question: "¿Cómo utilizo M2Go?",
    answer:
      '<ol class="list-decimal"><li>Accede la aplicación e indica la dirección de entrega.</li><li>Elige, de la lista, el restaurante de tu preferencia Revisa el menú.</li> <li>Haz tu pedido y paga en línea.</li> <li>Realiza el seguimiento de tu orden.</li> <li>Veras cuando el restaurante acepta y empieza a preparar tu comida.</li> <li>Además, podrás ver la información del repartidor, una vez sea asignado.</li></ol>',
  },
  {
    question: "¿Cuánto cuesta M2Go?",
    answer:
      "Registrarte como cliente de M2Go es gratis. El costo por comida varía según los restaurantes participantes.",
  },
  {
    question: "¿Dónde entrega el repartidor?",
    answer:
      "Entregará el pedido en la puerta, a la dirección que hayas ingresado en la plataforma.",
  },
];

export default function Page() {
  return (
    <section>
      <div className="px-8 lg:px-16 text-grey my-16 lg:my-32 mx-auto py-16 custom-shadow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] place-content-center place-items-center">
          <div className="flex h-full">
            <div className="max-lg:hidden bg-green w-4 mr-4 my-16"></div>
            <div className="flex flex-col items-start justify-center">
              <ScrollAnimatedDiv duration={1} className="flex items-start">
                <h3 className="inline-flex text-[5vmax] ml-auto mr-2 text-nowrap whitespace-nowrap leading-[0.9] tracking-tight font-black">
                  Donde la <br /> no llega
                </h3>
                <h2 className="inline-flex text-green text-[12vmax] w-auto leading-[0.75em] font-black">
                  U
                </h2>
              </ScrollAnimatedDiv>
              <p className="max-w-full mt-6 text-xl text-muted">
                Somos M2Go, una empresa que conecta restaurantes y lugares de
                comida cerca de ti, ofreciendo alternativas para ordenar online
                de forma rápida, eficiente y segura.
              </p>
              <p className="max-w-full mt-6 text-xl text-muted">
                Gracias a nuestra visión y amor por la Isla del Encanto,
                decidimos emprender e iniciar nuestro trabajo aquí. Somos su
                conexión con los restaurantes y lugares de comida cerca de ti.
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              alt="Manjar phone 2"
              src="/whyus_1.png"
              className="rounded-3xl max-lg:my-24 max-lg:mx-auto max-lg:w-full lg:translate-x-44 lg:overflow-hidden"
            ></img>
          </div>
        </div>
      </div>
      {/* <div className="relative h-24">
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
      </div> */}
      <Waves/>
      <div className="bg-[#3d9a20] section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
        <div className="px-16 py-8 flex flex-col items-center justify-center">
          <ScrollAnimatedDiv as="h2" duration={1} className="text-5xl mt-6 font-bold text-center">En M2Go, tenemos un compromiso contigo</ScrollAnimatedDiv>
          <ScrollAnimatedDiv as="p" duration={1.25} className="text-xl mt-6 lg:mt-2 mb-24 lg:mb-12 text-center">
            Este es brindarte un servicio de calidad, porque en M2Go hacemos lo
            mejor por ti.
          </ScrollAnimatedDiv>
          <ScrollAnimatedDiv duration={1.5} className="flex items-center justify-center w-full pb-20">
            <div className="hidden lg:block flex-1 border-t-2 border-white ml-8"></div>
            <div className="lg:mx-32">
              <img src="logo.png" alt="Logo" className="flex-1 h-12 invert" />
            </div>
            <div className="hidden lg:block flex-1 border-t-2 border-white mr-8"></div>
          </ScrollAnimatedDiv>
        </div>
      </div>
      <WhyUs/>
      <div className="bg-white rounded-t-[3rem] h-content  relative">
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
            <h2 className="text-5xl font-bold text-gray-900 text-center mt-10">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full my-8">
              {faqs.map((faq, index) => (
                <ScrollAnimatedDiv duration={(index + 1) * 0.4} key={`item-${index}`}>
                  <AccordionItem value={`item-${index}`} className="my-4">
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-muted text-lg mx-6" dangerouslySetInnerHTML={{__html: faq.answer}}></div>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimatedDiv>
              ))}
            </Accordion>
            <h4 className="my-8 text-muted">
              ¿Tienes alguna pregunta que no se encuentra aquí? <Link href='/contacto' className="text-blue-500 hover:text-blue-700">Escríbenos</Link>.
            </h4>
          </div>
        </section>
      </div>
      <FormSimple/>
    </section>
  );
}
