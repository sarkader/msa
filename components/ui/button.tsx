import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "subtle";
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
  const base = `inline-flex items-center justify-center ${baseSize} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A0A0A] focus:ring-offset-white transition-safe shadow-sm hover:shadow-lg`;

  if (variant === "primary") {
    // Default monochrome, emerald-accent class can override
    return `${base} text-white bg-[#0A0A0A] hover:bg-[#000000]`;
  }

  if (variant === "secondary") {
    return `${base} text-[#0A0A0A] border border-[#EDEDED] hover:border-[#0A0A0A] hover:text-[#000000] bg-transparent`;
  }

  return `${base} text-[#6B6B6B] hover:text-[#0A0A0A] bg-transparent shadow-none hover:shadow-none`;
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
