'use client'

import { Button } from '@/components/ui/button'

export default function DemoError() {
  const handleError = () => {
    throw new Error('Demo error - check console')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Error Boundary Demo</h2>
        <p className="max-w-md text-muted-foreground sm:text-lg">Click the button below to trigger an error and see the error boundary in action.</p>
        <div className="flex gap-2">
          <Button onClick={handleError} variant="destructive">
            Trigger Error
          </Button>
          <Button asChild>
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
