import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import PlantCareInfo from "./PlantCareInfo";

function PlantCard({plant, deletePlant}) {
    const [showModal, setShowModal] = useState(false);
    const [showCareInfo, setShowCareInfo] = useState(false);
    const [speciesInfo, setSpeciesInfo] = useState(null);

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

    const handleToggle = async () => {
        if (!showCareInfo && !speciesInfo) {
            try {
                const response = await fetch(`http://localhost:8080/speciesInfo/${plant.speciesName}`);
                const data = await response.json();
                setSpeciesInfo(data);
            } catch (error) {
                console.error('Error fetching species info:', error);
            }
        }
        setShowCareInfo(!showCareInfo);
    }

    return (
        <article className="plant-card">
            <img src={plant.plantImageURL} alt={`An image of ${plant.speciesName}`} />
            <div className="plant-card-body">
                <h3>{plant.nickname}</h3>
                <p>{plant.speciesName}</p>
                <span className={plant.species.toxic ? "badge-toxic" : "badge-safe"}>
                    {plant.species.toxic ? "Toxic to Pets" : "Safe for Pets"}
                </span>
                <div className="plant-card-buttons">
                    <button className="btn-danger" onClick={handleDelete}> Remove Plant</button>
                    {showModal && (
                        <ConfirmModal message={`Are you sure you want to remove ${plant.nickname} from your collection?`} confirm={handleConfirm} cancel={handleCancel} />
                    )}
                    <button className="btn-toggle" onClick={handleToggle}>
                        {showCareInfo ? '-' : '+'}
                    </button>
                    {showCareInfo && (<PlantCareInfo species={speciesInfo} />)}
                </div>
            </div>
        </article>
    )
}

export default PlantCard;