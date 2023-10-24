import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.getOrThrow('PG_HOST'),
                port: configService.getOrThrow('PG_PORT'),
                database: configService.getOrThrow('PG_DATABASE'),
                username: configService.getOrThrow('PG_USERNAME'),
                password: configService.getOrThrow('PG_PASSWORD'),
                synchronize: configService.getOrThrow('PG_SYNCHRONIZE'),
                autoLoadEntities: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {
    static forFeature(entities: EntityClassOrSchema[], connection?: string) {
        return TypeOrmModule.forFeature(entities, connection);
    }
}
