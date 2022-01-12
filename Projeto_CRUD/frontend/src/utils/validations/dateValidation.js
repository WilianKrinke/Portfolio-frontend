export default function isLate(today,dateDevolution){

    const [dia, mes, ano] = today.split('-')
    const [diaDevolucao, mesDevolucao, anoDevolucao] = dateDevolution.split('-')

    if (ano > anoDevolucao) {
        return true
    } else if(ano === anoDevolucao && mes > mesDevolucao){
        return true
    } else if (ano === anoDevolucao && mes === mesDevolucao && dia > diaDevolucao){
        return true
    } else {
        return false
    }
}