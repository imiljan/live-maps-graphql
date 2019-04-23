import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserCheckin } from './UserCheckin';
import { UserInterest } from './UserInterest';
import { Vote } from './Vote';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 150,
    name: 'username',
  })
  username: string;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'password',
  })
  password: string;

  @Column('varchar', {
    nullable: false,
    length: 254,
    name: 'email',
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 30,
    name: 'first_name',
  })
  firstName: string;

  @Column('varchar', {
    nullable: false,
    length: 30,
    name: 'last_name',
  })
  lastName: string;

  @OneToMany((type) => UserInterest, (userInterests) => userInterests.user)
  userInterests: UserInterest[];

  @OneToMany((type) => Vote, (vote) => vote.user)
  votes: Vote[];

  @OneToMany((type) => UserCheckin, (userCheckin) => userCheckin.user)
  userCheckin: UserCheckin[];
}
