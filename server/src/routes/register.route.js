import { Router } from "express";
import formModel from "../models/form.model.js";

const router = Router();

router.post("/", async (req, res) => {
    const { name, email, mobile_number, college_name, event_name } = req.body;
    if (!name || !email || !mobile_number || !college_name || !event_name) {
        return res.status(400).json({ message: "All fields are required!" })
    }
    try {
        const registerForm = await formModel.create({
            name,
            email,
            mobile_number,
            college_name,
            event_name
        })
        return res.status(201).json({ message: "Form submitted successfully!", registerForm })
    }
    catch (err) {
        return res.status(500).json({
            message: "Error submitting form!",
            error: err.message
        })
    }
})

export default router;