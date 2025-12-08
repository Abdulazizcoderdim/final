import { buttonSizes, buttonVariants } from "./data";
import styles from "./styles.module.scss";

const Button = ({
  children,
  variant = buttonVariants.primary,
  size = buttonSizes.medium,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
