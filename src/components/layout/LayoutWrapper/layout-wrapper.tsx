"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar/main-navbar";
import Footer from "../Footer/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hiddenRoutes = ["/auth", "/registration", "/dashboard"];

  const isHidden = hiddenRoutes.some((route) => pathname.startsWith(route));

  return (
    <div className="flex flex-col min-h-screen">
      {!isHidden && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  );
}
