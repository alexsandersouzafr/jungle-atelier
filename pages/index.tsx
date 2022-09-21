import BigPicture from "../components/BigPicture";
import Display from "../components/Display";
import { DressDisplay } from "../components/DressDisplay";
import Layout from "../components/Layout";
import { Container } from "../utils/core";
import { dresses } from "../utils/settings";

const IndexPage = () => (
  <Layout title="Atelier Sonho Impossível">
    <Display />
    <Container>
      <div className="grid text-center text-black place-items-center py-16 pt-32">
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
        </div>
      </div>
    </Container>
    <Container>
      <div className="flex gap-16 justify-center pt-32 pb-64">
        {dresses.map((dress) => {
          const { name, image, recommendation, collection } = dress;
          return (
            <DressDisplay
              name={name}
              image={image}
              recommendation={recommendation}
              collection={collection}
            />
          );
        })}
      </div>
    </Container>
    <BigPicture />
    <Container>
      <div className="py-8">
        <div className="text-4xl text-center text-black py-16">
          Fale com o Atelier e encontre o seu vestido.
        </div>
        <div className="text-center p-4">
          Se inscreva para novidades e pormoções.
        </div>
        <div className="justify-center flex">
          <input
            placeholder="seu email"
            className="bg-light-gray text-black rounded-tl-3xl rounded-bl-3xl py-4 px-8"
          ></input>
          <button className="py-4 px-8 light-gray text-white rounded-tr-3xl rounded-br-3xl bg-gray-500 ">
            Enviar
          </button>
        </div>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
