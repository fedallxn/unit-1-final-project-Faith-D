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
            <div className="plant-card-body">
                <h3>{plant.name}</h3>
                <p>{plant.species}</p>
                <span className={plant.isToxic ? "badge-toxic" : "badge-safe"}>
                    {plant.isToxic ? "Toxic to Pets" : "Safe for Pets"}
                </span>
                <div className="plant-card-buttons">
                    <button className="btn-danger" onClick={handleDelete}> Remove Plant</button>
                    {showModal && (
                        <ConfirmModal message={`Are you sure you want to remove ${plant.name} from your collection?`} confirm={handleConfirm} cancel={handleCancel} />
                    )}
                    <button className="btn-toggle" onClick={handleToggle}>
                        {showCareInfo ? '-' : '+'}
                    </button>
                    {showCareInfo && (<PlantCareInfo plant={plant} />)}
                </div>
            </div>
        </article>
    )
}

export default PlantCard;