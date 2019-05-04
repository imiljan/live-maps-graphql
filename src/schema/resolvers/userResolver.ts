import { AuthenticationError } from 'apollo-server';
import bcrypt from 'bcrypt';
import { IResolvers } from 'graphql-tools';

import { User } from '../../entities/User';
import { createToken } from '../../util/auth';

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU2NjUwNDMzLCJleHAiOjE1NTY3MzY4MzN9._jOQGWlITjp8zFizKn-Ku9SCMu2JXehhJHwa7DjJEPM

export const resolvers: IResolvers = {
  Query: {
    user: (_, { id }) => {
      return User.findOne(id);
    },
    me: (_, __, { user }) => {
      return user;
    },
  },
  Mutation: {
    register: async (_, args) => {
      const user = await User.findOne({ where: { email: args.email } });

      if (!user) {
        const newUser = User.create({
          username: args.username,
          email: args.email,
          password: await bcrypt.hash(args.password, 10),
          firstName: args.firstName,
          lastName: args.lastName,
        });

        await newUser.save();
        return {
          ok: true,
          user: newUser,
        };
      } else {
        throw new Error('User with that email already exists!');
      }
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });
      if (user && (await bcrypt.compare(password, user.password))) {
        return {
          ok: true,
          token: createToken(user),
        };
      }
      throw new AuthenticationError('Bad credentials');
    },
  },
};
