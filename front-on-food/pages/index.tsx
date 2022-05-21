import Template from "components/layout/Template";
import { DishCard, SearchField } from "@/modules";

export default function Home() {
  return (
    <Template type="home">
      <h2>Find delivery options next to you.</h2>

      <SearchField />

      <h2>
        Find your new favourite delivery. Thousands of options just a click
        away.
      </h2>

      <DishCard />
    </Template>
  );
}
