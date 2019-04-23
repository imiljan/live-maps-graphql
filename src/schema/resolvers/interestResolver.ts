import { Interest } from '../../entities/Interest';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    interest: () => {
      return Interest.findOne();
    },
  },
};
