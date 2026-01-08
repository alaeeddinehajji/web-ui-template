import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata, themeProviderProps } from "@/lib/site";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider {...themeProviderProps}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
