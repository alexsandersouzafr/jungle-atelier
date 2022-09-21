import Image from "next/image";
import { Container } from "../utils/core";

import noiva2 from "/public/img/noiva2.jpg";

export default function BigPicture() {
  return (
    <Container>
      <div className="min-w-full">
        <Image src={noiva2} alt="bigpicture" layout="responsive" />
      </div>
    </Container>
  );
}
