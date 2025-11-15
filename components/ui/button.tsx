import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "subtle" | "ghost";
type ButtonSize = "default" | "large";

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & {
    href?: never;
  };

type LinkButtonProps = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
    href: string;
  };

type Props = ButtonProps | LinkButtonProps;

function getButtonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "large"): string {
  const baseSize =
    size === "large"
      ? "px-8 py-5 text-base font-medium rounded-full"
      : "px-6 py-3 text-sm font-medium rounded-lg";
  const base = `inline-flex items-center justify-center ${baseSize} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white transition-safe shadow-sm hover:shadow-lg`;

  if (variant === "primary") {
    return `${base} text-white bg-[#1E3A8A] hover:bg-[#1E40AF]`;
  }

  if (variant === "secondary") {
    return `${base} text-[#0B1220] border border-[#E6EAF0] hover:bg-[rgba(30,58,138,0.06)] bg-transparent`;
  }

  if (variant === "ghost") {
    return `${base} text-white border border-white/80 hover:border-white hover:bg-white/10 bg-transparent shadow-none hover:shadow-none`;
  }

  return `${base} text-[#5B6473] hover:text-[#0B1220] bg-transparent shadow-none hover:shadow-none`;
}

export default function Button({
  variant = "primary",
  size = "large",
  children,
  className = "",
  ...props
}: Props) {
  const classes = `${getButtonClasses(variant, size)} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonProps;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
