import { IconHeart } from "@/icons";
import { DishType } from "@/types";
import Image from "next/image";
import DishDetails from "./dishDetails";

export function DishCard(props: DishType) {
  return (
    <article>
      <div className="relative">
        <button className="absolute right-0 z-10 mx-2 my-3 rounded-xl bg-brand-50 p-2">
          <IconHeart className="w-5" />
        </button>

        <Image
          src={props.picture}
          alt={props.name}
          width={592}
          height={312}
          className="rounded-3xl"
          priority
        />
      </div>

      <section className="my-4 flex justify-between">
        <h3 className="text-xl font-bold">{props.name}</h3>

        <span className="rounded-lg bg-indigo-200 px-2 py-1 font-semibold text-indigo-700">
          {props.tags[0].name}
        </span>
      </section>

      <section className="flex gap-4">
        <DishDetails
          type="review"
          main={props.reviews}
          secondary={props.rate}
        />
        <DishDetails type="category" main={props.category} />
        <DishDetails type="delivery" main={props.deliveryEstimate} />
      </section>
    </article>
  );
}
