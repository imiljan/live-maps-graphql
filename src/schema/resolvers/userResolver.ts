import { IResolvers } from 'graphql-tools';

import { User } from '../../entities/User';

export const resolvers: IResolvers = {
  Query: {
    user: () => {
      return User.findOne();
    },
  },
};
