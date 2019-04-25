import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from './Event';
import { UserInterest } from './UserInterest';

@Entity()
export class Interest extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'color',
  })
  color: string;

  @OneToMany(() => UserInterest, (userInterest) => userInterest.interest)
  userInterests: UserInterest[];

  @OneToMany(() => Event, (event) => event.interest)
  events: Event[];
}
