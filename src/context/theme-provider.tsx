import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "@/components/ui/sonner";
import { Web3Modal } from "./web3modal";
import Connection from "./connection";
import NetworkStatusProvider from "@/provider/NetworkStatusProvider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Web3Modal>
      <NetworkStatusProvider>
        <NextThemesProvider {...props}>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"></script>
          <Toaster />
          {children}
        </NextThemesProvider>
      </NetworkStatusProvider>
    </Web3Modal>
  );
}
