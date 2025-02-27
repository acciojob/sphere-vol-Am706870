
function volume_sphere(event) {
    event.preventDefault(); 

    
    const valRadius = parseFloat(document.getElementById('radius').value);

    
    if (isNaN(valRadius) || valRadius < 0) {
       
        document.getElementById("volume").value = "NaN";
        return;
    }

    
    const volume = (4 / 3) * Math.PI * Math.pow(valRadius, 3);

    
    document.getElementById("volume").value = volume.toFixed(4);
}


window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};

