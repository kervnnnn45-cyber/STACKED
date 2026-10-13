import { theme } from "../theme";

// Renders a <button> by default, or any other tag via `as` (e.g. as="a" with href).
export default function Button({ variant = "primary", as: Tag = "button", className = "", ...props }) {
  const type = Tag === "button" ? { type: "button" } : {};
  return <Tag {...type} {...props} className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-colors disabled:opacity-60 ${theme.btn[variant]} ${className}`} />;
}
