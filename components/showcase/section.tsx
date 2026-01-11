"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({ id, title, children, className }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("mb-12 overflow-visible", className)}>
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
