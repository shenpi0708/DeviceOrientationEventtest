if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
DeviceOrientationEvent.requestPermission()
.then(permissionState => {
alert(permissionState);    
if (permissionState == 'granted') {
    
    window.addEventListener('deviceorientation', function(event) {
        var a = document.getElementById('alpha')
                b = document.getElementById('beta')
                g = document.getElementById('gamma')
                alpha = event.alpha
                beta = event.beta
                gamma = event.gamma

        a.innerHTML = Math.round(alpha);
        b.innerHTML = Math.round(beta);
        g.innerHTML = Math.round(gamma);
            }, false);
}
}

)
.catch(console.error);
} else {
window.addEventListener('deviceorientation', function(event) {
    var a = document.getElementById('alpha')
            b = document.getElementById('beta')
            g = document.getElementById('gamma')
            alpha = event.alpha
            beta = event.beta
            gamma = event.gamma

    a.innerHTML = Math.round(alpha);
    b.innerHTML = Math.round(beta);
    g.innerHTML = Math.round(gamma);
        }, false);
}
