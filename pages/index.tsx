import BigPicture from "../components/BigPicture";
import Display from "../components/Display";
import Layout from "../components/Layout";
import { Container } from "../utils/core";

const IndexPage = () => (
  <Layout title="Atelier Sonho Impossível">
    <Display />
    <Container>
      <div className="grid text-center text-black place-items-center py-16">
        <div className="text-5xl p-8">Descubra o Vestido Maia</div>
        <div className="text-lg leading-loose max-w-lg p-8">
          <div className="p-2">
            Um dos vestidos exclusivos da Coleção Elementos 2021, do Atelier
            Sonho Possível
          </div>
          <div className="p-2">
            Delicado, romântico e moderno. Para noivas que buscam leveza com
            detalhes em renda. Ideal para casamentos ao ar livre.
          </div>
          <div>Lugar do Texto</div>
        </div>
      </div>
    </Container>
    <BigPicture />
    <Container>INFERNO</Container>
  </Layout>
);

export default IndexPage;
