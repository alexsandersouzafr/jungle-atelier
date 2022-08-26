import { Container } from "../utils/core";
import { Controls } from "./Controls";
import Logo from "./Logo";
import { Navbar } from "./Navbar";
import { TextLogo } from "./TextLogo";

export function Header() {
  return (
    <Container>
      <div className="flex w-screen px-36 lg:px-36 md:px-4 sm:px-4 py-8">
        <div>
          <Logo />
          <div className="text-center py-4">PT/EN</div>
        </div>

        <div className="text-center flex-1">
          <TextLogo />
          <div className="grid justify-center">
            <Navbar />
          </div>
        </div>

        <div className="text-right">
          <Controls />
        </div>
      </div>
    </Container>
  );
}
