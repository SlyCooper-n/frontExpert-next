import { DishCard } from "../DishCard";
import { api } from "@/services";
import { useQuery } from "react-query";
import { DishType } from "@/types";

export function DishList(props: { city: string }) {
  const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

  async function fetchDishes() {
    const res = await api.get<DishType[]>(`deliveries?city=${props.city}`);
    return res.data;
  }

  if (isFetching) {
    return (
      <div className="mx-auto flex aspect-square w-32 animate-spin items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-300">
        <div className="aspect-square w-4/5 rounded-full bg-white"></div>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((dish) => (
        <DishCard key={dish.id} {...dish} />
      ))}
    </div>
  );
}
