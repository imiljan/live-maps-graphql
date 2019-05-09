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

  voted: boolean;

  @Column('varchar', {
    nullable: false,
    length: 100,
    name: 'title',
  })
  title: string;

  @Column('text', {
    nullable: false,
    name: 'description',
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
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('bool', {
    nullable: false,
    name: 'deleted',
    default: false,
  })
  deleted: boolean;

  @Column('datetime', {
    nullable: false,
    name: 'start_at',
    default: () => 'CURRENT_TIMESTAMP',
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
    name: 'lng',
  })
  long: number;

  @Column('bool', {
    nullable: false,
    name: 'permanent',
  })
  permanent: boolean;

  @ManyToOne(() => Interest, (interest) => interest.events, { nullable: false })
  @JoinColumn({ name: 'interest_id' })
  interest: Interest | null;

  @OneToMany(() => Vote, (vote) => vote.event)
  votes: Vote[];

  @OneToMany(() => UserCheckin, (userCheckin) => userCheckin.event)
  userCheckins: UserCheckin[];
}
