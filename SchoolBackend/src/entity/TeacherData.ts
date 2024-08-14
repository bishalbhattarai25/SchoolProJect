import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeacherData{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Fullname:string;
} 