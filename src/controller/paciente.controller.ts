import { RequestHandler, response } from "express";
import { Paciente } from "../models/paciente.model";
import { request } from "http";
import { error } from "console";
import { Error } from "sequelize";

//Me trae todos los pacientes
export const getPacientes:RequestHandler=async(request, response)=>{
    try{
        const pacientes=await Paciente.findAll()
        response.status(200).json({
            message:"Operacion Exitosa",
            pacientes: pacientes
        })

        
            
    }
    catch(error){
        const err= error as Error
        response.status(500).json({
            message:"Error al obtener los pacientes",
            error: err.message
        })

    }

}

export const getPacientesByID:RequestHandler=async(request, response)=>{
    try{
        const pacienteByID=await Paciente.findByPk(request.params.id)

        if(pacienteByID){
            response.status(200).json({
                message:"Paciente traido con exito",
                paciente:pacienteByID
            })

        }else{
            response.status(404).json({
                message:"Paciente no encontrado"
            })
        }
    }
    catch(error){
        const err = error as Error
        response.status(500).json({
            message:"Error al obtener los pacientes",
            error:err

        })

    }
}

export const CreatePacientes:RequestHandler=async(request, response)=>{
    try {
        const pacienteCreado=await Paciente.create(request.body)
        response.status(201).json({
            message:"Paciente creado con éxito!",
        })

        
    } catch (error) {
        const err = error as Error
        response.status(500).json({
            message:"Error al crear el paciente",
            error:err
        })

    }
}

export const UpdatePacientes:RequestHandler=async(request, response)=>{
    try {
        const pacienteBusqueda=await Paciente.findByPk(request.params.id)
        if(!pacienteBusqueda){
            response.status(400).json({
                message:"El paciente no existe"
            })
        }else{
            const pacienteUpdate=await Paciente.update(request.body,{where:{id_numeroCedula:request.params.id}})
            response.status(200).json({
                Message:"Paciente actualizado con exito"
            })
        }
        
    } catch (error) {
        const err=error as Error;
        response.status(500).json({
            error:err
        })
        
    }
}

export const DeletePaciente:RequestHandler=async(request, response)=>{
    try {
        const pacienteBusqueda=await Paciente.findByPk(request.params.id)
        if(!pacienteBusqueda){
            response.status(400).json({
                message:"El paciente no existe"
            })
        }else{
            const pacienteDelete=await Paciente.destroy({where:{id_numeroCedula:request.params.id}})

            response.status(200).json({
                Message:"Paciente eliminado con exito"
            })
        }

        
    } catch (error) {
        const err = error as Error;
        response.status(500).json({
            error:err
        })
        
    }
}