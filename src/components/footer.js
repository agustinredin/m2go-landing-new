import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="min-w-full text-center my-0" id="footer">
        <div className="footer-main-container px-8 text-white">
        <div className="footer-wrapper bg-highlight px-6 pt-8 rounded-tl-xl rounded-tr-xl">
            <div className="footer-container flex justify-evenly items-center">
            <div className="footer-logo">
                <img src="./logo-alt.png" alt="footer-logo" className="w-16" />
            </div>
            <div className="footer-links">
                <div className="footer-label flex justify-center pb-3">
                <span className="text-lg font-bold">Producto</span>
                </div>
                <div className="links flex flex-col justify-center items-center gap-1">
                <a className="text-md" href="/tyc">
                    Términos y Condiciones
                </a>
                <a className="text-md" href="/privacidad">
                    Politica de Privacidad
                </a>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-label flex justify-center pb-3">
                <span className="text-lg font-bold">Conecta</span>
                </div>
                <div className="links flex flex-col justify-center items-center gap-1">
                <a className="text-md" href="/faq">
                    Preguntas Frecuentes
                </a>
                <a className="text-md" href="/contacto">
                    Contacto
                </a>
                </div>
            </div>
            <div className="social-links flex justify-center items-center gap-8">
                <a href="#">
                <img
                    src="./facebook-square-brands.svg"
                    alt="facebook"
                    className="w-8 h-8"
                />
                </a>
                <a href="#">
                <img src="./instagram.svg" alt="instagram" className="w-8 h-8" />
                </a>
            </div>
            </div>
            <div className="copyright-container text-lg text-white py-8">
            <div className="copyright-text flex justify-center items-center">
                <span className="font-normal">
                © 2024 |&nbsp;
                <span className="text-dgreen font-bold">Manjar2Go</span>
                &nbsp;| Todos los derechos reservados
                </span>
            </div>
            </div>
        </div>
        </div>
    </Container>
  );
};
