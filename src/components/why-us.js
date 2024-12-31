import { Container } from "./container"

export const WhyUs = () => {
    return (
              <Container id="why-us">
                <div className="my-32">
                  <div className="grid grid-cols-2 place-content-center justify-items-center gap-[80px]">
                    <div className="why-us-hero">
                      <img src="/why-us.png" alt="why-us" />
                    </div>
                    <div className="">
                      <div className="heading">
                        <span className="text-5xl font-bold text-dgreen flex flex-col leading-normal mb-8">
                          Atendiendo
                          <span className="text-5xl font-bold text-grey -mt-1">
                            tus necesidades
                          </span>
                        </span>
                      </div>
                      <div className="mt-4 mb-8 w-[80%]">
                        <span className="text-xl font-normal text-muted">
                          En M2GO hemos desarrollado esta plataforma para agilizar sus
                          solicitudes. Sabemos lo que deseas y comprendemos tus
                          necesidades. Por ello, nos enfocamos en satisfacer cada una de
                          las exigencias al asociarnos con restaurantes de reconocida
                          trayectoria cerca de ti.
                        </span>
                      </div>
                      <div className="why-us-footer flex items-center gap-18">
                        <div className="wrapper">
                          <div className="testmonio flex items-center gap-4 mb-[15px]">
                            <div className="bar">
                              <img
                                src="/signature-bar.svg"
                                alt="signature-bar"
                                className="h-12"
                              />
                            </div>
                            <div className="ceo -mt-1 text-muted">
                              <span className="text-lg font-normal italic">
                                Testimonio del CEO
                              </span>
                            </div>
                          </div>
                          <div className="signature">
                            <img
                              src="/signature.svg"
                              alt="signature"
                              className="w-24 h-24"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
    )
}