import { Container } from "./container";

export const Waves = () => {
  return (
    <Container className="min-w-full !my-0 -top-32" id="waves">
      <div className="relative h-[8rem]">
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
    </Container>
  );
};
