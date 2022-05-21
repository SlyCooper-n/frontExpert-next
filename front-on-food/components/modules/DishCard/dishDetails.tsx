import { IconCategory, IconDelivery, IconReviews } from "@/icons";
import { DishDetailsProps } from "./types";

export default function DishDetails({
  type,
  main,
  secondary,
}: DishDetailsProps) {
  let icon: JSX.Element;
  switch (type) {
    case "review":
      icon = <IconReviews className="fill-yellow-500" />;
      break;

    case "category":
      icon = <IconCategory className="fill-[#a3a3a4]" />;
      break;

    case "delivery":
      icon = <IconDelivery className="fill-[#a3a3a4]" />;
      break;
  }

  return (
    <div className="flex items-center">
      <div className="mr-2 w-4">{icon}</div>

      {secondary && <strong className="mr-1">{secondary}</strong>}

      <span className="w-fit text-gray-500">{main}</span>
    </div>
  );
}
