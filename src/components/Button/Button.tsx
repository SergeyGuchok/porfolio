import * as React from "react";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

import { cn } from "src/utils/cn";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon";

export type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = {
  type: "button";
  link?: never;
} & CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = {
  type: "anchor";
  link: string;
} & CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | LinkProps;

const getVariantClassnames = ({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string => {
  const variantClassnames: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizeClassnames: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClassnames[variant],
    sizeClassnames[size],
    className,
  );
};

export function Button({
  className,
  variant,
  size = "default",
  link,
  ...props
}: Props) {
  if (props.type === "anchor") {
    return (
      <a
        className={cn(getVariantClassnames({ variant, size, className }))}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        {...props}
      ></a>
    );
  }

  return (
    <button
      className={cn(getVariantClassnames({ variant, size, className }))}
      {...props}
    />
  );
}
