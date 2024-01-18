async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(objekt);
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

async function tilføjPerson() {
    const navn = document.getElementById('navn').value;
    const adresse = document.getElementById('adresse').value;
    const person = { navn, adresse };
    try {
        await post('/', person);
        location.reload();
    } catch (fejl) {
        console.log(fejl);
    }
}
