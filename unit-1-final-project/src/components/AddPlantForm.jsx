import { useState } from "react";

function AddPlantForm() {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }
    return (

    )
}

export default AddPlantForm;