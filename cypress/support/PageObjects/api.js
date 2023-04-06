class API {
    constructor() {
      this.baseUrl = 'http://dev.integration.api.vegait.com';
      this.endpoints = {
        PMS: '/api/v1/PMS',
        runners: '/api/v1/PMS/{PmsId}/runners',
      };
      this.currentPmsId = null;
    }
  
    getPMS() {
      return cy.request({
        method: 'GET',
        url: `${this.baseUrl}${this.endpoints.PMS}`,
      })
        .then((response) => {
          const pms = response.body.pms[0]; // Assume que o primeiro PMS na lista é o desejado
          this.currentPmsId = pms.id;
          return response;
        });
    }
  
    getRunners() {
      if (!this.currentPmsId) {
        throw new Error('ID do PMS não definido');
      }
      const url = `${this.baseUrl}${this.endpoints.runners.replace('{PmsId}', this.currentPmsId)}`;
      return cy.request({
        method: 'GET',
        url,
      });
    }
  }
  
  export default new API();
  