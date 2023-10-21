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

  @Column({ nullable: true })
  userUid: string;

  @Column({
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
  })
  imageUrl: string;
}
