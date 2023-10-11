// opgave12.1.js
// opgave12.1.js
// opgave12.1.js
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

fetch(earthquakeUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createEarthquakeList(data);
    })
    .catch((error) => {
        console.error("Error fetching earthquake data: ", error);
    });

function createEarthquakeList(data) {
    const earthquakes = data.features.filter((earthquake) => earthquake.properties.mag >= 5);

    earthquakes.sort((a, b) => b.properties.mag - a.properties.mag);

    const table = document.createElement('table');
    table.innerHTML = `
    <thead>
      <tr>
        <th>Magnitude</th>
        <th>Location</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      ${earthquakes
        .map(
          (earthquake) => `
            <tr>
              <td>${earthquake.properties.mag}</td>
              <td>${earthquake.properties.place}</td>
              <td>${new Date(earthquake.properties.time).toUTCString()}</td>
            </tr>
          `
        )
        .join('')}
    </tbody>
  `;

  document.body.appendChild(table);
}
