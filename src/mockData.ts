import { faker } from "@faker-js/faker";

const productsData = [
  {
    id: "1",
    image: "https://i.imgur.com/q9JJUlb.png",
    name: "Iphone 11",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "2",
    image: "https://i.imgur.com/jUCR6P9.png",
    name: "Playstation 5",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "3",
    image: "https://i.imgur.com/O3uVmfc.png",
    name: "Samsung Galaxy",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "4",
    image: "https://i.imgur.com/Jc9jIFC.png",
    name: 'Televisão 55"',
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "5",
    image: "https://i.imgur.com/RExG7WA.png",
    name: "Ventilador",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "6",
    image: "https://i.imgur.com/EeZS5OD.png",
    name: "Xbox 360",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  },
  {
    id: "7",
    image: "https://i.imgur.com/EeZS5OD.png",
    name: "Xbox X",
    listPrice: faker.commerce.price(100, 1000),
    price: faker.commerce.price(100, 1000),
    installments: 10
  }
];

const storeData = [
  {
    name: "Loja de São Paulo",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "São Paulo",
    state: "SP",
    postalCode: faker.address.zipCodeByState("SP"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[2], productsData[3]]
  },
  {
    name: "Loja de Acre",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Acre",
    state: "AC",
    postalCode: faker.address.zipCodeByState("AC"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[3], productsData[3]]
  },
  {
    name: "Loja de Alagoas",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Alagoas",
    state: "AL",
    postalCode: faker.address.zipCodeByState("AL"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[4], productsData[3]]
  },
  {
    name: "Loja de Amapá",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Amapá",
    state: "AP",
    postalCode: faker.address.zipCodeByState("AP"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[6], productsData[3]]
  },
  {
    name: "Loja de Amazonas",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Amazonas",
    state: "AM",
    postalCode: faker.address.zipCodeByState("AM"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[5], productsData[2], productsData[3]]
  },
  {
    name: "Loja de Bahia",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Bahia",
    state: "BA",
    postalCode: faker.address.zipCodeByState("BA"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[4], productsData[2], productsData[3]]
  },
  {
    name: "Loja de Ceara",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Ceara",
    state: "CE",
    postalCode: faker.address.zipCodeByState("CE"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[6], productsData[2], productsData[3]]
  },
  {
    name: "Loja de Brasilia",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Brasilia",
    state: "DF",
    postalCode: faker.address.zipCodeByState("DF"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1]]
  },
  {
    name: "Loja de Espirito Santo",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Espirito Santo",
    state: "ES",
    postalCode: faker.address.zipCodeByState("ES"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[3]]
  },
  {
    name: "Loja de Goiás",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Goiás",
    state: "GO",
    postalCode: faker.address.zipCodeByState("GO"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[2], productsData[3], productsData[6]]
  },
  {
    name: "Loja de Maranhão",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Maranhão",
    state: "MA",
    postalCode: faker.address.zipCodeByState("MA"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[2], productsData[3], productsData[4]]
  },
  {
    name: "Loja de Mato Grosso",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Mato Grosso",
    state: "MT",
    postalCode: faker.address.zipCodeByState("MT"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1]]
  },
  {
    name: "Loja de Mato Grosso do Sul",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Mato Grosso do Sul",
    state: "MS",
    postalCode: faker.address.zipCodeByState("MS"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[3]]
  },
  {
    name: "Loja de Minas Gerais",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Minas Gerais",
    state: "MG",
    postalCode: faker.address.zipCodeByState("MG"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2], productsData[3]]
  },
  {
    name: "Loja de Pará",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Pará",
    state: "PA",
    postalCode: faker.address.zipCodeByState("PA"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2], productsData[1], productsData[3]]
  },
  {
    name: "Loja de Paraíba",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Paraíba",
    state: "PB",
    postalCode: faker.address.zipCodeByState("PB"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[3], productsData[2]]
  },
  {
    name: "Loja de Paraná",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Paraná",
    state: "PR",
    postalCode: faker.address.zipCodeByState("PR"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[3], productsData[1], productsData[2]]
  },
  {
    name: "Loja de Pernambuco",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Pernambuco",
    state: "PE",
    postalCode: faker.address.zipCodeByState("PE"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2], productsData[5], productsData[6]]
  },
  {
    name: "Loja de Piauí",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Piauí",
    state: "PI",
    postalCode: faker.address.zipCodeByState("PI"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2]]
  },
  {
    name: "Loja de Rio de Janeiro",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Rio de Janeiro",
    state: "RJ",
    postalCode: faker.address.zipCodeByState("RJ"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[4]]
  },
  {
    name: "Loja de Rio grande do Norte",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Rio grande do Norte",
    state: "RN",
    postalCode: faker.address.zipCodeByState("RN"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[2], productsData[3], productsData[4], productsData[5]]
  },
  {
    name: "Loja de Rio grande do Sul",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Rio grande do Sul",
    state: "RS",
    postalCode: faker.address.zipCodeByState("RS"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2], productsData[3], productsData[4]]
  },
  {
    name: "Loja de Rondonia",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Rondonia",
    state: "RO",
    postalCode: faker.address.zipCodeByState("RO"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[6]]
  },
  {
    name: "Loja de Roraima",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Roraima",
    state: "RR",
    postalCode: faker.address.zipCodeByState("RR"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[5], productsData[6]]
  },
  {
    name: "Loja de Santa Catarina",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Santa Catarina",
    state: "SC",
    postalCode: faker.address.zipCodeByState("SC"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[1], productsData[5], productsData[6]]
  },
  {
    name: "Loja de Sergipe",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Sergipe",
    state: "SE",
    postalCode: faker.address.zipCodeByState("SE"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[4], productsData[3]]
  },
  {
    name: "Loja de Tocantins",
    address: faker.address.streetAddress(),
    neighborhood: faker.address.country(),
    city: "Tocantins",
    state: "TO",
    postalCode: faker.address.zipCodeByState("TO"),
    hour: "De segunda a sábado das 8h00 às 17h00",
    celphone: faker.phone.number(),
    phone: faker.phone.number(),
    products: [productsData[2], productsData[3]]
  }
];

export default { storeData, productsData };
