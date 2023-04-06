import api from "../support/PageObjects/api";

describe('Exemplo de uso da classe API', () => {
  it('Obtém os dados do endpoint PMS e verifica o status 200', () => {
    api.getPMS()
      .then((response) => {
        expect(response.status).to.eq(200);
        // Faça outras verificações nos dados da resposta, se necessário
      });
  });

  it('Obtém os dados do endpoint runners para um PMS específico e verifica o status 200', () => {
    const pmsId = 123; // Defina o ID do PMS desejado
    api.getRunners(pmsId)
      .then((response) => {
        expect(response.status).to.eq(200);
        // Faça outras verificações nos dados da resposta, se necessário
      });
  });
});
