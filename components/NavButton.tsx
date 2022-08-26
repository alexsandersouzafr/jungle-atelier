import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function NavButton({ children }: Props) {
  return (
    <div className="text-black text-sm text-center min-w-fit">{children}</div>
  );
}
