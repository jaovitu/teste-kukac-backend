import calculatePerCapitaIncome from '../utils/calculatePerCapitaIncome.mjs';
import getUserAddress from '../utils/getUserAddress.mjs';

class UserService {
  async getUserInfo(request, response) {
    const { name, cep, monthlyIncome, dependentsNumber } = request.body;

    if (!cep) {
      return response.status(400).json({ error: 'CEP is required.' });
    }

    if (!monthlyIncome) {
      return response.status(400).json({ error: 'Monthly income is required.' });
    }

    if (!dependentsNumber) {
      return response.status(400).json({ error: 'Number of dependents is required.' });
    }

    try {
      const userAddress = await getUserAddress(cep);
      const perCapitaIncome = calculatePerCapitaIncome(monthlyIncome, dependentsNumber);

      const userInfo = {
        name: name || '<UNKNOWN>',
        address: userAddress,
        perCapitaIncome,
      };

      return response.json(userInfo);

    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  }
}

export default new UserService();
