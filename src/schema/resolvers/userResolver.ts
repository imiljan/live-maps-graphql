import { User } from '../../entities/User';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    getUser: () => {
      return User.findOne();
    },
  },
};
