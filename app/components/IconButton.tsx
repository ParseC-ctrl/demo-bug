import { RecipeVariantProps, css, cx } from "@/styled-system/css";
import { button } from "@/styled-system/recipes";
import { forwardRef } from "react";
import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react";
type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type RecipeProps = RecipeVariantProps<typeof button>;
type ButtonRecipeProps = RecipeProps &
  Omit<ButtonElementProps, keyof RecipeProps>;

interface IProps {
  icon: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonRecipeProps & IProps
>(({ children, className, variant, icon, ...props }, ref) => {
  const classesBtn = button({ variant });
  const classes = {
    iconCalendar: css({
      pos: "relative",
      width: "300px",
    }),
    Icon: css({
      display: "block",
      height: "1.5rem",
      pointerEvents: "none",
      position: "absolute",
      right: "1.25rem",
      top: "50%",
      transform: "translateY(-50%)",
      width: "1.5rem",
    }),
  };
  return (
    <div className={cx(classes.iconCalendar, className)}>
      <button
        className={`${classesBtn} ${className ?? ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
      <Image className={classes.Icon} src={icon} alt="iconButton"></Image>
    </div>
  );
});

IconButton.displayName = "IconButton";