import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import PlantCareInfo from "./PlantCareInfo";

function PlantCard({plant, deletePlant}) {
    const [showModal, setShowModal] = useState(false);
    const [showCareInfo, setShowCareInfo] = useState(false);

    const handleDelete = () => {
        setShowModal(true)
    }

    const handleConfirm = () => {
        deletePlant(plant.id)
        setShowModal(false)
    }

    const handleCancel = () => {
        setShowModal(false)
    }

    const handleToggle = () => {
        setShowCareInfo(!showCareInfo)
    }

    return (
        <article className="plant-card">
            <img src={plant.image} alt={plant.imageAlt} />
            <h3>{plant.name}</h3>
            <p>{plant.species}</p>
            <button onClick={handleDelete}> Remove Plant</button>
            {showModal && (
                <ConfirmModal message={`Are you sure you want to remove ${plant.name} from your collection?`} confirm={handleConfirm} cancel={handleCancel} />
            )}
            <button className="toggle-button" onClick={handleToggle}>
                {showCareInfo ? '-' : '+'}
            </button>
            {showCareInfo && (<PlantCareInfo plant={plant} />)}
        </article>
    )
}

export default PlantCard;