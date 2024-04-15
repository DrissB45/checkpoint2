import { IsString, Max, MaxLength } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateCountryInputType {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  codeContinent: string
}