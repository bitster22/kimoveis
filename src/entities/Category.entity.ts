import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";

@Entity("categories")
export class Category{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 45, unique: true})
    name: string

    @OneToMany(()=>RealEstate, (re)=>re.category)
    realEstate: Array<RealEstate>;
}