import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { TeacherData } from "./entity/TeacherData"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "9843798452",
    database: "School",
    synchronize: true,
    logging: false,
    entities: [User,TeacherData],
    migrations: [],
    subscribers: [],
})
