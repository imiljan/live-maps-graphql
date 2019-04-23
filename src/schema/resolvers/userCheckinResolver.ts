import { UserCheckin } from '../../entities/UserCheckin';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    userCheckin: () => {
      return UserCheckin.findOne();
    },
  },
};
