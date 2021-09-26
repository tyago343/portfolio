import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    @Column({
        length: 50
    })
    lastName: string;

    @Column()
    userName: string;

    @OneToMany(_type => Post, post => post.author)
    posts: Post[]
}
