import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Interest } from './Interest';
import { UserCheckin } from './UserCheckin';
import { Vote } from './Vote';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'title',
  })
  title: string;

  @Column('text', {
    nullable: false,
    name: 'body',
  })
  body: string;

  @Column('varchar', {
    nullable: false,
    length: 255,
    name: 'img',
  })
  img: string;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'address',
  })
  address: string;

  @Column('varchar', {
    nullable: true,
    length: 255,
    name: 'hashtag',
  })
  hashtag: string | null;

  @Column('datetime', {
    nullable: false,
    name: 'created_at',
  })
  createdAt: Date;

  @Column('bool', {
    nullable: false,
    name: 'deleted',
  })
  deleted: Boolean;

  @Column('datetime', {
    nullable: false,
    name: 'start_at',
  })
  startAt: Date;

  @Column('datetime', {
    nullable: true,
    name: 'end_at',
  })
  endAt: Date | null;

  @Column('real', {
    nullable: false,
    name: 'lat',
  })
  lat: number;

  @Column('real', {
    nullable: false,
    name: 'long',
  })
  long: number;

  @Column('bool', {
    nullable: false,
    name: 'permanent',
  })
  permanent: Boolean;

  @ManyToOne((type) => Interest, (interest) => interest.events, { nullable: false })
  @JoinColumn({ name: 'interest_id' })
  interest: Interest | null;

  @OneToMany((type) => Vote, (vote) => vote.event)
  votes: Vote[];

  @OneToMany((type) => UserCheckin, (userCheckin) => userCheckin.event)
  userCheckins: UserCheckin[];
}
