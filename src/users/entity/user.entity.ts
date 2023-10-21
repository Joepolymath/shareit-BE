import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  uid: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  imageUrl: string;
}
