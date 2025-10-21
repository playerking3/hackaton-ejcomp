'use client'
import {CheckAuth} from "@/Utils/Auth";
import Header from "@/Components/Header";
import styles from "./index.module.css"
import Image from "next/image";
import Footer from "@/Components/Footer";

export default function Home() {
    CheckAuth()
    return (
        <div className="font-sans">
            <Header/>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h2>Cuidado completo e carinhoso para seu melhor amigo</h2>
                    <p>
                        Na Pet Lovers, tratamos seu pet como família. Oferecemos consultas, vacinas, cirurgias e exames com
                        a mais alta tecnologia e uma equipe apaixonada.
                    </p>
                    <a href="#" className={styles.ctaButton}>Agende uma Consulta</a>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section className={styles.services}>
                <div className={styles.container}>
                    <h2>Nossos Principais Serviços</h2>
                    <div className={styles.serviceBoxes}>
                        <div className={styles.box}>
                            <h3>Consultas</h3>
                            <p>Check-ups de rotina e diagnósticos precisos para manter seu pet saudável.</p>
                        </div>
                        <div className={styles.box}>
                            <h3>Vacinação</h3>
                            <p>Proteja seu companheiro com nosso calendário de vacinação completo.</p>
                        </div>
                        <div className={styles.box}>
                            <h3>Cirurgias</h3>
                            <p>Equipe especializada e centro cirúrgico moderno para procedimentos seguros.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTATO */}
            <section className={styles.contato}>
                <div className={styles.container}>
                    <h2>Entre em Contato Conosco</h2>
                    <p>
                        Estamos prontos para atender seu pet!<br /> Agende uma visita ou tire suas dúvidas.
                    </p>
                    <ul className={styles.contactInfo}>
                        <li><strong>Telefone:</strong>4002-8922</li>
                        <li><strong>WhatsApp:</strong> (12) 34567-8910</li>
                        <li><strong>Email:</strong> contato@petlovers.com.br</li>
                        <li><strong>Endereço:</strong> Rua dos Animais, 123 - Bairro Pet, Presidente Prudente - PP</li>
                        <li><strong>Horário de Funcionamento:</strong> Seg a Sex: 8h às 18h | Sáb: 9h às 12h</li>
                    </ul>
                </div>
            </section>

            {/* GATINHOS */}
            <div className={styles.gatinhos}>
                <h2>Já pensou em adotar seu próprio Pet?</h2>
                <p>
                    Aqui temos vários amigos que precisam de um lar!<br /> Leia abaixo sobre a personalidade de cada um e adote já.
                </p>

                <div className={styles.containerGatinhos}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/GatoPelado.png" alt="Foto do Gatinho" width={1000} height={1000}/>
                        </div>
                        <div className={styles.conteudo}>
                            <h2 className={styles.conteudoTexto}>Gato Pelado </h2>
                            <p>
                                O Sphynx é um gato <b>brincalhão</b>, <b>curioso</b> e <b>inteligente</b>, adaptando-se
                                bem a novos ambientes e convivendo pacificamente com crianças e outros animais de
                                estimação.
                            </p>
                            <a
                                href="https://www.cobasi.com.br/racas/gato/sphynx?srsltid=AfmBOoogz8Fnks1YmBnUulq_BQKx2g5BoGEgQf6OP_AcSwzRrhIdbK51"
                                target="_blank"
                                className={styles.ctaButton}
                            >
                                Leia Mais
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/aiai.jpg" alt="Foto do Gatinho" width={1000} height={1000}/>
                        </div>
                        <div className={styles.conteudo}>
                            <h2>Gato AiAi </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#" className={styles.ctaButton} target="_blank">Leia Mais</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/aiaiaP3.jpeg" alt="Foto do Gatinho" width={1000} height={1000}/>
                        </div>
                        <div className={styles.conteudo}>
                            <h2>Gato Morcego </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#" className={styles.ctaButton} target="_blank">Leia Mais</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
