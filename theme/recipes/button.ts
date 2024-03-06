import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "customer_link_btn",
  base: {
    display: "inline-flex",
    flexDir: "row",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    p: "0.75rem 1.5rem",
    minW: "11.875rem",
    borderRadius: "4rem",
    textDecoration: "none",
    transition: "all .15s ease-in",
  },
  variants: {
    variant: {
      light: {
        boxShadow: "inset 0 0 0 2px #fff",
        color: "#fff",
        _hover: {
          backgroundColor: "#fff",
          color: "#1c1a1a",
        },
      },
      dark: {
        backgroundColor: "#1c1a1a",
        color: "#fff",
        _hover: {
          backgroundColor: "#fff",
          color: "#1c1a1a",
        },
      },
      purpleDark: {
        backgroundColor: "#1c1a1a",
        color: "#fff",
        _hover: {
          color: "#6f80d4",
        },
      },
      purple: {
        backgroundColor: "#6f80d4",
        color: "#1c1a1a",
        _hover: {
          color: "#fff",
        },
      },
      red: {
        backgroundColor: "#ff6d66",
        color: "#331a1f",
        _hover: {
          backgroundColor: "#331a1f",
          color: "#ff6d66",
        },
      },
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});
