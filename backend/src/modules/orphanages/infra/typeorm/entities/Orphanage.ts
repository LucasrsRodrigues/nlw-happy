import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';


@Entity('orphanages')
export default class Orphanage {
   @PrimaryGeneratedColumn('uuid')
   id: number;

   @Column()
   name: string;

   @Column('decimal')
   latitude: number;

   @Column('decimal')
   longitude: number;

   @Column()
   about: string;

   @Column()
   instructions: string;

   @Column()
   opening_hours: string;

   @Column('boolean')
   open_on_weekends: boolean;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}