const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const products = [
  {
    name: "Product 1",
    price: 450000,
    description: "Description for product 1",
    image:
      "https://res.cloudinary.com/dxiiecbza/image/upload/v1721356719/pchel2_xbkoei.jpg",
  },
  {
    name: "Product 2",
    price: 310000,
    description: "Description for product 2",
    image:
      "https://res.cloudinary.com/dxiiecbza/image/upload/v1721356706/paa6_hfhwcw.jpg",
  },
  {
    name: "Product 3",
    price: 280000,
    description: "Description for product 3",
    image:
      "https://res.cloudinary.com/dxiiecbza/image/upload/v1721356683/bedrooml_ekdyty.jpg",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
