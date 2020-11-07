import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity("user")
export class user{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;
    
    @Column()
    email: string;
    
    @Column()
    telefono: string;

    @Column()
    password: string
}