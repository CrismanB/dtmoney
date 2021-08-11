import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvovimente de Website</td>
            <td className={"deposit"}>R$ 12.000,00</td>
            <td>Freela</td>
            <td>20/02/23</td>
          </tr>
          <tr>
            <td>Desenvovimente de Website</td>
            <td className={"withdraw"}>R$ 12.000,00</td>
            <td>Freela</td>
            <td>20/02/23</td>
          </tr>
          <tr>
            <td>Desenvovimente de Website</td>
            <td>R$ 12.000,00</td>
            <td>Freela</td>
            <td>20/02/23</td>
          </tr>
          <tr>
            <td>Desenvovimente de Website</td>
            <td>R$ 12.000,00</td>
            <td>Freela</td>
            <td>20/02/23</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
