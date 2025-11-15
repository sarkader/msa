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
  const base = `inline-flex items-center justify-center ${baseSize} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111] focus:ring-offset-white transition-safe shadow-sm hover:shadow-lg`;

  if (variant === "primary") {
    // Default monochrome
    return `${base} text-white bg-[#111111] hover:bg-[#000000]`;
  }

  if (variant === "secondary") {
    return `${base} text-[#111111] border border-[#E8E6E3] hover:border-[#111111] hover:text-[#000000] bg-transparent`;
  }

  return `${base} text-[#5F5F5F] hover:text-[#111111] bg-transparent shadow-none hover:shadow-none`;
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
