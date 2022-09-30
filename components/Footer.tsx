import FooterItem from "./FooterItem";
import { copyright, footer } from "../utils/settings";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-5 justify-items-center text-sm bg-white px-36 py-8 gap-8">
        {footer.map((item) => (
          <FooterItem title={item.title} key={Math.random()}>
            {item.body.map((bodyItem) => (
              <span key={Math.random()}>
                {bodyItem}
                <br />
              </span>
            ))}
          </FooterItem>
        ))}
      </div>
      <div className="py-8 text-gray-500 text-center">{copyright}</div>
    </>
  );
}
