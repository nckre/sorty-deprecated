import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Retailer } from "./entities/retailer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class RetailersRepository extends AbstractRepository<Retailer> {
    protected readonly logger = new Logger(RetailersRepository.name);
    
    constructor(
        @InjectRepository(Retailer)
        retailersRepository: Repository<Retailer>,
        entityManager: EntityManager,
    ) {
        super(retailersRepository, entityManager);
    }
    }

