import PlantCollection from "./PlantCollection";
import { useState } from "react";
import AddPlantForm from "./AddPlantForm";

function CollectionPage({plants, addPlant}) {
    //prevents the form from being viewed until user adds a new plant
    const [showForm, setShowForm] = useState(false)
    
    const handleForm = () => {
        setShowForm(!showForm)
    }
    return (
        <div>
            <h3>Plant Collection</h3>
            <button onClick={handleForm}>
                {showForm ? 'Cancel' : 'Add a Plant'}
            </button>
            {showForm && <AddPlantForm addPlant={addPlant} close={handleForm} />}
            <PlantCollection plants={plants} />
        </div>
    )
}

export default CollectionPage;