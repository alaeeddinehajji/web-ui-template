'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Something went wrong!</h2>
        <p className="max-w-md text-muted-foreground sm:text-lg">An error occurred while rendering this page.</p>
        <div className="flex gap-2">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="link" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
