import { faker } from "@faker-js/faker/locale/en";

export const messenger = Array.from({ length: 10 }, () => ({
    avatar: faker.image.urlLoremFlickr({ category: "people" }),
    name: faker.company.name(),
    date: faker.date.recent(),
    messages: Array.from({ length: 10 }, () => ({
      receiverMessage: faker.lorem.sentence(),
      senderMessage: faker.lorem.sentence(),
    })),
    count: 10,
  }));