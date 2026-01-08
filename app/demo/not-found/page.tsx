export default function DemoNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">This is a 404 Demo</h2>
        <p className="max-w-md text-muted-foreground sm:text-lg">Visit a non-existent route to see the real 404 page.</p>
        <a href="/" className="text-primary hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  )
}
