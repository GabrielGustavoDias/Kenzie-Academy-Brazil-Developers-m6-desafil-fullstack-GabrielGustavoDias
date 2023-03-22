import { MigrationInterface, QueryRunner } from "typeorm";

export class alterFieldCellphone1679496015215 implements MigrationInterface {
    name = 'alterFieldCellphone1679496015215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cellphone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cellphone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" integer NOT NULL`);
    }

}
