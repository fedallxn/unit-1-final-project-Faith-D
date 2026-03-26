function PlantCard({plant}) {
    return (
        <article className="plant-card">
            <img src={plant.image} alt={plant.imageAlt} />
            <h3>{plant.name}</h3>
            <p>{plant.species}</p>
        </article>
    )
}

export default PlantCard;