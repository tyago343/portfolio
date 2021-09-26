import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(_type => User, author => author.posts)
    author: User
}