"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { THEMES, type ThemeName, getTheme, setTheme } from "../lib/theme-manager"

export function ThemeSelector() {
  const [open, setOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("aladdin")
  const [mounted, setMounted] = useState(false)
  const { theme: mode, setTheme: setMode } = useTheme()

  useEffect(() => {
    setMounted(true)
    const theme = getTheme()
    setCurrentTheme(theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  const handleThemeChange = (theme: ThemeName) => {
    setTheme(theme)
    setCurrentTheme(theme)
  }

  const toggleDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const current = THEMES[currentTheme]
  const isDark = mode === "dark"

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="gap-2"
          >
            <Palette className="size-4" />
            {current.label}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-56 p-2">
          <div className="space-y-1">
            {(Object.entries(THEMES) as Array<[ThemeName, typeof THEMES[ThemeName]]>).map(([key, theme]) => (
              <Button
                key={key}
                variant={currentTheme === key ? "default" : "ghost"}
                onClick={() => {
                  handleThemeChange(key)
                  setOpen(false)
                }}
                className="w-full justify-start flex-col items-start px-3 py-2 text-left h-auto"
                type="button"
              >
                <span className="font-semibold">{theme.label}</span>
                <span className="text-xs opacity-75">{theme.description}</span>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
