//1
const name = document.getElementById('name');
const email = document.getElementById('email');
const image = document.getElementById('image');
const age = document.getElementById('age');
const button1 = document.getElementById('button1');
async function getUserInformation() {
    const user = await fetch('https://randomuser.me/api', {method:'get'});
    return await user.json();
}
button1.addEventListener('click', async () => {
    const userData = await getUserInformation();
    const user = userData.results[0];
    name.textContent = user.name.first+user.name.last;
    email.textContent = user.email;
    image.src = user.picture.large;
    age.textContent = user.dob.age;
})
//2
async function get5male() {
    const user = await fetch('https://randomuser.me/api?gender=male&results=5', {method: 'get'});
    return await user.json();
}
const button2 = document.getElementById('button2');
button2.addEventListener('click', async () => {
    const fiveMales = await get5male();
    console.log(fiveMales);
})