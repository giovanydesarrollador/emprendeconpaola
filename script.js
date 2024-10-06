function updateDateTime() {
    const now = new Date();
    
    // Formatear fecha
    const date = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Formatear hora
    const time = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Obtener localización
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        document.getElementById('location').innerText = `Localización:\nLat: ${latitude}, Lon: ${longitude}`;
    });

    document.getElementById('date').innerText = `Fecha:\n${date}`;
    document.getElementById('time').innerText = `Hora:\n${time}`;
}

// Actualizar cada segundo
setInterval(updateDateTime, 1000);
updateDateTime(); // Llamar una vez al cargar