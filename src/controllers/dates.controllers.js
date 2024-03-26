// TO DO

import { Date } from "../models/Dates";
import { isCompletedDate } from "../services/validateInfo";
import { GetPhoneNumberByUserId, SendMessage } from "../services/whatsappData";

/*
    Crear una recepcion de formuario de:
        Titulo.
        Contenido.
        Fecha de cita.
        Numero de telefono(para envio de mensajes por whatsapp).
        Mensaje cuando agendes.
        Mensaje cercano a la fecha.
        Mensaje si cancelaste la cita.
        Mensaje por si reprogramaste la cita.

*/

export const getDates = async ( req, res )  => {
    try {
        const { id }= req.user;
        const dates = await Date.findAll({
            where:{
                idUser:id
            }
        });
        console.log("Fechas obtenidas: ",dates);
        return res.status(200).json({
            ok:true, 
            msg:"All dates have been taken",
            data:dates,
        });
    } catch ( error ) {
        console.error("There was an error on getting dates: ", error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on date",
            error,
        });
    };
};

export const getDate = async ( req, res ) => {
    try {
        const { id }= req.user;
        const { dateId } = req.params;
        const date = await Date.findOne({
            where:{
                iddate:dateId,
                idUser:id
            }
        })

        return res.status(200).json({
            ok:true, 
            msg:"Date has been taken",
            data:date
        });
    } catch (error) {
        console.error("There was an error on getting date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on getting date",
            error,
        });
    };
} 

export const postDate = async ( req, res ) => {
    const { id } = req.user;
    const { title, description, date } = req.body;
    try {
        const completedDate = isCompletedDate( title, description, date );
        if(!completedDate){
            return res.status(400).json({
                ok:false,
                msg:"bad request, fill all the fields.",
            });
        }
        await Date.create({
            title,
            description,
            date,
            idUser:id
        });
        const userPhone = await GetPhoneNumberByUserId(id);

        const response = await SendMessage( userPhone );
        return res.status(201).json({
            ok:true, 
            msg:"Date created",
            data:{
                userPhone,
                response,
            },
        });
    } catch ( error ) {
        console.error("There was an error on posting date: ",error);
        return res.status(500).json({
            ok:false,
            msg:"There was an error on posting date",
            error,
        });
    };
};

export const patchDate = async (req, res) => {
    const { id } = req.user;
    const { title, description, date } = req.body;
    const { dateId } = req.params; // Obtener el ID de la fecha a actualizar

    try {
        // Verificar si la fecha está completa
        const completedDate = isCompletedDate(title, description, date);
        if (!completedDate) {
            return res.status(400).json({
                ok: false,
                msg: "Bad request, fill all the fields.",
            });
        }

        // Actualizar la fecha en la base de datos
        await Date.update({
            title,
            description,
            date,
            idUser: id
        }, {
            where: {
                iddate: dateId // Actualizar la fecha con el ID proporcionado en los parámetros de la URL
            }
        });

        // Enviar el mensaje después de actualizar la fecha
        const userPhone = await GetPhoneNumberByUserId(id);
        const response = await SendMessage(userPhone);

        return res.status(200).json({
            ok: true,
            msg: "Date updated",
            data: {
                response
            }
        });
    } catch (error) {
        console.error("There was an error on updating date: ", error);
        return res.status(500).json({
            ok: false,
            msg: "There was an error on updating date",
            error,
        });
    }
};

export const deleteDate = async (req, res) => {
    const { id } = req.user;
    const { dateId } = req.params; // Obtener el ID de la fecha a eliminar

    try {
        // Actualizar la propiedad 'deleted' a 1 en lugar de eliminarla realmente
        await Date.update({
            deleted: true // Poner la propiedad 'deleted' en 1
        }, {
            where: {
                iddate: dateId // Actualizar la fecha con el ID proporcionado en los parámetros de la URL
            }
        });

        // Enviar el mensaje después de eliminar la fecha
        const userPhone = await GetPhoneNumberByUserId(id);
        const response = await SendMessage(userPhone);

        return res.status(200).json({
            ok: true,
            msg: "Date Deleted and message sent",
        });
    } catch (error) {
        console.error("There was an error on deleting date: ", error);
        return res.status(500).json({
            ok: false,
            msg: "There was an error on deleting date",
            error,
        });
    }
};
