import PlantCard from "./PlantCard";

function PlantCollection({plants}) {
    return (
        <section>
            {plants.length === 0 ? <p>No plants yet! Add your first plant!</p> : 
                plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))
            }
        </section>
    )
}

export default PlantCollection;