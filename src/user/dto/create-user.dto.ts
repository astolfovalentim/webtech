import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
     @ApiProperty({
       description: 'O nome do usuário',
       example: 'Tony Stark',
    })
    name: string;

    @IsString()
    @ApiProperty({
      description: 'O e-mail do usuário',
      example: 'Tonystark@stark.com',
    })
    email: string;

    @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;


}
