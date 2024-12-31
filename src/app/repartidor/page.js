import { Container } from "@/components/container";
import Input from "@/components/input";
import Select from "@/components/select";
import { Waves } from "@/components/waves";
import { Car, Clock12, HandCoins, ShieldHalf } from "lucide-react";

export default function Page() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_auto]">
          <div className="flex flex-col w-full px-16 py-4">
            <h4 className="text-3xl text-grey font-black my-6">
              ¿Te gustaría ser parte de nuestro equipo?
            </h4>
            <span className="w-3/4">
              Buscamos personas para realizar recogidas y entregas de pedidos en
              los negocios participantes. Te brindamos calidad, eficiencia y
              satisfacción en tu trabajo. ¡Súmate a nuestro equipo y descubre lo
              que tenemos para ti y tu carrera!
            </span>
            <div className="features-card-container -mt-4 flex items-center gap-12">
              <div className="wrapper flex flex-col items-start pt-4">
                <div className="card-container flex items-center justify-start px-2 py-4 rounded-xl gap-4 my-2 w-72">
                  <div className="card-logo">
                    <HandCoins className="w-12 h-12 p-2 rounded-full bg-dgreen text-white" />
                  </div>
                  <div className="card">
                    <div className="card-label">
                      <span className="text-lg font-bold text-grey">
                        Bonificación
                      </span>
                    </div>
                    <div className="card-text">
                      <span className="text-sm font-normal flex flex-col">
                        Comisión por delivery y 100% de las propinas.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-container flex items-center justify-start px-2 py-4 rounded-xl gap-4 my-2 w-72">
                  <div className="card-logo">
                    <Clock12 className="w-12 h-12 p-2 rounded-full bg-dgreen text-white" />
                  </div>
                  <div className="card">
                    <div className="card-label">
                      <span className="text-lg font-bold text-grey">
                        Libertad
                      </span>
                    </div>
                    <div className="card-text">
                      <span className="text-sm font-normal flex flex-col">
                        Puedes trabajar en tu tiempo libre.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper flex flex-col items-start pt-4">
                <div className="card-container flex items-center justify-start px-2 py-4 rounded-xl gap-4 my-2 w-72">
                  <div className="card-logo">
                    <Car className="w-12 h-12 p-2 rounded-full bg-dgreen text-white" />
                  </div>
                  <div className="card">
                    <div className="card-label">
                      <span className="text-lg font-bold text-grey">
                        Movilidad
                      </span>
                    </div>
                    <div className="card-text">
                      <span className="text-sm font-normal flex flex-col">
                        Necesitarás vehículo u movilidad propia.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-container flex items-center justify-start px-2 py-4 rounded-xl gap-4 my-2 w-72">
                  <div className="card-logo">
                    <ShieldHalf className="w-12 h-12 p-2 rounded-full bg-dgreen text-white" />
                  </div>
                  <div className="card">
                    <div className="card-label">
                      <span className="text-lg font-bold text-grey">
                        Seguro
                      </span>
                    </div>
                    <div className="card-text">
                      <span className="text-sm font-normal flex flex-col">
                        Debes tener seguro de tu vehículo (Auto, motora).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-12">
            <img
              alt="Repartidor de M2Go"
              className="h-[30vmax] w-full rounded-xl object-scale-down"
              src="./repartidor-1.png"
            ></img>
          </div>
        </div>
      </Container>
      <Container className="min-w-full" id="repartidor-form">
        <Waves />
        <div className="stats-container !py-4 flex flex-col section-box-shadow rounded-t-[3rem] -top-10 relative text-white">
          <div className="px-16 py-8 flex flex-col items-center">
            <h2 className="text-5xl mt-6 font-bold">
              ¡Únete a M2Go y disfruta de los mejores beneficios como
              repartidor!
            </h2>
            <div className="w-3/4 text-center mt-4 mb-12">
              <p className="text-xl">
                Te brindamos calidad, eficiencia y satisfacción en tu trabajo.
                ¡Súmate a nuestro equipo y descubre lo que tenemos para ti y tu
                carrera!
              </p>
            </div>
            <Container className="my-4">
              <form className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Input
                    type="text"
                    id="nombreapellido"
                    placeholder="Ingrese nombre y apellido"
                    label="Nombre y Apellido"
                  />
                </div>
                <div className="flex flex-nowrap gap-4">
                  <Input type="number" id="telefono" placeholder="Ingrese su teléfono" label="Teléfono" />
                  <Input type="email" id="email" placeholder="Ingrese su E-mail" label="E-Mail" />
                </div>
                <div className="flex w-full flex-nowrap gap-4">
                  <Input
                    type="text"
                    id="ss"
                    label="Seguro social para 480 (Requerido)"
                    placeholder="Ingrese su Seguro Social"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Select id="dispositivo" label="Dispositivo">
                    <option value="ios">iPhone</option>
                    <option value="and">Android</option>
                  </Select>
                  <Input
                    type="text"
                    id="direccion"
                    label="Dirección Postal"
                    placeholder="Ingrese su dirección postal"
                    required
                  />
                </div>
                <div className="flex flex-nowrap gap-4">
                  <Input type="text" id="banco" label="Banco" placeholder="Ingrese su banco" required />
                  <Input
                    type="number"
                    id="ruta"
                    label="Número de Ruta"
                    placeholder="Ingrese su número de Ruta"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Input
                    type="file"
                    id="licencia"
                    label="Licencia de conducir"
                    required
                  />
                </div>
                <div className="flex flex-nowrap gap-4">
                    <Select
                    id="tipovehiculo"
                    label="Tipo de vehículo">
                    <option value="auto">Auto</option>
                    <option value="moto">Motocicleta</option>
                    <option value="bici">Bicicleta</option>
                    </Select>
                  <Input
                    type="file"
                    id="segurovehiculo"
                    label="Seguro del vehículo"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                <Input
                    type="file"
                    id="antecedentes"
                    label="Certificado de antecedentes penales"
                    required
                  />
                </div>
                {/* Submit */}
                <div className="button-container py-8">
                  <button
                    className="bg-highlight text-white text-lg font-bold rounded-lg outline-none w-full py-2"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}