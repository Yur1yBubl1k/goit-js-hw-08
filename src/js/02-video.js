var throttle = require('lodash.throttle');
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const updateLocalStorage = throttle((time) => {
    localStorage.setItem('videoplayer-current-time', time.toFixed(0));
  }, 1000);

const currentTime = function(evt) {
    console.log('Current time:', evt.seconds);
    updateLocalStorage(evt.seconds)
}
 
player.on('timeupdate', currentTime);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const time = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(time).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
    
            break;
        default:
         
            break;
    }
});