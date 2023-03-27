import { MigrationInterface, QueryRunner } from "typeorm";

export class addFieldsRequired1679438303755 implements MigrationInterface {
    name = 'addFieldsRequired1679438303755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD "completeName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cellphone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "completeName"`);
    }

}
