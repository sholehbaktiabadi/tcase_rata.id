import { DataSource } from "typeorm"
import { User } from "../entity/user"
import { Catalogue } from "../entity/catalogue"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_dumb13",
    synchronize: true,
    logging: true,
    entities: [User, Catalogue],
    subscribers: [],
    migrations: [],
})