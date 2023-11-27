import { timeStamp } from 'console';
import {Table, Column, Model, DataType, HasMany, PrimaryKey, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Doctor } from './doctor.model';
import { Paciente } from './paciente.model';

@Table({
    timestamps : false,
    tableName : 'cita',

})
export class Cita extends Model{

    @Column({
        type:DataType.DATE,
        allowNull:false,
        primaryKey:true

    })
    fecha_hora!:Date

    //Esto quiere decir que la primary key es conformada por dos foreignkey de los modelos doctor y paciente
    @PrimaryKey
    @ForeignKey(()=> Doctor)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    id_profesional!:number

    @PrimaryKey
    @ForeignKey(()=> Paciente)
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    id_paciente!:number
    //Aqui dice que la cita pertenece a un doctor
    @BelongsTo(()=>Doctor)
    doctor!:Doctor
    @BelongsTo(()=>Paciente)
    paciente!:Paciente

    

}