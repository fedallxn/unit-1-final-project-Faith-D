import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function PlantCard({plant, deletePlant}) {
    const [showModal, setShowModal] = useState(false);

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

    return (
        <article className="plant-card">
            <img src={plant.image} alt={plant.imageAlt} />
            <h3>{plant.name}</h3>
            <p>{plant.species}</p>
            <button onClick={handleDelete}> Remove Plant</button>
            {showModal && (
                <ConfirmModal message={`Are you sure you want to remove ${plant.name} from your collection?`} confirm={handleConfirm} cancel={handleCancel} />
            )}
        </article>
    )
}

export default PlantCard;