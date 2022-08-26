import FooterItem from "./FooterItem";
import { footer } from "../utils/settings";

export default function Footer() {
  return (
    <div className="grid grid-cols-5 justify-items-center bg-white px-36 py-8 gap-16">
      {footer.map((item) => (
        <FooterItem title={item.title}>
          {item.body.map((bodyItem) => (
            <span>
              {bodyItem}
              <br />
            </span>
          ))}
        </FooterItem>
      ))}
    </div>
  );
}
