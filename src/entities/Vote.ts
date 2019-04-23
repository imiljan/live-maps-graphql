import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from './Event';
import { User } from './User';

@Entity()
export class Vote extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('smallint', {
    nullable: false,
    name: 'sign',
  })
  sign: number;

  @Column('datetime', {
    nullable: false,
    name: 'created_at',
  })
  createdAt: Date;

  @ManyToOne((type) => Event, (event) => event.votes, { nullable: false })
  @JoinColumn({ name: 'event_id' })
  event: Event | null;

  @ManyToOne((type) => User, (user) => user.votes, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User | null;
}
