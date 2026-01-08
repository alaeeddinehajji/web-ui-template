export type ThemeName = "claude" | "maude"

const STORAGE_KEY = "aladdin-theme"

export const THEMES: Record<ThemeName, { label: string; description: string }> = {
  claude: {
    label: "Claude",
    description: "Modern, minimal theme",
  },
  maude: {
    label: "Maude",
    description: "Artistic, playful theme",
  },
}

export function getTheme(): ThemeName {
  if (typeof window === "undefined") return "claude"
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
  return stored && stored in THEMES ? stored : "claude"
}

export function setTheme(theme: ThemeName): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, theme)
  document.documentElement.setAttribute("data-theme", theme)
}

export function initTheme(): ThemeName {
  const theme = getTheme()
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme)
  }
  return theme
}
