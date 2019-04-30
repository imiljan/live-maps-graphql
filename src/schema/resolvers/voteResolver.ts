import { AuthenticationError } from 'apollo-server';
import { IResolvers } from 'graphql-tools';

import { Vote } from '../../entities/Vote';

export const resolvers: IResolvers = {
  Query: {
    vote: (_, { id }) => {
      return Vote.findOne(id);
    },
  },
  Mutation: {
    vote: async (_, { eventId, sign }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Must be logged in to vote');
      }

      if (sign !== -1 && sign !== 1) {
        throw new Error('Bad sign format (must be 1 or -1)');
      }

      const vote = await Vote.findOne({ where: { event: eventId, user } });

      if (vote) {
        if (vote.sign === sign) {
          throw new Error('You already voted for this event!');
        }
        // change sign for already existent vote
        vote.sign = sign;

        try {
          await vote.save();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      const newVote = Vote.create({ event: eventId, user, sign });
      try {
        await newVote.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
