import { DishCard, DishList } from "@/modules";
import Template from "components/layout/Template";
import { useRouter } from "next/router";
import React from "react";

type City = "sao-paulo-sp" | "florianopolis-sc" | "porto-alegre-rs";

export default function Discover() {
  const router = useRouter();
  // const city = router.query.city as City;
  let city: string;

  switch (router.query.city as City) {
    case "sao-paulo-sp":
      city = "São Paulo, SP";
      break;

    case "florianopolis-sc":
      city = "Florianópolis, SC";
      break;

    case "porto-alegre-rs":
      city = "Porto Alegre, RS";
      break;
  }

  return (
    <Template>
      <section className="font-semibold leading-6 text-brand-900 md:leading-8">
        <h2 className="mb-12 text-center text-xl md:text-2xl md:font-bold">
          Options in your region of {city}
        </h2>

        <p className="mb-8 text-sm">We found x options</p>

        <DishList />
      </section>
    </Template>
  );
}
