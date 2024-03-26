import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import MaxContainer from "@/components/shared/MaxContainer";
import Sidebar from "@/components/shared/Sidebar";
import Recommended from "@/components/shared/Recommended";
import { ThemeProvider } from "@/context/theme-provider";
import { site_config } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: site_config.name,
  description: site_config.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <MaxContainer className="flex flex-1 min-h-screen">
            <Sidebar />

            <main className="max-w-full xl:max-w-[598px] w-full border-0 sm:border-l md:border-x">
              {children}
            </main>
            <Recommended />
          </MaxContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
