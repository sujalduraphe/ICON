import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile_number: {
            type: String,
            required: true,
        },
        college_name: {
            type: String,
            required: true,
        },
        event_name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

formSchema.index(
    { email: 1, event_name: 1 },
    { unique: true }
);

const formModel = mongoose.model("form", formSchema);

export default formModel;