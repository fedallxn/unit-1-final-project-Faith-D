function PlantCareInfo({plant}) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Watering Frequency:</th>
                    <td>Every {plant.wateringFrequency} days</td>
                </tr>
                <tr>
                    <th>Light Requirement:</th>
                    <td>{plant.sunlightNeeds}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PlantCareInfo;