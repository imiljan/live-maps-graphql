import { IResolvers } from 'graphql-tools';
import { getRepository, In } from 'typeorm';
import { Event } from '../../entities/Event';
import { Interest } from '../../entities/Interest';

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
      // this could be optimized
      let builder = getRepository(Event)
        .createQueryBuilder('event')
        .leftJoinAndSelect('event.interest', 'interest')
        .leftJoinAndSelect('event.votes', 'votes')
        .leftJoinAndSelect('votes.user', 'user');
      if (interestIds.length !== 0) {
        builder = builder.where({ interest: In(interestIds) });
      }
      return builder.getMany();
    },
  },
  Mutation: {
    event: async (_, args) => {
      // check if signed in
      let newEvent = Event.create(args);
      // TODO: initialize all fields
      const interest = await Interest.findOne(args.interestId);
      if (interest) {
        newEvent.interest = interest;
      }
      newEvent = await newEvent.save();
      return newEvent;
    },
  },
};
