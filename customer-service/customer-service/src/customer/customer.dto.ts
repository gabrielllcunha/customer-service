import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Optional } from "@nestjs/common";

export class CustomerDto {

    id:number;

    @IsString({message: "O campo inserido não é válido"})
    @MinLength(10, {message: "O campo name precisa conter 10 caracteres" })
    @MaxLength(30, {message: "O campo name pode conter até 30 caracteres" })
    name: string;

    @IsString({message: "O campo inserido não é válido"})
    @MaxLength(20, {message: "O campo phone precisa conter menos de 20 caracteres"})
    phone: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo email precisa conter 2 caracteres" })
    @MaxLength(80, { message: "O campo email deve ter no máximo 30 caracteres" })
    email: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo street precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo street deve ter no máximo 35 caracteres" })
    street: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo district precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo district deve ter no máximo 35 caracteres" })
    district: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo city precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo city deve ter no máximo 35 caracteres" })
    city: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo country precisa conter 2 caracteres" })
    @MaxLength(35, { message: "O campo country deve ter no máximo 35 caracteres" })
    country: string;

    @IsString({ message: "O campo inserido não é válido" })
    @MinLength(2, { message: "O campo cpf precisa conter 2 caracteres" })
    @MaxLength(14, { message: "O campo cpf deve ter no máximo 14 caracteres" })
    cpf: string;

    



}