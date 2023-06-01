import Model from "./schema.js"

export const createData = async(req,resp) =>{
    try {
        const details = req.body
        const data = await new Model(details).save()
        resp.status(201).send({
            success:true,
            messege:"saved Successfully",
            data
        })


    } catch (error) {
        resp.status(505).send({message:"Data not created",success:false})
    }
}

export const getAllData = async(req,resp) =>{
    try {
        const data = await Model.find({});
        resp.status(200).send({messeage:"data found",data})
    } catch (error) {
        resp.status(404).send({message:"Data Not Found",success:false})
    }
}