import { frontendClassName, surfaceClass } from "@trebired/frontend";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "accent" | "ghost" | "outline" | "primary" | "white";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  href: string;
  size?: "lg" | "md" | "sm";
  variant?: ButtonVariant;
};

const TONE_BY_VARIANT: Record<ButtonVariant, string> = {
  accent: "accent",
  ghost: "ghost",
  outline: "outline",
  primary: "highlight",
  white: "white",
};

function Button({ children, className, href, size = "md", variant = "primary", ...rest }: ButtonProps) {
  const base = surfaceClass(frontendClassName("button"), { size, tone: TONE_BY_VARIANT[variant] });
  const classes = [base, className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} {...rest}>
    {children}
    </a>
  );
}

export { Button };
export type { ButtonProps, ButtonVariant };
