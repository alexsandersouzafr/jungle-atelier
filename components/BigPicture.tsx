import Image from "next/image";
import { Container } from "../utils/core";

import noiva2 from "/img/noiva2.jpg";

export default function BigPicture() {
  return (
    <Container>
      <div className="min-w-full">
        <Image src={noiva2} />
      </div>
    </Container>
  );
}
