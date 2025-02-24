import React, { useRef } from 'react';
import eu from './assets/eu.jpeg';
import food from './assets/food.jpeg';
import imc from './assets/imc.jpeg';
import chat from './assets/chat.jpeg';
import tarefas from './assets/tarefas.jpeg';
import './index.css';
import react from './assets/react.png';
import { GithubOutlined } from '@ant-design/icons';


function enviarMensagem(event, nomeRef, mensagemRef) {
  event.preventDefault(); // Evita o envio tradicional do formulário

  // Acessando os valores usando as refs
  const nome = nomeRef.current.value;
  const mensagem = mensagemRef.current.value;
  const telefone = '5599991999125';
  const texto = `Olá, me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;
  window.open(url, '_blank');
}

function portFolio() {
  // Criando refs para os campos de nome e mensagem
  const nomeRef = useRef(null);
  const mensagemRef = useRef(null);

  return (
    <div>
      <div className='particulas'></div>
      <nav className="navegacao">
        <ul className="menu">
          <li><a href="#inicio" className='menu-link'>Inicio</a></li>
          <li><a href="#sobre" className='menu-link'>sobre</a></li>
          <li><a href="#projetos" className='menu-link'>Projetos</a></li>
          <li><a href="#contatos" className='menu-link'>Contato</a></li>
          <li><a href="#habilidades" className='menu-link'>Habilidades</a></li>
        </ul>
      </nav>

      <main id="inicio" className="cabecalho">
        <img src={eu} alt="Foto de Daniel Herênio" className='foto-perfil' />
        <h1 className='h1'>Daniel Herênio</h1>
        <p className='cabecalho-sub-titulo'>Desenvolvedor front end</p>

      </main>

      <section id='sobre' className='sobre'>
        <h2 className='sobre-titulo'>Sobre mim</h2>
        <div className='sobre-caixa'>
          <p className='sobre-paragrafo'>
            Sou um desenvolvedor front-end com forte experiência em tecnologias como HTML, CSS, JavaScript e frameworks como React e suas bibliotecas, criando interfaces interativas e responsivas. Embora meu foco principal seja o front-end, também tenho experiência em backend, o que me permite trabalhar de forma mais integrada em projetos completos.
            Tenho conhecimentos básicos em bancos de dados, como MongoDB e PostgreSQL, e estou sempre buscando aprender mais. Além disso, possuo uma boa base em Inteligência Artificial,
            o que me permite aplicar técnicas de IA em soluções mais inovadoras. Minha habilidade em trabalhar com múltiplas camadas do desenvolvimento me torna versátil e capaz de entregar produtos robustos e eficientes.
          </p>
        </div>
      </section>

      <section id='projetos' className='projetos'>
        <h2 className='projetos-titulo'>Meus Projetos</h2>
        <div className='projetos-caixa'>
          <div className='projetos-card'>
            <img src={food} alt="" className='projetos-imagem' />
            <div className='caixa-textos-projeto'>
              <h3 className='info-projetos'>Loja fast food</h3>
              <p className='paragrafos-projetos'>Desenvolvi um projeto de loja de fast food voltado para empresas do setor alimentício, com o objetivo de facilitar a venda de produtos como açaí, hambúrgueres e outros itens típicos desse segmento. A plataforma foi criada para otimizar o processo de vendas e oferecer uma experiência mais eficiente tanto para os clientes quanto para os proprietários de estabelecimentos.</p>
            </div>
          </div>

          <div className='projetos-card'>
            <img src={imc} alt="" className='projetos-imagem' />
            <div className='caixa-textos-projeto'>
              <h3 className='info-projetos'>Calculadora de IMC</h3>
              <p className='paragrafos-projetos'>Desenvolvi um projeto de calculadora de IMC, que permite calcular e visualizar o seu índice de massa corporal de forma rápida e fácil. O projeto já está disponível na web, sendo uma ferramenta prática e funcional para acompanhamento de saúde, especialmente para fins de aprendizado e prática</p>
            </div>
          </div>

          <div className='projetos-card'>
            <img src={tarefas} alt="" className='projetos-imagem' />
            <div className='caixa-textos-projeto'>
              <h3 className='info-projetos'>IA</h3>
              <p className='paragrafos-projetos'>Este projeto tem como objetivo o desenvolvimento de uma inteligência artificial personalizada, que pode ser treinada de acordo com as necessidades específicas de cada empresa. A ideia é criar uma IA capaz de acessar e processar o banco de dados de uma organização, oferecendo respostas e soluções em tempo real. Estou atualmente trabalhando na empresa Autogiro Peças, e o objetivo é criar e treinar essa IA para vendê-la a empresas que buscam melhorar a eficiência no processamento de informações e na tomada de decisões, automatizando processos e otimizando o atendimento ao cliente</p>
            </div>
          </div>
        </div>
      </section>

      <section id='habilidades' className='habilidades'>
        <h1>Habilidades</h1>
        <div className='habilidades-caixa'>
          <div className='habilidades-card' id='habilidades-js'>
            <p className='habilidades-p'>JS</p>
          </div>
          <div className='habilidades-card' id='habilidades-css'>
            <p className='habilidades-p'>CSS</p>
          </div>
          <div className='habilidades-imagem'>
            <img src={react} alt="" className='react' />
          </div>
          <div className='habilidades-card' id='habilidades-tw'>
            <p className='habilidades-p'>HTML</p>
          </div>
        </div>

      </section>

      <section id='contatos' className='contatos'>
        <h2 className='contatos-titulo'>Contatos</h2>
        <form className='formulario-contato' id='formulario' onSubmit={(event) => enviarMensagem(event, nomeRef, mensagemRef)}>
          <div className='grupo-form'>
            <input type="text" className='campo-form' placeholder="Seu nome" ref={nomeRef} />
          </div>
          <div className='grupo-form'>
            <textarea className='campo-form' placeholder="Sua mensagem" rows={4} ref={mensagemRef}></textarea>
          </div>
          <button type="submit" className='botao-form'>Enviar para Whatszaap</button>
        </form>
      </section>

      <section className='rodape'>
        <div className='rodape-tolltip'>

          <div class="tooltip-container">
            <div class="tooltip">
              <div class="profile">
                <div class="user">
                  <div class="img">
                    <img className='eu-png' src={eu} alt="" />
                  </div>
                  <div class="details">
                    <div class="name">Usúario</div>
                    <div class="username">@daniel_herenio</div>
                  </div>
                </div>
                <div class="about">+359 seguidores</div>
              </div>
            </div>
            <div class="text">
              <a class="icon" href="#">
                <div class="layer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="instagramSVG">
                    <a href="https://www.instagram.com/daniel_herenio?igsh=MW0xMXVid2syeDI4Mg==">
                      <svg
                        fill="white"
                        class="svgIcon"
                        viewBox="0 0 448 512"
                        height="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </a>

                  </span>
                </div>
                <div class="text">Instagram</div>
              </a>
            </div>
          </div>
        </div>

        <a href="https://github.com/DanielHHEe">
          <GithubOutlined className='git' />
        </a>
      </section>
      <section className='footer'>
        <p className='titulo-footer'>© Desenvolvido por Daniel Herênio 2025</p>
      </section>
    </div>
  );
}

export default portFolio;
