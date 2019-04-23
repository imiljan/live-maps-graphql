import { UserInterest } from '../../entities/UserInterest';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    userInterest: () => {
      return UserInterest.findOne();
    },
  },
};
