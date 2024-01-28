import { v4 as uuid } from "uuid";

export const fakeData = [
  {
    name: "collection.1.1",
    id: uuid(),
    isCollection: true,
    childNode: [
      {
        name: "collection.1.1.1",
        id: uuid(),
        isCollection: true,
        childNode: [
          {
            name: "collection.1.1.1.1",
            id: uuid(),
            isCollection: false,
          },
        ],
      },
      {
        name: "collection.1.1.2",
        id: uuid(),
        isCollection: true,
        childNode: [
          {
            name: "collection.1.1.2.1",
            id: uuid(),
            isCollection: false,
          },
        ],
      },
      {
        name: "collection.1.1.3",
        id: uuid(),
        isCollection: true,
        childNode: [
          {
            name: "collection.1.1.3.1",
            id: uuid(),
            isCollection: false,
          },
        ],
      },
    ],
  },
  {
    name: "collection.2.1",
    id: uuid(),
    isCollection: true,
    childNode: [
      {
        name: "collection.2.1.1",
        id: uuid(),
        isCollection: true,
        childNode: [
          {
            name: "collection.2.1.1.1",
            id: uuid(),
            isCollection: false,
          },
          {
            name: "collection.2.1.1.2",
            id: uuid(),
            isCollection: false,
          },
        ],
      },
      {
        name: "collection.2.1.2",
        id: 2,
        isCollection: true,
        childNode: [
          {
            name: "collection.2.1.2.1",
            id: 1,
            isCollection: false,
          },
        ],
      },
      {
        name: "collection.2.1.3",
        id: uuid(),
        isCollection: true,
        childNode: [
          {
            name: "collection.2.1.3.1",
            id: uuid(),
            isCollection: false,
          },
        ],
      },
    ],
  },
  {
    name: "collection.3.1",
    id: uuid(),
    isCollection: false,
    editorData: "<p>Welcome to  <strong>Lrnr</strong></p>",
  },
];
