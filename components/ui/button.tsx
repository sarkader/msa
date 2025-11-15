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
  const base = `inline-flex items-center justify-center ${baseSize} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white transition-safe shadow-sm hover:shadow-md hover:-translate-y-0.5`;

  if (variant === "primary") {
    return `${base} text-white bg-[#0F766E] hover:bg-[#0d6361]`;
  }

  if (variant === "secondary") {
    return `${base} text-[#111111] border border-[rgba(17,17,17,0.08)] hover:border-[#0F766E] hover:text-[#0F766E] bg-transparent`;
  }

  return `${base} text-[#525252] hover:text-[#111111] bg-transparent shadow-none hover:shadow-none`;
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
