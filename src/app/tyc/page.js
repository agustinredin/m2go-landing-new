"use client";

import { Container } from "@/components/container";
import RawData from "@/data/terminos-condiciones.json";
import { useState, useEffect } from "react";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Container>
        <div className="flex flex-col space-y-4 mb-32">
          <h2 className="my-16 font-black text-center text-grey text-5xl">
            Términos y condiciones
          </h2>
          {RawData.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="text-4xl my-4 font-bold">
                  <span className="text-dgreen pr-5">{item.index + 1}</span> {item.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: item.description }} className="mb-4"></p>
              </div>
            );
          })}
        </div>
      </Container>
    )
  );
}
