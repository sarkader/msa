import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "subtle";

type BaseButtonProps = {
  variant?: ButtonVariant;
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

function getButtonClasses(variant: ButtonVariant = "primary"): string {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white transition-safe";

  if (variant === "primary") {
    return `${base} text-white bg-[#0F766E] hover:bg-[#0d6361]`;
  }

  if (variant === "secondary") {
    return `${base} text-[#1a1a1a] border border-[#e5e5e5] hover:border-[#0F766E] hover:text-[#0F766E] bg-transparent`;
  }

  return `${base} text-[#525252] hover:text-[#1a1a1a] bg-transparent`;
}

export default function Button({ variant = "primary", children, className = "", ...props }: Props) {
  const classes = `${getButtonClasses(variant)} ${className}`;

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
