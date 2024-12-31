import { Container } from "@/components/container";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { ScrollDownArrow } from "@/components/ui/scroll-down";
import { Waves } from "@/components/waves";

const Caracteristicas = () => (
  <>
    <Container>
      <div className="px-20 mx-auto my-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="relative"></div>
          <h2 className="text-8xl font-black text-grey mb-4 leading-[0.92] tracking-tight z-50">
            Resuelve tus comidas sencillamente
          </h2>
          <div className="flex h-full">
            <div className="bg-green w-2 mr-6"></div>
            <p className="text-xl text-grey w-3/4">
              Hemos desarrollado esta plataforma para agilizar sus solicitudes.
              Hay muchos beneficios y te vamos a mostrar algunos de ellos:
            </p>
          </div>
          <ScrollDownArrow targetId="features" className="mt-8 ml-8 bg-green" />
        </div>
        <div className="flex justify-center items-end relative min-h-[32rem] w-full">
          <img
            className="h-[32rem] -z-10"
            alt="M2Go Ejemplo de menú en APP"
            src="/caracteristicas_1.png"
          />
        </div>
      </div>
    </Container>
    <Waves />
    <Stats />
    <Features />
  </>
);

export default Caracteristicas;
