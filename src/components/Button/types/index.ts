import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export type ButtonProps = {
  type: "button";
  link?: never;
} & CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkProps = {
  type: "anchor";
  link: string;
} & CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
