import { IResolvers } from 'graphql-tools';

import { Interest } from '../../entities/Interest';

export const resolvers: IResolvers = {
  Query: {
    interest: (_, { id }) => {
      return Interest.findOne(id);
    },
    interests: () => {
      return Interest.find();
    },
  },
};
