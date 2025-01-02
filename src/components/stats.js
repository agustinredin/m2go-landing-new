import { Container } from "./container";

export const Stats = () => {
  return (
    <Container className="min-w-full !my-0" id="stats">
      <div className="stats-container max-lg:bg-cover max-lg:bg-fixed flex justify-evenly items-center section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
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
    </Container>
  );
};
