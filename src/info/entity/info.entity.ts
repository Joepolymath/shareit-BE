import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  usersQuantity: number;

  @Column()
  productsQuantity: number;

  @Column()
  percentage: number;

  @Column()
  userId: number;
}
