import { IResolvers } from 'graphql-tools';

import { Vote } from '../../entities/Vote';

export const resolvers: IResolvers = {
  Query: {
    vote: () => {
      return Vote.findOne();
    },
  },
};
