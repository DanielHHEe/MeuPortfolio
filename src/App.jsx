import React, { useRef } from 'react';
import eu from './assets/eu.jpeg';
import food from './assets/food.jpeg';
import imc from './assets/imc.jpeg';
import chat from './assets/chat.jpeg';
import tarefas from './assets/tarefas.jpeg';
import './index.css';
import vite from'./assets/vite.png';
import react from './assets/react.png';
import { GithubOutlined } from '@ant-design/icons';
import { InstagramOutlined  } from '@ant-design/icons';


function enviarMensagem(event, nomeRef, mensagemRef) {
  event.preventDefault(); 

  
  const nome = nomeRef.current.value;
  const mensagem = mensagemRef.current.value;
  const telefone = '5599991999125';
  const texto = `Olá, me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto); 
  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;
  window.open(url, '_blank');
}

function portFolio() {
  
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
          <div className='habilidades-vite'>
            <img src={vite} alt="" className='vite'  />
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
       

          <a href="https://www.instagram.com/daniel_herenio/">
            <InstagramOutlined className='insta' />
          </a>
       
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
