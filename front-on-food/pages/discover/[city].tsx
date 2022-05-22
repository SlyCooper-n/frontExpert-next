import { DishList } from "@/modules";
import { api } from "@/services";
import { DiscoverProps, DishParams, DishRoutes } from "@/types";
import Template from "components/layout/Template";
import { useRouter } from "next/router";
import React from "react";

type City = "sao-paulo-sp" | "florianopolis-sc" | "porto-alegre-rs";

export default function Discover(props: DiscoverProps) {
  const { city } = props;

  console.log(city);
  // const router = useRouter();
  // let city: string;

  // switch (router.query.city as City) {
  //   case "sao-paulo-sp":
  //     city = "São Paulo, SP";
  //     break;

  //   case "florianopolis-sc":
  //     city = "Florianópolis, SC";
  //     break;

  //   case "porto-alegre-rs":
  //     city = "Porto Alegre, RS";
  //     break;
  // }

  return (
    <Template>
      <section className="font-semibold leading-6 text-brand-900 md:leading-8">
        <h2 className="mb-12 text-xl md:text-2xl md:font-bold">
          Options in your region of {city.name}
        </h2>

        <p className="mb-8 text-sm">We found {city.catalogEstimated} options</p>

        <DishList city={city.slug} />
      </section>
    </Template>
  );
}

export async function getStaticPaths() {
  const res = await api.get<DishRoutes[]>("/cities");
  const cities = res.data;

  const urls = cities.map((city) => ({
    params: { city: city.slug },
  }));

  return {
    paths: urls,
    fallback: false,
  };
}

export async function getStaticProps(context: DishParams) {
  const res = await api.get<DishRoutes>(
    `/cities?citySlug=${context.params.city}`
  );
  const city = res.data;

  return {
    props: {
      city,
    },
    revalidate: 60 * 60 * 24 * 30, // revalidate after a month
  };
}
