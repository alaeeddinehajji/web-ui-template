"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { THEMES, type ThemeName, getTheme, setTheme } from "@/lib/theme-manager"

export function ThemeSelector() {
  const [open, setOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("claude")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = getTheme()
    setCurrentTheme(theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  const handleThemeChange = (theme: ThemeName) => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("aladdin-theme", theme)
    setCurrentTheme(theme)
    setOpen(false)
  }

  if (!mounted) return null

  const current = THEMES[currentTheme]

  return (
    <div className="relative inline-block">
      <Button
        onClick={() => setOpen(!open)}
        variant="outline"
        className="gap-2"
      >
        <Palette className="size-4" />
        {current.label}
        <ChevronDown className="size-4" />
      </Button>

      {open && (
        <Card className="absolute right-0 top-full z-50 mt-2 w-56 shadow-lg">
          <CardContent className="p-2">
            <div className="space-y-1">
              {(Object.entries(THEMES) as Array<[ThemeName, typeof THEMES[ThemeName]]>).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleThemeChange(key)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    currentTheme === key
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <div className="font-semibold">{theme.label}</div>
                  <div className="text-xs opacity-75">{theme.description}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
