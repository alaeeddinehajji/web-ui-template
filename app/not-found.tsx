import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Not Found</h2>
        <p className="max-w-md text-muted-foreground sm:text-lg">This page could not be found.</p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  )
}
