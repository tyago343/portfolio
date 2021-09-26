import { Min } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity("users")
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

    @Column({nullable: false})
    @Min(6)
    userName: string;

    @Column({nullable: false})
    @Min(8)
    password: string;

    @Column("int", { default: 0 })
    tokenVersion: number;

    @OneToMany(_type => Post, post => post.author)
    posts: Post[]
}
