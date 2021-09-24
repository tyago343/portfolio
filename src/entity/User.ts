import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
