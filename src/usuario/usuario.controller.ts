import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
    constructor(private repo: UsuarioRepository) { }

    @Post()
    async Criar(@Body() usuario: Usuario) {
        const newUsuario = await this.repo.criar(usuario)
        return newUsuario
    }

    @Get()
    async obterTodos() {
        const usuarios = await this.repo.obterTodos()
        return usuarios
    }
    @Get(':id')
    async obterUnico(@Param('id') id: string) {
            const userUnico = await this.repo.ObterUnico(+id)
            return userUnico;
    }

    @Delete(':id')
    async deletar(@Param('id') id: string) {
        await this.repo.deletar(+id)
    }

    @Patch(':id')
    async atualizar(@Param('id') id: string, @Body() usuario: Usuario){
        const usuarioAtualizado = await this.repo.update({id: +id, ...usuario})
        return usuarioAtualizado
    }
}
