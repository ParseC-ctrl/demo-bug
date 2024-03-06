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
    console.log(classes);
    return (
      <button ref={ref} className={`${classes} ${className ?? ""}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// import { RecipeVariantProps, css, cx } from "@/styled-system/css";
// import Image from "next/image";
// import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
// import { button } from "@/styled-system/recipes";
// interface IProps {
//   icon: string;
//   className?: string;
//   onClick?: () => void;
//   children?: ReactNode;
// }

// type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
// type RecipeProps = RecipeVariantProps<typeof button>;
// type ButtonRecipeProps = RecipeProps &
//   Omit<ButtonElementProps, keyof RecipeProps>;

// export const IconButton = forwardRef<
//   HTMLButtonElement,
//   IProps & ButtonRecipeProps
// >(({ className, onClick, children, variant, size, icon, ...props }, ref) => {
//   // const classes = {
//   //   iconCalendar: css({
//   //     pos: "relative",
//   //     width: "300px",
//   //   }),
//   //   Icon: css({
//   //     display: "block",
//   //     height: "1.5rem",
//   //     pointerEvents: "none",
//   //     position: "absolute",
//   //     right: "1.25rem",
//   //     top: "50%",
//   //     transform: "translateY(-50%)",
//   //     width: "1.5rem",
//   //   }),
//   // };
//   const classesBtn = button({ variant });
//   console.log(classesBtn);
//   return (
//     // <div className={cx(classes.iconCalendar, className)}>
//     <button className={`${classesBtn} ${className ?? ""}`} ref={ref} {...props}>
//       {children}
//     </button>
//     // <Image className={classes.Icon} src={icon} alt="iconButton"></Image>
//     // </div>
//   );
// });

// IconButton.displayName = "IconButton";
