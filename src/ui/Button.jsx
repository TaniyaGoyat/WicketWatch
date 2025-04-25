import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-orange-600 text-white hover:bg-orange-700 active:scale-95 shadow-md",
        outline: "border border-orange-300 text-orange-700 bg-white hover:bg-orange-50 active:scale-95"
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10 p-2"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    }
  }
);

const Button = ({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}) => {
  return (
    <button className={`${buttonVariants({ variant, size })} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
