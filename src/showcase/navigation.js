import s from '../images/s.png';
import { facebook, instagram, twitter } from './socialItems.js';

export default (() => {
  const navigation = document.createElement('aside');
  navigation.classList.add(
    'hidden',
    'md:flex',
    'items-center',
    'flex-col',
    'w-64',
    'h-screen',
    'relative',
    'navigation',
  );

  const logo = document.createElement('div');
  logo.classList.add(
    'w-full',
    'md:w-full',
    'bg-no-repeat',
    'logo_height',
    'bg-contain',
  );
  logo.style.backgroundImage = `url(${s})`;

  const navItems = document.createElement('ul');
  navItems.classList.add('navItems', 'mt-28');
  navItems.innerHTML = `
      <li route='#menu'>menu<li>
      <li>contacts<li>
      <li>interior<li>
      <li>about us<li>
  `;


  const socialIttems = document.createElement('ul');
  socialIttems.innerHTML = `
      <li>${facebook}<li>
      <li>${twitter}<li>
      <li>${instagram}<li>
  `;

  socialIttems.classList.add(
    'flex',
    'absolute',
    'bottom-0',
    'left-0',
    'right-0',
    'p-10',
    'justify-between',
  );

  navigation.appendChild(logo);
  navigation.appendChild(navItems);
  navigation.appendChild(socialIttems);
  return navigation;
})();
