import { useState } from "react";
import { validation } from "../utils/validation";

export function useAdopterData() {

    const [formData, setFormData] = useState({
        petName: '',
        petType: '',
        breed: '',
        yourName: '',
        email: '',
        phone: ''
    });
    const [submitedData, setSubmitedData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name] : value,
        });

    const newErrors = { ...errors};
    validation(name, value, newErrors);
    setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(errors).some((error) => error !== "")){
            alert("Please fix the errors before submitting.");
            return;
        }

        setSubmitedData([
            ...submitedData,
            formData
        ])

        setFormData({
            petName: '',
            petType: '',
            breed: '',
            yourName: '',
            email: '',
            phone: ''
        });
        setErrors({});
        setIsSubmitted(true);
    }

    return { formData, submitedData, handleChange, handleSubmit, isSubmitted, errors }

} 