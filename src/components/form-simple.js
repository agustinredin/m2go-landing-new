import { Container } from "./container";

export const FormSimple = () => {
  return (
    <Container className="min-w-full" id="form-simple">
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
          <Container>
            <div className="form-container flex items-center">
              <div className="form-hero flex">
                <img
                  src="./form-hero.png"
                  className="max-w-xl"
                  alt="form-hero"
                />
              </div>
              <div className="simple-form flex-1">
                <form action="submit">
                  <div className="fields-container flex flex-col justify-between gap-6">
                    <div className="fields flex gap-2 items-center">
                      <input
                        className="bg-dgreen w-full text-white text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                        placeholder="E-Mail"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <input
                        className="bg-dgreen text-white text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                        placeholder="Telefono"
                        type="number"
                      />
                    </div>
                    <div className="fields">
                      <input
                        className="bg-dgreen text-white w-full text-md font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                        placeholder="Nombres y apellidos"
                        type="text"
                        name="text"
                        id="text"
                      />
                    </div>
                    <div className="fields">
                      <textarea
                        rows="5"
                        className="bg-dgreen text-white text-md w-full resize-none font-normal shadow-lg border-white rounded-lg outline-none px-2 py-2 placeholder-white placeholder:text-md decoration-white"
                        placeholder="Envía un mensaje"
                        name="comment"
                        id="comment"
                      ></textarea>
                    </div>
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
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};
