import PlantCollection from "./PlantCollection";

function CollectionPage({plants}) {
    return (
        <div>
            <h3>This is the Collection Page!</h3>
            <PlantCollection plants={plants} />
        </div>
    )
}

export default CollectionPage;