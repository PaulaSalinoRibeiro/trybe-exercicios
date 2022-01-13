const verifyIsNumber = (value1, value2) => {

  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numericos');
  }
  
}

const sum = (value1, value2) => {

  try {

    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message
  }
}

