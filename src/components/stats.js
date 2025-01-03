import { Container } from "./container";
import ScrollAnimatedDiv from "./scroll-animated-div";

export const Stats = () => {
  return (
    <Container className="min-w-full !my-0" id="stats" triggerAnim={false}>
      <div className="stats-container max-lg:bg-cover max-lg:bg-fixed flex justify-evenly items-center section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
        <ScrollAnimatedDiv duration={1.25} className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">150+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Restaurantes</span>
          </div>
        </ScrollAnimatedDiv>
        <ScrollAnimatedDiv duration={1.75} className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">3000+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Clientes</span>
          </div>
        </ScrollAnimatedDiv>
        <ScrollAnimatedDiv duration={2.25} className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">9000+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Pedidos</span>
          </div>
        </ScrollAnimatedDiv>
        <ScrollAnimatedDiv duration={2.75} className="stats flex flex-col items-center gap-4">
          <div className="stats-count">
            <span className="text-5xl font-bold">1900+</span>
          </div>
          <div className="stats-label">
            <span className="text-xl font-medium">Productos</span>
          </div>
        </ScrollAnimatedDiv>
      </div>
    </Container>
  );
};
