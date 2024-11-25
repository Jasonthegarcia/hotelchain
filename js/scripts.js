const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
  pw.classList.toggle('moveOver')
});

//Hotel location data
import { hotels } from '../data/hotels.js';
console.log(hotels);
const hotelCards=document.querySelector('#cards')

hotels.forEach(hotel => {
  const mySection = document.createElement('section');

  const imgWrapper = document.createElement('div');
  const theImage = document.createElement("img");
  theImage.src = `images/${hotel.photo}`;
  theImage.alt = hotel.name;
  imgWrapper.appendChild(theImage);

  const textWrapper = document.createElement('div');
  const theName = document.createElement("h2");
  theName.textContent = hotel.name;

  const theAddress = document.createElement("address");
  theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

  const thePhone = document.createElement("a");
  thePhone.textContent = hotel.phone;
  thePhone.href = `tel:${hotel.phone}`;

  textWrapper.appendChild(theName);
  textWrapper.appendChild(theAddress);
  textWrapper.appendChild(thePhone);

  mySection.appendChild(imgWrapper);
  mySection.appendChild(textWrapper);
  hotelCards.appendChild(mySection);
});
