const copyclipboard = document.getElementById('copyclipboard');
const copyclipboardcheck = document.getElementById('copyclipboardcheck');


copyclipboard.style.display = 'none';
copyclipboardcheck.style.display = 'none';


const generatePasswordButton = document.getElementById('generatePassword');
const passwordStrength = document.getElementById('passwordStrength');
const passwordResult = document.getElementById('passwordResult');



function generatePassword(length, charset) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

generatePasswordButton.addEventListener('click', () => {

    copyclipboard.style.display = 'block';

    const selectedStrength = passwordStrength.value;
    let password = '';
    
    if (selectedStrength === 'weak') {
        password = generatePassword(6, 'abcdefghijklmnopqrstuvwxyz');
    } else if (selectedStrength === 'normal') {
        password = generatePassword(8, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    } else if (selectedStrength === 'strong') {
        password = generatePassword(12, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
    } else if (selectedStrength === 'veryStrong') {
        password = generatePassword(16, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+');
    }
    
    passwordResult.value = password;
    passwordResult.innerHTML = passwordResult.value
    // console.log(`Generated ${selectedStrength} password: ${password}`);
});
    




copyclipboard.addEventListener('click', () => {
    const password = document.getElementById('passwordResult').value;
    navigator.clipboard.writeText(password)
       .then(() => {
            // console.log('Password copied to clipboard');
            copyclipboardcheck.style.display = 'block';
            setTimeout(() => {
                copyclipboardcheck.style.display = 'none';
            }, 1000);
        })
       .catch(err => {
            console.error('Failed to copy password to clipboard:', err);
        });
    copyclipboard.style.display = 'none';
    copyclipboardcheck.style.display = 'block';

})
