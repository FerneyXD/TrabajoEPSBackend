import { timeStamp } from 'console';
import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import { Cita } from './cita.model';

@Table({
    timestamps : false,
    tableName : 'paciente',

})
//decorador lo usa ts para q    ue sequelize lo entienda y cree las columnas, se parece a un class, que en si lo es, pero sequelize lo entiende de otra forma
export class Paciente extends Model {
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
        type: DataType.DATE,
        allowNull: false,
    })
    fecha_nacimiento!:Date
    //creamos el atributo y el decorador de cada columna, telefono
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    telefono!:string
    //Puede tener muchas citas por lo tanto es un array
    @HasMany(()=>Cita)
    cita!:Cita[]


}
