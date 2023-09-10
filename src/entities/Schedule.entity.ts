import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";
import { User } from "./User.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (re) => re.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedule)
  user: User;
}
