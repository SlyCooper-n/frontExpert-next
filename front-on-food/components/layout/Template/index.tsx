import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TemplateProps } from "./types";

export default function Template({ type, children }: TemplateProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-50">
      <Head>
        <meta charSet="utf-8" />
        <title>Front On Food</title>
        <meta
          name="description"
          content="Front On Food is not my creation. I made this with Daniel Castro to practise React and Next.js"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Header />
      <main className="mx-auto my-8 w-full max-w-7xl flex-1 px-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
