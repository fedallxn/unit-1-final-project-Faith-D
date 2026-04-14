function PlantCareInfo({plant}) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Watering:</th>
                    <td>Every {plant.wateringFrequency} days</td>
                </tr>
                <tr>
                    <th>Lighting:</th>
                    <td>{plant.sunlightNeeds}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PlantCareInfo;