import { Container } from "./container";
import Input from "./input";
import ScrollAnimatedDiv from "./scroll-animated-div";

export const FormSimple = () => {
  return (
    <Container className="min-w-full" id="form-simple" triggerAnim={false}>
      <div className="simple-form-main-container py-12 flex flex-col items-center gap-12">
        <div className="form-content-container flex flex-col gap-2 items-center">
          <div className="form-heading px-4 py-2 border-b-dgreen border-b-2">
            <span className="text-3xl font-semibold text-grey">
              Déjanos una consulta
            </span>
          </div>
          <div className="form-description">
            <span className="text-lg font-normal text-muted">
              Por favor llena el siguiente formulario y te contactaremos lo
              antes posible.
            </span>
          </div>
        </div>
        <div className="simple-form-container">
          <Container triggerAnim={false}>
            <div className="form-container max-lg:!p-0 flex items-center">
              <ScrollAnimatedDiv duration={1.75} className="form-hero flex flex-1">
                <img
                  src="./form-hero.png"
                  className="lg:max-w-xl"
                  alt="form-hero"
                />
              </ScrollAnimatedDiv>
              <ScrollAnimatedDiv duration={1.25} className="simple-form flex-1">
                <form className="space-y-6">
                  <div className="flex flex-nowrap gap-4">
                    <Input
                      type="email"
                      id="email"
                      label="E-Mail"
                      placeholder="Ingrese su E-Mail"
                    />
                    <Input
                      type="number"
                      id="telefono"
                      label="Teléfono"
                      placeholder="Ingrese su teléfono"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Input type="text" id="nombreapellido" placeholder="Ingrese nombre y apellido" label="Nombre y apellido" />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Input type="textarea" id="mensaje" placeholder="Envíe un mensaje" label="Mensaje" />
                  </div>
                  <div className="button-container my-6">
                    <button
                      className="bg-highlight text-white text-lg font-bold rounded-lg outline-none w-full py-2"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </ScrollAnimatedDiv>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};
