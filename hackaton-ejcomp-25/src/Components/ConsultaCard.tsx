export default function ConsultaCard({nomePet, idadePet, data, medico}) {
    const dataObj = new Date(data)

    return (
        <div className="bg-blue-200 flex justify-between p-4 rounded-lg">
            <div>
                <p>{nomePet} - {idadePet} Anos</p>
                <p>{medico}</p>
            </div>
            <div className="text-center">
                <p>{dataObj.toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'})}</p>
                <p>{
                    dataObj.toLocaleString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'})
                }</p>
            </div>
        </div>
    )
}