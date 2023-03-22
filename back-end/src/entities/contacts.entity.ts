import { hashSync } from "bcryptjs";

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Client } from "./clients.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  completeName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cellphone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  registerDate: Date;

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
