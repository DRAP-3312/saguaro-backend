import { IsEmail, IsIn, IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    name:string

    @IsString()
    @MinLength(2)
    lastname:string

    @IsString()
    @IsEmail()
    email:string

    @IsString()
    @IsOptional()
    @MaxLength(250)
    description:string

    @IsString()
    @IsOptional()
    picture:string

    @IsIn(['male','female','notSay'])
    gender:string

    @IsString()
    @MaxLength(10)
    @MinLength(4)
    phone:string

    @IsString()
    @MinLength(2)
    @MaxLength(4)
    lada:string
}
