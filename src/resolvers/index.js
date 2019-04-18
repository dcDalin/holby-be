const books = [
  {
    title: 'The Book',
    author: 'Author',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;
