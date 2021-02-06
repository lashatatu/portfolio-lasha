import axios from 'axios';
import BaseApi from '@/lib/api/BaseApi';

class PortfolioApi extends BaseApi{

  constructor(accessToken) {
    super(accessToken,'/portfolios')
  }

  getAll() {
    return axios.get(this.apiUrl)
  }

  delete ( id ) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }
}

export default PortfolioApi;