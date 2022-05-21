import { IconHeart } from "@/icons";
import Image from "next/image";
import DishDetails from "./dishDetails";

export function DishCard() {
  return (
    <article>
      <div className="relative">
        <button className="absolute right-0 z-10 mx-2 my-3 rounded-xl bg-brand-50 p-2">
          <IconHeart className="w-5" />
        </button>

        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="test"
          width={592}
          height={312}
          className="rounded-3xl"
        />
      </div>

      <section className="my-4 flex justify-between">
        <h3 className="text-xl font-bold">Place name</h3>

        <span className="rounded-lg bg-indigo-200 px-2 py-1 font-semibold text-indigo-700">
          Taxes Delivery
        </span>
      </section>

      <section className="flex gap-4">
        <DishDetails type="review" main="(13)" secondary="4.5" />
        <DishDetails type="category" main="category" />
        <DishDetails type="delivery" main="15-20 min" />
      </section>
    </article>
  );
}
