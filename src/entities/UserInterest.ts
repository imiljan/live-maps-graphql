import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Interest } from './Interest';
import { User } from './User';

@Entity()
export class UserInterest extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @ManyToOne(() => Interest, (interest) => interest.userInterests, {
    nullable: false,
  })
  @JoinColumn({ name: 'interest_id' })
  interest: Interest | null;

  @ManyToOne(() => User, (user) => user.userInterests, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User | null;
}
