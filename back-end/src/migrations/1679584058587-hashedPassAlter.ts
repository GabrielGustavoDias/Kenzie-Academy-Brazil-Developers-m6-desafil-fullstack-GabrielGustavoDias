import { MigrationInterface, QueryRunner } from "typeorm";

export class hashedPassAlter1679584058587 implements MigrationInterface {
    name = 'hashedPassAlter1679584058587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "completeName" TO "completedName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "completedName" TO "completeName"`);
    }

}
