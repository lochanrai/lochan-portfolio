type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:-translate-y-1",

    secondary:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-1",
  };

  return (
    <a
      href={href}
      download={download}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}