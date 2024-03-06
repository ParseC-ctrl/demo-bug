import { RecipeVariantProps } from "@/styled-system/css";
import { button } from "@/styled-system/recipes";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type RecipeProps = RecipeVariantProps<typeof button>;
type Props = RecipeProps & Omit<ButtonElementProps, keyof RecipeProps>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant, ...props }, ref) => {
    const classes = button({ variant });
    return (
      <button ref={ref} className={`${classes} ${className ?? ""}`} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
