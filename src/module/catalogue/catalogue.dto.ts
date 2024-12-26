import { IsString, MinLength } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class CreateCatalogueDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  category: string;
}

@InputType()
export class UpdateCatalogueDto {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  category: string;
}