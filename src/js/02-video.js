// IMPORTS
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveCntTimeInLocalStorage, 1000));
player.setCurrentTime(getCntTime());

// FUNFIONS
function saveCntTimeInLocalStorage(e) {
  const stringify = JSON.stringify({
    seconds: e.seconds,
  });

  localStorage.setItem(KEY_STORAGE, stringify);
}

function getCntTime() {
  const currentTime = localStorage.getItem(KEY_STORAGE);
  const parsedCntTime = JSON.parse(currentTime);
  return parsedCntTime ? parsedCntTime.seconds : 0;
}
