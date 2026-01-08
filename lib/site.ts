import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  title: "Aladdin UI | Theme Playground",
  description: "Toggle light, dark, or system themes with shadcn UI",
}

export const themeProviderProps = {
  attribute: "class" as const,
  defaultTheme: "system" as const,
  enableSystem: true,
  disableTransitionOnChange: true,
}
