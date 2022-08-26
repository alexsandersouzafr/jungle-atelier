import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FooterItem({ title, children }: Props) {
  return (
    <div className="text-right">
      <div className="font-bold py-8">{title}</div>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
