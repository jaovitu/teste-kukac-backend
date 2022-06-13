import axios from 'axios';

const getUserAddress = async (cep) => {
  const baseURL = 'https://viacep.com.br/ws';

  try {
    const { data } = await axios.get(`${baseURL}/${cep}/json`);
    return data;

  } catch (error) {
    console.log(error);
  }
};

export default getUserAddress;
