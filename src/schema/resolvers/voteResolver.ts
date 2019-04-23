import { Vote } from '../../entities/Vote';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    vote: () => {
      return Vote.findOne();
    },
  },
};
