import { RequestHandler, response } from "express";
import { Doctor} from "../models/doctor.model";
import { request } from "http";
import { error } from "console";
import { Error } from "sequelize";

//Me trae todos los pacientes
export const getDoctores:RequestHandler=async(request, response)=>{
    try{
        const doctores=await Doctor.findAll()
        response.status(200).json({
            message:"Operacion Exitosa",
            doctores: doctores
        })

        
            
    }
    catch(error){
        const err= error as Error
        response.status(500).json({
            message:"Error al obtener los doctores",
            error: err.message
        })

    }

}

export const getDoctoresByID:RequestHandler=async(request, response)=>{
    try{
        const DoctorByID=await Doctor.findByPk(request.params.id)

        if(DoctorByID){
            response.status(200).json({
                message:"Doctor traido con exito",
                Doctor:DoctorByID
            })

        }else{
            response.status(404).json({
                message:"Doctor no encontrado"
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

export const CreateDoctor:RequestHandler=async(request, response)=>{
    try {
        const DoctorCreado=await Doctor.create(request.body)
        response.status(201).json({
            message:"Doctor creado con éxito!",
        })

        
    } catch (error) {
        const err = error as Error
        response.status(500).json({
            message:"Error al crear el paciente",
            error:err
        })

    }
}

export const UpdateDoctor:RequestHandler=async(request, response)=>{
    try {
        const doctorBusqueda=await Doctor.findByPk(request.params.id)
        if(!doctorBusqueda){
            response.status(400).json({
                message:"El doctor no existe"
            })
        }else{
            const doctorUpdate=await Doctor.update(request.body,{where:{id_numeroCedula:request.params.id}})
            response.status(200).json({
                Message:"Doctor actualizado con exito"
            })
        }
        
    } catch (error) {
        const err=error as Error;
        response.status(500).json({
            error:err
        })
        
    }
}

export const DeleteDoctor:RequestHandler=async(request, response)=>{
    try {
        const doctorBusqueda=await Doctor.findByPk(request.params.id)
        if(!doctorBusqueda){
            response.status(400).json({
                message:"El Doctor no existe"
            })
        }else{
            const doctorDelete=await Doctor.destroy({where:{id_numeroCedula:request.params.id}})

            response.status(200).json({
                Message:"Doctor eliminado con exito"
            })
        }

        
    } catch (error) {
        const err = error as Error;
        response.status(500).json({
            error:err
        })
        
    }
}