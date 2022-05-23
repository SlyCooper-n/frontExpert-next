import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "context";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
