import { hashSync } from "bcryptjs";

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  completeName: string;

  @Column()
  cellphone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  registerDate: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Contacts, (contacts) => contacts.clients)
  contact: Contacts[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

// Cliente = curso => lados N da relação
// estudante => curso
// 1 -> N
// lado solo recebe many to one
