function calculateClarifier() {
    // Get input values
    const volume = parseFloat(document.getElementById('volume').value);
    const flowRate = parseFloat(document.getElementById('flowRate').value);
    const surfaceOverflowRate = parseFloat(document.getElementById('surfaceOverflowRate').value);
    const depth = parseFloat(document.getElementById('depth').value);
    const flocculationTime = parseFloat(document.getElementById('flocculationTime').value);
    const sludgeDepth = parseFloat(document.getElementById('sludgeDepth').value);

    // Calculate results
    const retentionTime = volume / flowRate;
    const surfaceArea = flowRate / surfaceOverflowRate;
    const diameter = Math.sqrt((4 * surfaceArea) / Math.PI);
    const inletFlowVelocity = flowRate / (surfaceArea * depth);
    const clarifierVolume = surfaceArea * depth;
    const flocculationZoneVolume = (flowRate * flocculationTime) / 60;
    const sludgeZoneVolume = surfaceArea * sludgeDepth;

    // Display results
    document.getElementById('retentionTime').innerText = `Retention Time: ${retentionTime.toFixed(2)} jam`;
    document.getElementById('surfaceArea').innerText = `Surface Area: ${surfaceArea.toFixed(2)} m²`;
    document.getElementById('diameter').innerText = `Diameter: ${diameter.toFixed(2)} m`;
    document.getElementById('inletFlowVelocity').innerText = `Inlet Flow Velocity: ${inletFlowVelocity.toFixed(2)} m/jam`;
    document.getElementById('clarifierVolume').innerText = `Clarifier Volume: ${clarifierVolume.toFixed(2)} m³`;
    document.getElementById('flocculationZoneVolume').innerText = `Flocculation Zone Volume: ${flocculationZoneVolume.toFixed(2)} m³`;
    document.getElementById('sludgeZoneVolume').innerText = `Sludge Zone Volume: ${sludgeZoneVolume.toFixed(2)} m³`;
}
