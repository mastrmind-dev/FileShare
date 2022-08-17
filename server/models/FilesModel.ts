import mongoose, {Document} from 'mongoose'

const fileSchema = new mongoose.Schema({
    file_name:{
        type:String,
        required:true
    },
    secure_url:{
        type:String,
        required:true
    },
    format:{
        type:String,
        required:true
    },
    size_in_bytes:{
        type:String,
        required:true
    },
    sender:{
        type:String
    },
    receiver:{
        type:String
    }
},{
    timestamps:true
})

interface IFile extends Document{
    file_name:string,
    secure_url:string,
    format:string,
    size_in_bytes:string,
    sender?:string,
    receiver?:string
}

const File = mongoose.model<IFile>("File", fileSchema)

export default File;