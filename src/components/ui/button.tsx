import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary:
    "bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-lg shadow-[#25D366]/25",
  outline:
    "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export function Button({
  variant = "primary",
  href = "#",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
