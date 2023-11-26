import { timeStamp } from 'console';
import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import { Paciente } from './paciente.model';
import { Cita } from './cita.model';

@Table({
    timestamps : false,
    tableName : 'doctor',

})
//decorador lo usa ts para q    ue sequelize lo entienda y cree las columnas, se parece a un class, que en si lo es, pero sequelize lo entiende de otra forma
export class Doctor extends Model {
    //creamos el atributo y el decorador de cada columna, número de cedula
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_numeroCedula!:number

    //creamos el atributo y el decorador de cada columna, nombre
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre!: string

    //creamos el atributo y el decorador de cada columna, apellidos
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    apellidos!:string

    //creamos el atributo y el decorador de cada columna, fecha de nacimiento
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    correo!:Date
    //creamos el atributo y el decorador de cada columna, telefono
    @Column({
        type:DataType.ENUM("medicina_interna", 'medicina_general'),
        allowNull:false
    })
    especialidad!:string
    //Un doctor puede tener muchas citas
    @HasMany(()=>Cita)
    cita!:Cita[]



}
