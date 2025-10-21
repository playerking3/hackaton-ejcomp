'use client'
import { CheckAuth } from "@/Utils/Auth";
import Header from "@/Components/Header";
import ConsultaCard from "@/Components/ConsultaCard";
import { useState } from "react";
import Footer from "@/Components/Footer";

interface formulario {
    nomePet?: string;
    idadePet?: number;
    medico?: string;
    medicoId?: string;
    data?: string;
    desc?: string;
}

export default function Consulta() {
    CheckAuth()

    const [formData, setFormData] = useState<formulario>({})
    const [consultaList, setConsultaList] = useState<formulario[]>([])

    const updateForm = (chave: keyof formulario, valor: string | number | Date) => {
        setFormData((prev) => ({
            ...prev, // Mantém os outros valores do objeto
            [chave]: valor, // Atualiza o parâmetro específico
        }));
        console.log(formData)
    };

    function submitForm(event: React.FormEvent) {
        event.preventDefault();
        setConsultaList((prevList) => [...prevList, formData]); // Atualiza a lista com o novo formulário
        setFormData({}); // Limpa o formulário após o envio
    }

    return (
        <div>
            <Header />
            <div className="grid grid-cols-2 flex-grow">
                <div className="flex flex-col jusify-center items-center">
                    <div className="m-3 w-2/3">
                        <h1 className="text-2xl font-bold text-gray-700 text-center">Minhas consultas</h1>
                        <div className="flex flex-col gap-10 p-2">
                            {consultaList.map((e: formulario, index) => {
                                return <ConsultaCard key={index} nomePet={e.nomePet} idadePet={e.idadePet} medico={e.medico} data={e.data}/>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="p-2 w-2/3">
                        <h1 className="text-2xl font-bold text-gray-700 text-center">Nova consulta</h1>
                        <div className="bg-white shadow-lg rounded-lg border p-8 m-5 border-gray-200">
                            <form action="/Consulta" method="POST" onSubmit={submitForm}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div>
                                            <label htmlFor="NomePet" className="block text-sm font-medium text-gray-700 mb-1">Nome do Pet</label>
                                            <input type="text" name="NomePet" id="NomePet" required pattern="^[A-Za-zÀ-ÿ\s'-]+$" title="Use apenas letras e espaços." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: Rex" onChange={(e) => { updateForm("nomePet", e.target.value) }} value={formData.nomePet || ""} />
                                        </div>
                                        <div>
                                            <label htmlFor="ChoiceMedico" className="block text-sm font-medium text-gray-700 mb-1">Médico</label>
                                            <select id="ChoiceMedico" name="ChoiceMedico" required className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e) => { updateForm("medicoId", e.target.value), updateForm("medico",e.target.selectedOptions[0].innerText)}}  value={formData.medicoId || ""}>
                                                <option value="">Selecione um médico</option>
                                                <option value="dr-joao-silva">Dr. João Silva</option>
                                                <option value="dra-maria-oliveira">Dra. Maria Oliveira</option>
                                                <option value="dr-carlos-souza">Dr. Carlos Souza</option>
                                                <option value="dra-ana-lima">Dra. Ana Lima</option>
                                                <option value="dr-paulo-santos">Dr. Paulo Santos</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="IdadePet" className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                                            <input type="number" name="IdadePet" id="IdadePet" min="0" max="40" required className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: 3" onChange={(e) => { updateForm("idadePet", e.target.value) }}  value={formData.idadePet || ""} />
                                        </div>
                                        <div>
                                            <label htmlFor="DataConsulta" className="block text-sm font-medium text-gray-700 mb-1">Data da Consulta</label>
                                            <input type="datetime-local" name="DataConsulta" id="DataConsulta" required className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" onChange={(e) => { updateForm("data", e.target.value) }}  value={formData.data || ""}/>
                                        </div>
                                    </div>
                                </div>




                                <div>
                                    <label htmlFor="Motivo" className="block text-sm font-medium text-gray-700 mb-1">Motivo da consulta</label>
                                    <textarea name="Motivo" id="Motivo" cols={30} rows={4} required title="Evite caracteres especiais como < ou >." className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Descreva brevemente o motivo..." onChange={(e) => { updateForm("desc", e.target.value) }}  value={formData.desc || ""}></textarea>
                                </div>





                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                                        Agendar Consulta
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}