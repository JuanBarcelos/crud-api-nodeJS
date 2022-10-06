import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Videos";
import { Subject } from "./Subject";

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @OneToMany(() => Video, video => video.room)
  videos: Video[]

  @ManyToMany(() => Subject, subject => subject.rooms)
  subjects: Subject[]
}
