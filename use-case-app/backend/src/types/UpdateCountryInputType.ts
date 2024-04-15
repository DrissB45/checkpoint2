import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCountryInputType {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}