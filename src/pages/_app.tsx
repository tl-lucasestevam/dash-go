import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import { SidebarDrawerProvider } from "../hooks";
import { makeServer, queryClient } from "../services";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const isDevelopment = process.env.NODE_ENV === "development";

makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      {isDevelopment && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
