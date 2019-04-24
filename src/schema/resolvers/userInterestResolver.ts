import { IResolvers } from 'graphql-tools';

import { UserInterest } from '../../entities/UserInterest';

export const resolvers: IResolvers = {
  Query: {
    userInterest: () => {
      return UserInterest.findOne();
    },
  },
};
