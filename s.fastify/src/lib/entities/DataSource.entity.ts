import { Entity, Property } from '@mikro-orm/core'
import { BaseEntity } from '../BaseEntity'

/*
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {

   @PrimaryKey()
   id!: number;

   @Property()
   fullName!: string;

   @Property()
   email!: string;

   @Property()
   password!: string;

   @Property({ type: 'text' })
   bio = '';

}
*/

@Entity()
export class DataSource extends BaseEntity {
}
