import { Event } from '../../entities/Event';
import { IResolver } from '../../types/IResolverType';

export const resolvers: IResolver = {
  Query: {
    event: () => {
      return Event.findOne();
    },
  },
};
