import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    title: string;

    @Column({
        length: 300
    })
    subtitle: string;
    
    @Column({
        type: "text"
    })
    content: string;

    @Column()
    image: string;

    @ManyToOne(_type => User, author => author.posts)
    author: User
}