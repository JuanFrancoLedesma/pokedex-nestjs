import { IsInt, IsString, MinLength, IsPositive, Min } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, MinLength 1
    @IsString()
    @MinLength(1)
    name: string;

}
