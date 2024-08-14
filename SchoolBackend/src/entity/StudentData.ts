import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentData{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Fullname:string;

    @Column()
    Address:string;

    @Column()
    Roll_No:string;
    
    @Column()
    Class:string;

    @Column()
    Guardian_Name:string;

    @Column()
    email:string;

    @Column()
    password:string;
} 