import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FooterItem({ title, children }: Props) {
  return (
    <div className="text-right">
      <div className="font-medium py-8">{title}</div>
      <div className="leading-relaxed text-black">{children}</div>
    </div>
  );
}
