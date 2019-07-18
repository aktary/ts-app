import {MigrationInterface, QueryRunner} from "typeorm";

export class users1563410763263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "dateCreated" TIMESTAMP NOT NULL, "dateUpdated" TIMESTAMP NOT NULL, "email" text NOT NULL, "first" text NOT NULL, "last" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
