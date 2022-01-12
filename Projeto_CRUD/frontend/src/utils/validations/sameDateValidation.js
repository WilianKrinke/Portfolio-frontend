export default function sameDateValidation(today,dateDevolution){

    const [dia, mes, ano] = today.split('-')
    const [diaDevolucao, mesDevolucao, anoDevolucao] = dateDevolution.split('-')

    if (dia === diaDevolucao && mes === mesDevolucao && ano === anoDevolucao) {
        return true
    } else {
        return false
    }
}