import { IResolvers } from 'graphql-tools';

import { Event } from '../../entities/Event';

export const resolvers: IResolvers = {
  Query: {
    event: (_, __, ___, info) => {
      let relations: string[] = [];
      if (info.fieldNodes[0].selectionSet !== undefined) {
        info.fieldNodes[0].selectionSet.selections
          .map((e: any) => e.name)
          .forEach((e) => {
            if (e.value === 'interest' || e.value === 'votes' || e.value === 'userCheckins') {
              relations.push(e.value);
            }
          });
      }
      return Event.findOne({ relations });
    },
  },
};
