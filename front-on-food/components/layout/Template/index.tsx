import { Footer } from "./Footer";
import { MyHead } from "./Head";
import { Header } from "./Header";
import { TemplateProps } from "./types";

export default function Template({ title, children }: TemplateProps) {
  return (
    <div className="min-h-screen">
      <MyHead title={title} />

      <Header />
      <main className="mx-auto max-w-7xl px-2">{children}</main>
      <Footer />
    </div>
  );
}
