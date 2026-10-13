import { theme } from "../theme";

export default function SectionHeading({ id, title, children }) {
  return (
    <div>
      <h2 id={id} className={`text-3xl sm:text-4xl ${theme.h2}`}>{title}</h2>
      {children && <p className={`mt-3 max-w-xl ${theme.muted}`}>{children}</p>}
    </div>
  );
}
