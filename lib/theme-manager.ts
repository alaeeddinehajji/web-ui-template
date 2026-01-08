export type ThemeName = "aladdin" | "orange" | "notebook"

const STORAGE_KEY = "aladdin-theme"

export const THEMES: Record<ThemeName, { label: string; description: string }> = {
  aladdin: {
    label: "Aladdin",
    description: "Classic corporate theme",
  },
  orange: {
    label: "Orange",
    description: "Modern, minimal theme",
  },
  notebook: {
    label: "Notebook",
    description: "Artistic, playful theme",
  },
}

export function getTheme(): ThemeName {
  if (typeof window === "undefined") return "aladdin"
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
  return stored && stored in THEMES ? stored : "aladdin"
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
