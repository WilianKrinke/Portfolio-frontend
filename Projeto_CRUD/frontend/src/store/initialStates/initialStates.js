const teste = (sessionStorage.getItem('dark') === 'true')
const initialStates = {
    darkMode: false || teste
}

export default initialStates;
