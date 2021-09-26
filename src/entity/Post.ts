import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column({
        type: "text"
    })
    content: string;

    @Column()
    image: string;

    @OneToOne((_type) => User)
    @JoinColumn()
    user: User
}