import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBooks1648498170463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                      },
                    {
                        name: "titulo",
                        type: "varchar"
                    },
                    {
                        name: "autor",
                        type: "varchar"
                    },
                    {
                        name: "isbn",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "category_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [{
                    name: "fk_livros_category",
                    columnNames: ["category_id"],
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"]
                }]
            })
        )       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}
