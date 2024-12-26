import { ObjectType, Field, ID } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";

@Entity({ name: 'catalogue' })
@ObjectType()
export class Catalogue{
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column()
    name: string;
  
    @Field()
    @Column()
    category: string;

    @Field()
    @Column({ type: 'bigint' })
    price: number;

    @Field({ nullable: true })
    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}