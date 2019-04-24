import { IResolvers } from 'graphql-tools';

import { Vote } from '../../entities/Vote';

export const resolvers: IResolvers = {
  Query: {
    vote: (_, { id }) => {
      return Vote.findOne(id);
    },
  },
};
