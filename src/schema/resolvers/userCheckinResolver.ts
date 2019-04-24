import { IResolvers } from 'graphql-tools';

import { UserCheckin } from '../../entities/UserCheckin';

export const resolvers: IResolvers = {
  Query: {
    userCheckin: (_, { id }) => {
      return UserCheckin.findOne(id);
    },
  },
};
