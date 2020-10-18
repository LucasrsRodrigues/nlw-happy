import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';


@Entity('users')
export default class Users {
   @PrimaryGeneratedColumn('uuid')
   id: number;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   @Exclude()
   password: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;


}
