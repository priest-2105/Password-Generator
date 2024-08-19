const generatePasswordButton = document.getElementById('generatePassword');

generatePasswordButton.addEventListener('click', () => {
    const passwordLength = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let securePassword = '';

    for (let i = 0; i < passwordLength; i++) {
        securePassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }


    

    document.getElementById('passwordResult').value = securePassword;

    console.log(securePassword);
});
