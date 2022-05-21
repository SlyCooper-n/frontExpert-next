import { DishCard } from "../DishCard";

export function DishList() {
  return (
    <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
    </div>
  );
}
