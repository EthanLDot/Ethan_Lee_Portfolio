// const url = '/data/education.json';
const url = 'https://pub-905e1930f62c4043a73e59e819502421.r2.dev/education.json';

document.addEventListener('DOMContentLoaded', function() {
// Fetch data from the URL
    fetch(url)
    .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        // Convert the response to JSON
        return response.json();
    })
    .then(data => {
        var templates = document.createElement('template');
        // Handle the JSON data
        console.log('Data fetched:', data);

        // start getting html templates
        fetch('../templates/templates.html')
        .then(response => response.text())
                .then(html => {
                    templates.innerHTML = html;

                    data.forEach(function(entry, idx) {
                        console.log(entry);
                        //get template container
                        var templateContainer = templates.content.querySelector('#entry-template').cloneNode(true).content;
                        //add images
                        var webpSource = (templateContainer.querySelector('#entry-image source[type="image/webp"]'));
                        var avifSource = (templateContainer.querySelector('#entry-image source[type="image/avif"]'));
                        var imgSource = (templateContainer.querySelector('#entry-image img'));
                        webpSource.srcset = `/assets/${entry.imageUrl}.webp`
                        avifSource.srcset = `/assets/${entry.imageUrl}.avif`
                        imgSource.srcset = `/assets/${entry.imageUrl}.jpg`
                        imgSource.alt = `${entry.imageAlt}`;

                        //get html for education
                        var templateText = templates.content.querySelector('#education-text').cloneNode(true).content;
                        templateText.getElementById('education-name').innerHTML = `<a href=${entry.link} target='_blank' rel='noopener noreferrer'><strong>${entry.name}</strong></a>`;
                        templateText.getElementById('location').innerHTML = `${entry.location}`; 
                        templateText.getElementById('date').innerHTML = `${entry.startDate} - ${entry.endDate}`; 
                        var classesList = templateText.getElementById('classes-list');
                        entry.courses.forEach(function(course, idx) {
                            var listItem = document.createElement('li');
                            var dt = document.createElement('dt');
                            var dd = document.createElement('dd');
                            dt.appendChild(document.createTextNode(course.name));
                            dd.appendChild(document.createTextNode(course.description));
                            listItem.appendChild(dt);
                            listItem.appendChild(dd);
                            classesList.appendChild(listItem);
                        });
                        templateText.getElementById('description').innerText = entry.description;
                        templateText.getElementById('takeaway').innerHTML = `<strong>Takeaways:</strong> ${entry.takeaway}`;
                        templateContainer.querySelector('#entry-details').appendChild(templateText);

                        //inserts the content into the actual site
                        document.getElementById('experience').querySelector('div').appendChild(templateContainer);
            
                    })
                })
                .catch(error => {
                    console.error('Error fetching template:', error);
                    return null;
                });
    })
    .catch(error => {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
    });
})