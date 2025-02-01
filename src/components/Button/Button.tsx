import * as React from "react";
import type { ButtonProps, LinkProps } from "src/components/Button/types";
import { getVariantClassnames } from "src/components/Button/helpers/getVariantClassnames";

import { cn } from "src/utils/cn";

type Props = ButtonProps | LinkProps;

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
