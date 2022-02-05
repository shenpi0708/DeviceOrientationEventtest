function clickk() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            // handle data
            alert('granted')
          } else {
			// handle denied
            alert('err')
          }
        })
        .catch((err) => {
            console.log(err)
        });
    } else {
      // han
      alert('err2')
    }
  }





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
        alert(a);
            }, false);
}
}

)
.catch(console.error);
} else {
// handle regular non iOS 13+ devices
alert('err');
}


// ZZZz