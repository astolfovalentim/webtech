import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });

    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return record;
  }

  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return this.prisma.user.create({
      data,
    });
  }
  update(id: string, dto: UpdateUserDto): Promise<User> {
    const data: Partial<User> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

}
