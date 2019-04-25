import { IResolvers } from 'graphql-tools';
import { In } from 'typeorm';

import { Event } from '../../entities/Event';

export const resolvers: IResolvers = {
  Query: {
    event: (_, { id }, __, info) => {
      const relations: string[] = [];
      if (info.fieldNodes[0].selectionSet !== undefined) {
        info.fieldNodes[0].selectionSet.selections
          .map((e: any) => e.name)
          .forEach((e) => {
            if (e.value === 'interest' || e.value === 'votes' || e.value === 'userCheckins') {
              relations.push(e.value);
            }
          });
      }
      return Event.findOne(id, { relations });
    },
    events: (_, { interestIds }) => {
      if (interestIds.length !== 0) {
        return Event.find({ relations: ['interest'], where: { interest: In(interestIds) } });
      } else {
        return Event.find({ relations: ['interest'] });
      }
    },
  },
};
