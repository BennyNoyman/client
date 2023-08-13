//1
const name = document.getElementById('name');
const email = document.getElementById('email');
const image = document.getElementById('image');
const age = document.getElementById('age');
const button = document.getElementById('button');
async function getUserInformation() {
    const user = await fetch('https://randomuser.me/api', {method:'get'});
    return await user.json();
}
button.addEventListener('click', async () => {
    const userData = await getUserInformation();
    const user = userData.results[0];
    console.log(user);
    name.textContent = user.name.first+user.name.last;
    email.textContent = user.email;
    image.src = user.picture.large;
    age.textContent = user.dob.age;
})