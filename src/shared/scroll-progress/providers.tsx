"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
