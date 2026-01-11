"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ComponentCard({ id, title, description, location, children, className }: { id: string; title: string; description: string; location?: string; children: React.ReactNode; className?: string }) {
  return (
    <div id={id} className={cn("mb-8", className)}>
      <div className="mb-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}{location ? ` Location: ${location}` : ""}</p>
      </div>
      <Card className="p-4 bg-card text-card-foreground border-border overflow-visible relative isolate">
        <div className="flex flex-wrap gap-3 items-center">{children}</div>
      </Card>
    </div>
  );
}
