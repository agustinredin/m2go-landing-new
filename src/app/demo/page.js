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

export default function Demo() {
  return (
    <section>
      <div className="lg:px-32 text-grey my-8 mx-auto py-16 custom-shadow overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="max-lg:py-12 text-center">
            <h2 className="text-4xl lg:text-7xl font-black tracking-tight">
              Ordena con facilidad en <span className="text-green">M2Go</span>
            </h2>
            <p className="max-lg:py-4 my-4 text-2xl">
              Tu comida favorita al alcance de tus manos.
            </p>
          </div>
          <div className="max-lg:invisible relative w-full max-w-[1200px] mx-auto p-6 bg-grey rounded-lg border-4 border-muted shadow-lg">
            {/* Top bar of the MacBook */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-700 rounded-full"></div>

            {/* Screen area */}
            <div className="lg:relative lg:w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/418242555?h=bc6da5fd3c"
                className="max-lg:!visible max-lg:!w-[100vw] absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vimeo Video"
              ></iframe>
            </div>

            {/* Bottom bezel */}
            <div className="mt-4 h-6 bg-muted rounded-b-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-t-[3rem] -top-24 h-content relative">
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
            <h2 className="text-5xl font-bold text-gray-900 text-center mt-10">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full my-8">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="my-4"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-muted text-lg mx-6"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <h4 className="my-8 text-muted">
              ¿Tienes alguna pregunta que no se encuentra aquí?{" "}
              <Link
                href="/contacto"
                className="text-blue-500 hover:text-blue-700"
              >
                Escríbenos
              </Link>
              .
            </h4>
          </div>
        </section>
      </div>
    </section>
  );
}
