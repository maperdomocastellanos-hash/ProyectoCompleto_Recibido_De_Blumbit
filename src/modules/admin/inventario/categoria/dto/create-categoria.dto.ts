import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { CategoriaInterface } from "./CategoriaInterface";


export class CreateCategoriaDto implements CategoriaInterface {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nombre!: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    descripcion?: string
    
}

