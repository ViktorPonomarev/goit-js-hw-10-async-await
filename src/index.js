import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

/*Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.
 */
import { fetchCountries } from './fetchCountries';

// Достаём елементы
const refs = {
    inputForm: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
// Применить приём Debounce
refs.inputForm.addEventListener('input',
    debounce(onInputChenge, DEBOUNCE_DELAY));

    // Cанитизация введенной строки методом trim()
async function onInputChenge() {
    const name = refs.inputForm.value.trim();
    if (name === '') {
        return ((refs.countryList.innerHTML = ''),
        (refs.countryInfo.innerHTML = ''));
    }

    // Связываем логику с функционалом
    
    const data = await(name);
    console.log(data);

        try {
            refs.countryList.innerHTML = '';
            refs.countryInfo.innerHTML = '';

            // Интерфейс с помощъю библиотеки Notiflix
            if (response.length > 10) {
                Notiflix.Notify.info(
                    'Too many matches found. Please enter a more specific name.'
                );
            } else if (response.length < 10 && response.length >= 2) {
                refs.countryList.insertAdjacentHTML(
                    'beforeend',
                    renderCountryList(response)
                );
            } else {
                refs.countryInfo.insertAdjacentHTML(
                    'beforeend',
                    renderCountryInfo(response)
                );
            }
        }

        catch {

            Notiflix.Notify.failure('Oops, there is no country with that name');
        return [];
           
            }
            
            
           
            
      
        
    

    //   fetchCountries(name)
    //     .then(response => { 
    //         console.log(response);
    //         refs.countryList.innerHTML = '';
    //         refs.countryInfo.innerHTML = '';
    //         // Интерфейс с помощъю библиотеки Notiflix
    //         if (response.length > 10) {
    //             Notiflix.Notify.info(
    //                 'Too many matches found. Please enter a more specific name.'
    //             );
    //         } else if (response.length < 10 && response.length >= 2) {
    //             refs.countryList.insertAdjacentHTML(
    //                 'beforeend',
    //                 renderCountryList(response)
    //             );
    //         } else {
    //             refs.countryInfo.insertAdjacentHTML(
    //                 'beforeend',
    //                 renderCountryInfo(response)
    //             );
    //         }
            
    //     })
        
    //     // Ошибку со статус кодом 404 - не найдено, с помощъю библиотеки Notiflix!
    //   .catch(() => {
    //     Notiflix.Notify.failure('Oops, there is no country with that name');
    //     return [];
    // });
 
}
// Оформили флаг и название страни
function renderCountryList(contries) {
    return contries
        .map(({ flags, name }) => {
            return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `;
        })
        .join('');
}

// Оформили список Фильтрация полей c информацией
 
function renderCountryInfo(contries) {
    return contries
        .map(({ flags, name, capital, population, languages }) => { 
            return `
      <img width="50px" height="50px" src='${flags.svg}' 
      alt='${name.official} flag' />
        <ul class="country-info__list">
            <li class="country-info__item"><p><b>Name: </b>${name.official}</p></li>
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages)}</p></li>
        </ul>
        `;
        })
    .join('');
}