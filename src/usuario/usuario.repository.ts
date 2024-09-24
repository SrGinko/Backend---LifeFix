import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import  Usuario  from './usuario.entity';

@Injectable()
export class UsuarioRepository {
    constructor(private prismaService: PrismaService) { }

    async obterTodos() {
        return this.prismaService.usuario.findMany()
    }

    async ObterUnico(id: number) {
        return this.prismaService.usuario.findUnique({
            where: {
                id,
            },
        })
    }

    async criar(usuario: Usuario) {
        return this.prismaService.usuario.create({
            data: usuario as any
        })
    }

    async update(usuario: Usuario) {
        return this.prismaService.usuario.update({
            where: {
                id: usuario.id
            },
            data: usuario as any
        })
    }

    async deletar(id: number) {
        return this.prismaService.usuario.delete({
            where: {
                id,
            }
        })
    }
}
