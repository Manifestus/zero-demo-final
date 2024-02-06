import { faker } from "@faker-js/faker/locale/en";

export const donation = {
    avatar: faker.image.urlLoremFlickr({ category: "animals" }),
    name: `Dr. ${faker.person.firstName()} Foundation`,
    nickname: faker.internet.userName(),
    paragraph1: faker.lorem.paragraph(),
    paragraph2: faker.lorem.paragraph(),
    interests: Array.from({ length: 10 }, () => `#${faker.lorem.word()} ${faker.lorem.word()} ${faker.lorem.word()}`),
    images: Array.from({ length: 10 }, () => faker.image.urlLoremFlickr({ category: "nightlife" })),
  }