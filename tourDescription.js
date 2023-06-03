const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    `API de passeios turísticos \nLegenda:\nid: 1 - Gastronomia\nid: 2 - Aventura\nid: 3 - Praia e Sol`
  );
});

const categories = [
  { id: 1, name: "Gastronomia" },
  { id: 2, name: "Aventura" },
  { id: 3, name: "Praia e sol" },
];

const tours = [
  {
    id: 1,
    categoryId: 1,
    title: "Cervejaria Bohemia",
    description:
      "Quem entra na Cervejaria Bohemia, imediatamente se apaixona pelo universo da cerveja. A visita oferece a experiência cervejeira mais completa da América Latina. O Tour apresenta a história da cerveja, o seu processo de produção e ingredientes que levam os visitantes a experiências sensoriais únicas e degustações exclusiva",
  },
  {
    id: 2,
    categoryId: 1,
    title: "Cachaçaria Werneck",
    description:
      'Há muitos anos trabalhando no ramo de bebidas nacionais e internacionais de qualidade e originais, os sócios da Cachaçaria Original resolveram levar até você as melhores bebidas do Brasil, com a praticidade do comércio eletrônico! Para isso precisaram de tempo e investimento, com o intuíto de que seu "e-cliente" tenha toda a tranquilidade e segurança ao adquirir seus produtos pela internet, através de uma moderna Loja Virtual disponibiliza seus produtos com procedência confiança e tecnologia.',
  },
  {
    id: 3,
    categoryId: 1,
    title: "Restaurante Crémerie",
    description:
      "Tudo começou quando Reinaldo Pires se formou em Zootecnia pela UFRRJ e decidiu, em Teresópolis, criar cabras leiteiras para a produção de queijos de cabra finos. Inaugurou, em seguida, o restaurante Cremerie Genève com o Chef francês Robert Darrot, ex chef do Rio Palace e do Meridien",
  },
  {
    id: "4",
    categoryId: 2,
    title: "Floresta da Tijuca",
    description:
      "Uma das maiores florestas urbanas do mundo, foi criada em 1861 pelo imperador Pedro II para reflorestar a área atingida pelo desmatamento causado pelo cultivo de cana e café. Este setor do Parque Nacional da Tijuca reúne atrativos como o Pico da Tijuca, o Pico do Papagaio, a Cascatinha Taunay.",
  },
  {
    id: "5",
    categoryId: 2,
    title: "Excursão pela Rocinha",
    description:
      "A experiência. Explore a maior favela do Rio em uma excursão a pé de três horas e meia pela favela da Rocinha, a maior da América do Sul Conduzida por guias locais fluentes em inglês e moradores da própria favela, a excursão a pé é feita de forma respeitosa e não intrusiva.",
  },
  {
    id: "6",
    categoryId: 2,
    title: "Pedra da Gávea",
    description:
      "Pedra da Gávea é uma montanha monolítica na Floresta da Tijuca, no Rio de Janeiro, Brasil. Composta por granito e gneisse, a sua altitude é de 842 metros, tornando-se uma das montanhas mais altas do mundo junto de margens oceânicas. As trilhas na montanha foram abertas pela população agrícola local nos anos 1800; hoje, o local está sob a administração do Parque Nacional da Tijuca.",
  },
  {
    id: "7",
    categoryId: 3,
    title: "Arpoador",
    description: 'A Praia do Arpoador recebe pessoas do mundo todo com uma surpreendente paisagem rochosa. Entre os bairros de Ipanema e Copacabana, essa praia que ocupa uma faixa de 500 metros de comprimento é um reduto de boêmios, poetas, artistas e pessoas da velha guarda carioca com muita história para contar. O nome Arpoador tem origem na antiga atividade de caça a baleias, feita por povos nativos e portugueses perto da costa brasileira.',
  },
  {
    id: "8",
    categoryId: 3,
    title: "Mureta da Urca",
    description: "A mureta nada mais é do que um muro baixo que está ao lado da Baía de Guanabara. A Urca está na zona sul da cidade, e abriga um dos cartões postais da cidade… o cume do Pão de Açúcar! Esta é uma vizinhança tranquila e tradicional do Rio, inclusive com muitos prédios e casas bem charmosas."
  },
  {
    id: "9",
    categoryId: 3,
    title: "Prainha",
    description: "É uma praia extensa com quiosques por toda a orla e ciclovia. A pedra do Pontal separa a Praia da Macumba do Recreio. Em maré baixa, um estreito caminho na areia se forma da praia até a pedra, permitindo que se chegue até lá. A subida até o alto leva cerca de uma hora, e a vista lá de cima vale todo o esforço.",
  }
];

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:categoryId/tours", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categoryTours = tours.filter((tour) => tour.categoryId === categoryId);
  res.json(categoryTours);
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
