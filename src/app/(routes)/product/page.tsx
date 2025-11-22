"use client";
import Products from "@/components/product/product-page";
import ContactPage from "@/services/contact-page/contact-page";
import { usePathname } from "next/navigation";

const ProductPage = () => {
  const route = usePathname();

  return (
    <div>
      {route === "/product" && (
        <div className="mt-20">
          <Products />
          <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 -z-15 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-10 top-12 w-72 h-72 rounded-full blur-[120px] bg-linear-to-tr from-pink-500/30 via-yellow-300/10 to-transparent animate-float-slow opacity-90" />
            <div className="absolute right-8 bottom-8 w-96 h-96 rounded-full blur-[160px] bg-linear-to-br from-blue-500/25 via-indigo-600/10 to-transparent animate-float-reverse opacity-80" />
            <div className="absolute right-28 top-36 w-60 h-60 rounded-full blur-[90px] bg-linear-to-br from-purple-500/30 to-transparent animate-float opacity-90" />
          </div>
          <ContactPage />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
