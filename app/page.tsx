"use client"

import { useEffect, useState } from "react"
import { ExternalLink, FileText, AlertCircle, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type RouteLink = {
  href: string
  label: string
  description: string
  icon: React.ElementType
}

const ROUTE_LINKS: RouteLink[] = [
  {
    href: "/demo/not-found",
    label: "404 Page",
    description: "Page not found example",
    icon: FileText,
  },
  {
    href: "/demo/error",
    label: "Error Boundary",
    description: "Error handling page",
    icon: AlertCircle,
  },
  {
    href: "/robots.txt",
    label: "Robots",
    description: "SEO robots.txt",
    icon: Zap,
  },
  {
    href: "/sitemap.xml",
    label: "Sitemap",
    description: "SEO sitemap.xml",
    icon: FileText,
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 px-6 py-10 sm:px-10">
      <Card className="border-primary/20">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="w-fit gap-2">
                <Zap className="size-4" /> Aladdin UI
              </Badge>
              <CardTitle className="mt-3 text-4xl sm:text-5xl">Theme Playground</CardTitle>
            </div>
            {mounted && <ThemeSelector />}
          </div>
          <CardDescription className="text-base sm:text-lg">
            Switch between Aladdin, Orange & Notebook themes, toggle light/dark mode, and explore the app structure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Explore Pages</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {ROUTE_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    <Card className="cursor-pointer transition-all hover:border-primary hover:shadow-md">
                      <CardContent className="space-y-2 p-4">
                        <div className="flex items-center gap-2">
                          <Icon className="size-4 text-primary" />
                          <span className="font-semibold text-sm">{link.label}</span>
                          <ExternalLink className="size-3 ml-auto text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
            {/* New Button to Components Page */}
            <Link href="/components">
              <Button className="mt-4">See Components Page</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Themes</CardTitle>
            <CardDescription>
              Choose between Aladdin, Orange, and Notebook themes. Each theme supports both light and dark modes.
            </CardDescription>
          </CardHeader>
          <CardFooter className="justify-between">
            {mounted && <ThemeSelector />}
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Tokens</CardTitle>
            <CardDescription>
              All shadcn components use the same design tokens defined in globals.css.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Zap className="size-5" />
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-semibold">Ring, foreground, background</p>
              <p className="text-muted-foreground">Stay consistent across modes.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
