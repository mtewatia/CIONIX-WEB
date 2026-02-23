import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-heading",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-ryse-orange to-ryse-orange-light text-white rounded-full shadow-lg shadow-ryse-orange/30 hover:shadow-xl hover:shadow-ryse-orange/40",
        destructive: "bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90",
        outline: "border-2 border-ryse-orange text-ryse-orange bg-transparent rounded-full hover:bg-ryse-orange hover:text-white",
        secondary: "bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90",
        ghost: "hover:bg-muted hover:text-foreground rounded-md",
        link: "text-ryse-orange underline-offset-4 hover:underline",
        white: "bg-white text-foreground rounded-full shadow-lg hover:shadow-xl",
        dark: "bg-ryse-dark text-white rounded-full border border-white/20 hover:border-ryse-orange hover:bg-ryse-dark-light",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-5",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
