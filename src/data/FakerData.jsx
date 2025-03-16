import { faker } from "@faker-js/faker";

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
    createBy: "nhuthq@zigexn.vn",
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),

    justArrived: faker.datatype.boolean(),
    inStock: faker.datatype.boolean(),
    price: faker.finance.amount(100000, 500000, 0),
  };
}

export const DummyCarsList = faker.helpers.multiple(CreateDummyList, {
  count: 30,
});
