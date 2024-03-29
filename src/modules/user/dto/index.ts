import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class createUserDTO {
    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string

    @ApiProperty()
    @IsNumber()
    cursCreate: number

    @ApiProperty()
    @IsNumber()
    cursStudy: number
    
    @ApiProperty()
    @IsNumber()
    admin: number
}
export class createUserinDTO {
    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string
}
export class UpdateUserDTO {
    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    email: string
}