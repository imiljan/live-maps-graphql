import { IResolvers } from 'graphql-tools';

import { Interest } from '../../entities/Interest';

export const resolvers: IResolvers = {
  Query: {
    interest: () => {
      return Interest.findOne();
    },
  },
};
