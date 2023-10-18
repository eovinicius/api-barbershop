export class DataUtil {
  static convertStringToDate(dataFormatada: string) {
    const partes = dataFormatada.split(' ');
    const dataPartes = partes[0].split('-');
    const horaPartes = partes[1].split(':');

    const ano = parseInt(dataPartes[0]);
    const mes = parseInt(dataPartes[1]) - 1;
    const dia = parseInt(dataPartes[2]);
    const hora = parseInt(horaPartes[0]);
    const minutos = parseInt(horaPartes[1]);

    return new Date(ano, mes, dia, hora, minutos);
  }

  static convertDateToString(data: Date) {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');

    return `${ano}-${mes}-${dia} ${hora}:${minutos}`;
  }
}

// Usando a classe para converter a data formatada em um objeto Date
const dataFormatada = '2023-10-18 9:30';
const data = DataUtil.convertStringToDate(dataFormatada);
console.log(data);

// Usando a classe para converter um objeto Date em data formatada
const dataAtual = new Date();
const dataFormatadaAtual = DataUtil.convertDateToString(dataAtual);
console.log(dataFormatadaAtual);
