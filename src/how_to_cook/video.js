import videoUrl from '../../armenian_khashlama.mp4';

export default (() => {
  const videoSection = document.createElement('div');
  videoSection.classList.add('w-full', 'h-96', 'focus:outline-none');

  const player = document.createElement('video');
  player.classList.add('w-full', 'h-full', 'object-cover');
  player.autoplay = true;
  player.loop = true;
  player.muted = true;
  player.preload = true;

  const source = document.createElement('source');
  source.setAttribute('src', videoUrl);
  source.setAttribute('type', 'video/mp4');

  player.appendChild(source);
  videoSection.appendChild(player);
  return videoSection;
})();
