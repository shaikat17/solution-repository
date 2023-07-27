const length = Number(prompt("Enter password length: "))

function generatePassword(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
    let password = '';
  
    // Generate at least one character of each type
    password += getRandomChar(uppercase);
    password += getRandomChar(lowercase);
    password += getRandomChar(numbers);
    password += getRandomChar(specialChars);
  
    // Generate remaining characters
    for (let i = 4; i < length; i++) {
      const charType = getRandomInt(4); // 0: uppercase, 1: lowercase, 2: numbers, 3: specialChars
  
      switch (charType) {
        case 0:
          password += getRandomChar(uppercase);
          break;
        case 1:
          password += getRandomChar(lowercase);
          break;
        case 2:
          password += getRandomChar(numbers);
          break;
        case 3:
          password += getRandomChar(specialChars);
          break;
      }
    }
  
    return password;
  }
  
  function getRandomChar(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Test the program
  const password = generatePassword(length);
  console.log(`Generated Password: ${password}`);