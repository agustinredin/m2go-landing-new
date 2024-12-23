import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <div className="px-32 text-grey my-8 mx-auto py-16 custom-shadow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] place-content-center place-items-center">
          <div className="flex h-full">
            <div className="bg-green w-4 mr-4 my-16"></div>
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-start">
                <h3 className="inline-flex text-[5vmax] ml-auto mr-2 text-nowrap whitespace-nowrap leading-[0.9] tracking-tight font-black">
                  Donde la <br /> no llega
                </h3>
                <h2 className="inline-flex text-green text-[12vmax] w-auto leading-[0.75em] font-black">
                  U
                </h2>
              </div>
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
          <div>
            <img
              alt="Manjar phone 2"
              src="/whyus_1.png"
              className="rounded-3xl translate-x-44 overflow-hidden"
            ></img>
          </div>
        </div>
      </div>
      <div className="relative h-[24rem]">
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
      <div className="bg-[#3d9a20] section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
        <div className="px-16 py-8 flex flex-col items-center justify-center">
          <h2 className="text-5xl mt-6 font-bold">En M2Go, tenemos un compromiso contigo</h2>
          <p className="text-xl mt-2 mb-12">
            Este es brindarte un servicio de calidad, porque en M2Go hacemos lo
            mejor por ti.
          </p>
          <div className="flex items-center justify-center w-full pb-20">
            <div className="flex-1 border-t-2 border-white ml-8"></div>
            <div className="mx-32 w-auto">
              <img src="logo.png" alt="Logo" className="flex-1 h-12 invert" />
            </div>
            <div className="flex-1 border-t-2 border-white mr-8"></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-[3rem] -top-24 h-64 relative">
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
            <h2 className="text-5xl font-bold text-gray-900 text-center mt-10">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full my-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`} className="my-4">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted text-lg mx-6" dangerouslySetInnerHTML={{__html: faq.answer}}></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <h4 className="my-8 text-muted">
              ¿Tienes alguna pregunta que no se encuentra aquí? <Link href='/contacto' className="text-blue-500 hover:text-blue-700">Escríbenos</Link>.
            </h4>
          </div>
        </section>
      </div>
    </section>
  );
}
