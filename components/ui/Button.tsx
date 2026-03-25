import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-orange text-white hover:bg-orange-light shadow-lg hover:shadow-xl",
  secondary:
    "bg-blue-dark text-white hover:bg-blue-light shadow-lg hover:shadow-xl",
  ghost: "bg-transparent text-blue-dark hover:bg-cream",
  "outline-light":
    "bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-dark",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
