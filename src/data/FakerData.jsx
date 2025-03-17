import { faker } from "@faker-js/faker";
import features from "./Features.json";

function CreateDummyList() {
  return {
    name: faker.vehicle.vehicle(),
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    fuelType: faker.vehicle.fuel(),
    type: faker.vehicle.type(),
    image:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bmw-330e-review-2024-01.jpg?itok=gna2hmk3",
    miles: 1000,
    gearType: "Automatic",
    year: faker.date.past().getFullYear(),
    createBy: "nhuthq@zigexn.vn",
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    justArrived: faker.datatype.boolean(),
    inStock: faker.datatype.boolean(),
    price: faker.finance.amount(100000, 500000, 0),
    features: features,
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  };
}

export const DummyCarsList = faker.helpers.multiple(CreateDummyList, {
  count: 30,
});

export const DummyCarDetails = faker.helpers.multiple(CreateDummyList, {
  count: 1,
});
