import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common';

@Entity()
export class Retailer extends AbstractEntity<Retailer> {
  @Column()
  name: string;
}