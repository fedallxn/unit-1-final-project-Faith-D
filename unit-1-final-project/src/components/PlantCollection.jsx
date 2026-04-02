import PlantCard from "./PlantCard";

function PlantCollection({plants, deletePlant}) {
    return (
        <section>
            {plants.length === 0 ? <p>No plants yet! Add your first plant!</p> : 
                plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} />
                ))
            }
        </section>
    )
}

export default PlantCollection;