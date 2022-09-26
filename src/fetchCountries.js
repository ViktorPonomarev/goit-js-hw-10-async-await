/* Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.
 */
 export { fetchCountries };

 /* Напиши функцию fetchCountries(name) которая делает HTTP-запрос на
ресурс name и возвращает промис с массивом стран - результатом запроса. 
 */

  
function fetchCountries(name) {
    
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    
    if (!response.ok) {
        
      throw new Error(response.status);
    }
      
    return response.json();
       
  });
 
}


//  fetchCountries('peru')
//   .then(countries => console.log(countries[0])


// fetch('https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flags,languages')
//     .then(response => {
//         return response.json();
//     })
//     .then(name => {
//         console.log(name);
//     })
//     .catch(error => {
//         console.log(error);
//     });