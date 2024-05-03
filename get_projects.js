const url = 'https://pub-905e1930f62c4043a73e59e819502421.r2.dev/project.json';

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

        //start getting html templates
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
                        imgSource.alt = `placeholder alt text`;
                        //get html for experiences only
                        var templateText = templates.content.querySelector('#project-text').cloneNode(true).content;
                        templateText.getElementById('project-name').innerHTML = `<a href=${entry.link} target='_blank' rel='noopener noreferrer'><strong>${entry.name}</strong></a>`;
                        templateText.getElementById('date').innerHTML = `${entry.date}`; 
                        var skillsList = templateText.getElementById('skills-list');
                        entry.skills.forEach(function(skill, idx) {
                            var listItem = document.createElement('li');
                            listItem.appendChild(document.createTextNode(skill));
                            skillsList.appendChild(listItem);
                        });
                        templateText.getElementById('workedOnBy').innerText += entry.workedOnBy;
                        templateText.getElementById('description').innerText += entry.description;
                        templateText.getElementById('learned').innerText += entry.learned;
                        
                        
                        // // console.log(templateText.querySelector('details summary').innerHTML);
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