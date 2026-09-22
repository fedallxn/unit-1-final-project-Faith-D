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
        deletePlant(plant.plantId)
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
            <img src={plant.plantImageURL} alt={`An image of ${plant.speciesName}`} />
            <div className="plant-card-body">
                <h3>{plant.name}</h3>
                <p>{plant.speciesName}</p>
                <span className={plant.species.toxic ? "badge-toxic" : "badge-safe"}>
                    {plant.species.toxic ? "Toxic to Pets" : "Safe for Pets"}
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