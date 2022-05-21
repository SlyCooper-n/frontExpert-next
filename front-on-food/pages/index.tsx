import Template from "components/layout/Template";
import { SearchField } from "@/modules";

export default function Home() {
  return (
    <Template type="home">
      <h2 className="mb-12 text-center text-xl font-semibold leading-6 text-brand-900 md:text-2xl md:font-bold md:leading-8">
        Find delivery options next to you.
      </h2>

      <SearchField />

      <h2 className="mt-12 text-center text-lg font-semibold leading-6 text-brand-900 md:text-xl md:leading-8">
        Find your new favourite delivery. Thousands of options just a click
        away.
      </h2>
    </Template>
  );
}
