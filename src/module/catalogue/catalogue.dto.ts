import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class CreateCatalogueDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsNumber()
  @Min(1)
  price: number;

  @Field()
  @IsString()
  category: string;
}

@InputType()
export class UpdateCatalogueDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  price: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  category: string;
}
