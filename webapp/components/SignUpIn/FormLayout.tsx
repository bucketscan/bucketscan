import Link from "next/link";
import { ReactNode } from "react";

interface FormLayoutProps {
  title: string;
  children: ReactNode;
  linkText: string;
  linkHref: string;
}

export default function FormLayout({
  title,
  children,
  linkText,
  linkHref,
}: FormLayoutProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
        {children}
        <div className="text-center">
          <Link href={linkHref} className="text-blue-500">
            {linkText}
          </Link>
        </div>
      </form>
    </div>
  );
}
