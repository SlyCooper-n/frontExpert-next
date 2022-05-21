import Head from "next/head";

type HeadProps = {
  title?: string;
};

export function MyHead({ title }: HeadProps) {
  return (
    <Head>
      <title>{title ?? "Create Next App"}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
