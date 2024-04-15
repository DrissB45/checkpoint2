import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({length: 100})
  code?: string;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column()
  emoji?: string;

  @Field()
  @Column()
  codeContinent?: string;
}
