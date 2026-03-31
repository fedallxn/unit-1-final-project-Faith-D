import { useState } from "react";
import placeholder from '../assets/plantImages/placeholder.jpg'

function AddPlantForm({plants, addPlant, close}) {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        wateringFrequency: '',
        lightingRequirement: '',
        isToxic: false
    })

    //this handleChange function is diff. from the contact form because it checks the type of input first since a checkbox is boolean
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPlant = {
            id: plants.length + 1,
            name: formData.name,
            species: formData.species,
            wateringFrequency: Number(formData.wateringFrequency),
            lightRequirement: formData.lightRequirement,
            isToxic: formData.isToxic,
            health: 100,
            lastWatered: new Date().toLocaleDateString('en-US'),
            image: placeholder,
            imageAlt: 'Placeholder image for ${formData.name}'
        }

        addPlant(newPlant)
        close()
    }

    return (
        <section>
            <h3>Add a Plant</h3>
            <form onSubmit={handleSubmit}>
                <label>Plant Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Orchid" required />
                </label><br />
                <label>Plant Species:
                    <input type="text" name="species" value={formData.species} onChange={handleChange} placeholder="e.g. Phalaenopsis" required />
                </label><br />
                <label>Watering Frequency (in days):
                    <input type="number" name="wateringFrequency" value={formData.wateringFrequency} onChange={handleChange} min={1} max={30} required />
                </label><br />
                <label>Light Requirement:
                    <select name="lightRequirement" value={formData.lightRequirement} onChange={handleChange} required>
                        <option value=''>-- Select a light requirement --</option>
                        <option value='Low'>Low</option>
                        <option value='Low to Medium'>Low to Medium</option>
                        <option value='Medium Indirect'>Medium Indirect</option>
                        <option value='Medium to Bright Indirect'>Medium to Bright Indirect</option>
                        <option value='Bright Indirect'>Bright Indirect</option>
                        <option value='Bright Direct'>Bright Direct</option>
                    </select>
                </label><br />
                <label>Toxic to Pets?
                    <input type="checkbox" name="isToxic" checked={formData.isToxic} onChange={handleChange} />
                </label><br />
                <button type="submit">Add Plant</button>
            </form>
        </section>
    )
}

export default AddPlantForm;