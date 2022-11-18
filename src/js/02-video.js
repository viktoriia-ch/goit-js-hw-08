// IMPORTS
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveCurrentTimeInLocalStorage, 1000));
player.setCurrentTime(getCurrentTime());

// FUNFIONS
function saveCurrentTimeInLocalStorage(evt) {
  const stringify = JSON.stringify({
    seconds: evt.seconds,
  });

  localStorage.setItem(KEY_STORAGE, stringify);
}

function getCurrentTime() {
  const currentTime = localStorage.getItem(KEY_STORAGE);
  // console.log(currentTime);

  const parsedCurrentTime = JSON.parse(currentTime);
  // console.log(parsedCurrentTime);

  return parsedCurrentTime ? parsedCurrentTime.seconds : 0;
}
