import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base";

@Entity("users")
export class User extends BaseEntity {
  @Column("text")
  public email!: string;

  @Column("text")
  public first!: string;

  @Column("text")
  public last!: string;
}
