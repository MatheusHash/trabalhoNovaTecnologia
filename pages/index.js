import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <div className={styles.img}></div>



      <div className={styles.container}>

        <div className={styles.navbar}>
          <nav className={styles.menu}>
              <a className={styles.link} href="#planejamento">Planejamento de Recursos</a>
              <a className={styles.link} href='#gestao'>Gestão de Relacionamento</a>
              <a className={styles.link} href='#escolha'>Qual escolher</a>
              <a className={styles.link} href='#conclusao'>Conclusão</a>        
          </nav>
        </div>
        
        <Head>
          <title>Sistema da informação na empresa</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
        
          <div className={styles.flex}>{/* Colocar imagem de fundo */}

            <p className={styles.description}>
              Principais características e qual escolher?
            </p> 
            <Text fontSize='20px'className={styles.flex}>
              Sistema de informação pode ser dito como um conjunto formado por pessoas,
              software, hardware, procedimentos e dados. Onde fica responsável por 
              difundir as informações através da organização. 
            </Text>
          </div>
        
          <div id='planejamento' className={styles.altura}>
            <div>
              <h2>Planejamento de Recursos Empresariais - (ERP)</h2>
              <Text fontSize='20px'>
                Basicamente é &apos Um pacote de software de negócios que permite a uma companhia automatizar e integrar 
                a maioria de seus processos de negócios &apos(Souza & Zwicker, 2000).
              </Text>
              <Text fontSize='20px'>
                Sendo um dos principais modelos a serem utilizados em uma empresa, o ERP (Enterprise Resource Planning)
                é um software de desenvolvimento para gerenciar os departamentos de um negócio.
              </Text>

              <Text fontSize='20px'>
                Esse método mantém as informações centralizadas em um lugar agilizando os processos
                de tomada de decisão entre as principais vantagens temos um aumento na comunicação 
                e conexão das áreas, além disso também melhora a transparência um exemplo seria para 
                monitorar um estoque.
              </Text>
            
              <Text fontSize='20px'>
                Esse método gera uma maior segurança nos dados e otimização dos 
                custos de TI melhorando o planejamento.
              </Text>
            </div>
            <div className={styles.flex_vid}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GsshtMhb8b0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div id='gestao' className={[styles.flex]}>
            <div className={styles.tamanho}>
              <h2>Gestão de Relacionamento com o Cliente - (CRM)</h2>
              <Text fontSize='20px'>
                Ele tem como principal funcionalidade impactar os clientes de maneira 
                objetiva tornando-se muito útil a um time de vendas devido às suas funções e rotinas.
              </Text>
              <Text fontSize='20px'>
                Basicamente o CRM leva em conta as características do clientes estando
                voltado principalmente a ele podendo ser adaptado a outros pontos de trabalho
                como pesquisas sobre fornecedores, redução da rotatividade, identificação
                de diferenciais competitivos dentre outros.
              </Text>
            </div>
            <div className={[styles.tamanho]}>
              <Image src="/CRM.png" alt="CRM" width={300} height={300} />
            </div>
          </div>
          
          <div className={[styles.flex]}>
            <div className={styles.tamanho}>
              <Image src="/BPM.jpeg" alt="BPM" width={300} height={300} />
            </div>
            <div className={styles.tamanho}>
              <h2>Gestão de Processos de Negócios (BPM)</h2>
              <Text fontSize='20px'>
                Basicamente formado por um conjunto de práticas de gestão e seu principal
                foco é a área de identificação e avaliação de oportunidades.
              </Text>
              <Text fontSize='20px'>
                Visando conhecer a fundo todos os processos da empresa mostrando o desempenho 
                individual tanto de equipes quanto de áreas importantes para que possa ser tomada a melhor decisão.
              </Text>
              
              <Text fontSize='20px'>
                O software fica responsável por ajudar a direcionar todos os processos e encontrar
                gargalos nas operações e direcionamentos de recursos da empresa.
              </Text>
            </div>

           

          </div>


          <div id='escolha' className={styles.flex}>
            <div>
              <h2>Qual escolher?</h2>
              <Text fontSize='20px'>
                Existem muitos outros sistemas disponíveis no mercado e por causa disso você 
                deve ter em mente as principais necessidades de sua empresa.
              </Text>
              <Text fontSize='20px'>
                Fora isso avaliar os benefícios que o sistema pode te trazer pensando em quais 
                as função que o sistema de gestão completo precisa ter.
              </Text>

              <h2 id='conclusao' >Conclusão</h2>
              <Text fontSize='20px'>
                Fica claro que o avanço da tecnologia gera maneiras de otimizar
                um negócio, o que deixa de ser um luxo das grandes corporações
                e se torna necessário para todos independente do tamanho da sua empresa.
              </Text>
            </div>
            
          </div>
        </main>
      <div className={[styles.flex2]}>
        <div >
          <Text fontSize='10px'>
            Alunos:
          </Text>
          <Text fontSize='10px'>
            Thiago Silva de Paula
          </Text>
          <Text fontSize='10px'>
            Matheus Ferreira Pimenta
          </Text>
        </div>
        
        <footer className={[styles.footer]}>
          <a
            href="https://portal.pas.ifsuldeminas.edu.br/images/1_Campus_Passos/2018/Logo_IF_Hor.png"
            target="_blank"
            rel="noopener noreferrer"
          >
             
            <span className={styles.logo}>
              <Image src="/Logo_IF_Hor.png" alt="If-Passos" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
        
    </div>
    </>
  )
}
