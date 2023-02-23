import { Title } from "@components/Text/Title"
import Accordion from "@components/Accordion"
import React from "react"
import {
  BarContainer,
  ComecarContainer,
  Container,
  DecidiuContainer,
  DuvidaContainer,
  InicioContainer,
} from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho.svg"
import InputButton from "@components/Form/InputButton"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Seta } from "@assets/icons/seta-direita.svg"
import { ReactComponent as Globe } from "@assets/bar/globe.svg"
import { ReactComponent as Lock } from "@assets/bar/lock.svg"
import { Paragraph } from "@components/Text/Paragraph"
import UseLoginStore from "src/stores/form/UseLoginStore"
import { useNavigate } from "react-router-dom"

const MainPage = () => {
  const setEmail = UseLoginStore((state) => state.setEmail)
  const navigate = useNavigate()

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate("/entrar/criar")
  }

  return (
    <Container>
      <InicioContainer>
        <div className="fazerParte">
          <Title size="2xl">Faça parte dessa comunidade</Title>
          <Paragraph size="2xl">
            Entre em grupos, faça amizades e adquira pontos. Tudo isso enquanto
            ajuda outras pessoas e aprende coisas novas com estudantes de
            qualquer lugar do mundo.
          </Paragraph>
          <InputButton
            button={"Fazer Parte"}
            buttonIcon={<Seta />}
            id="fazerparte"
            placeholder="seuemail@email.com"
            icon={<Letter />}
            onChange={handleEmail}
            onClick={handleClick}
          />
        </div>
        <div className="icone">
          <Foquinho />
        </div>
      </InicioContainer>
      <BarContainer>
        <ul className="list">
          <li>
            <Globe />
            <p>Usuários do mundo todo</p>
          </li>
          <li>
            <Lock />
            <p>Projeto open source</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <p>Ganhe pontos e recompensas</p>
          </li>
        </ul>
        <div className="slogan">
          <h3>
            Desenvolvido por <span>estudantes</span>, para{" "}
            <span>estudantes</span>.
          </h3>
        </div>
      </BarContainer>
      <ComecarContainer>
        <div>
          <Title as="h2" size="xl">
            Por onde começar
          </Title>
          <Paragraph size="xl">
            Veja como você pode entrar de cabeça do jeito certo nessa jornada!
          </Paragraph>
        </div>
        <ul className="list">
          <div className="list-1">
            <li>
              <h3>Crie uma conta</h3>
              <p>Leva menos de 5 minutinhos!</p>
            </li>
            <li>
              <h3>Personalize seu perfil</h3>
              <p>
                Na plataforma Fooco, você pode personalizar tudo do seu jeito.
              </p>
            </li>
            <li>
              <h3>Faça novas amizades</h3>
              <p>Ou encontre suas amizades da escola.</p>
            </li>
            <li>
              <h3>Ganhe pontos e prêmios</h3>
              <p>Mostre que você é um grande ancião da comunidade.</p>
            </li>
          </div>
          <div className="list-2">
            <li>
              <h3>Respeito acima de tudo</h3>
              <p>Não seja um bobo! Contribua para um lugar prazeroso.</p>
            </li>
            <li>
              <h3>Diga não ao bullying</h3>
              <p>É possível denunciar usuários mal intencinados.</p>
            </li>
            <li>
              <h3>Não compartilhe qualquer informação</h3>
              <p>Evite compartilhar dados pessoais com desconhecidos</p>
            </li>
            <li>
              <h3>Interaja com a comunidade</h3>
              <p>
                Crie um ambiente confortável para compartilhar conhecimento.
              </p>
            </li>
          </div>
        </ul>
      </ComecarContainer>
      <DuvidaContainer>
        <Title as="h2" size="xl">
          Alguma dúvida?
        </Title>
        <Paragraph size="xl">
          Não encontrou sua dúvida? Entre em contato com
          fooco.contato@hotmail.com
        </Paragraph>
        <div className="items">
          <Accordion
            className="duvidas"
            items={[
              {
                header: "O que é a plataforma Fooco?",
                content:
                  "A plataforma Fooco é um lugar no qual pessoas podem se juntar para trocar conhecimento através do sistema de perguntas e respostas.",
              },
              {
                header: "O que é um projeto Open Source?",
                content: (
                  <>
                    O termo em inglês “open source” significa “código aberto” e
                    se refere ao código-fonte de um site ou aplicativo que pode
                    ser compartilhado com outros usuários. Consulte a{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto"
                    >
                      Wikipédia
                    </a>{" "}
                    para mais informações.
                  </>
                ),
              },
              {
                header: "O que são os pontos?",
                content:
                  "Você ganha pontos conforme suas interações com a comunidade. Exemplo: criar posts, responder posts, fazer amigos e muito mais.",
              },
              {
                header: "Posso fazer qualquer tipo de pergunta na plataforma?",
                content:
                  "Caso sua pergunta seja ofensiva, infringindo as regras da plataforma, você pode ser punido ou silenciado por tempo inderminado.",
              },
            ]}
          />
        </div>
      </DuvidaContainer>
      <DecidiuContainer>
        <div>
          <Title as="h2" size="xl">
            Eai, já se decidiu?
          </Title>
          <Paragraph size="xl">Se junte a nossa comunidade agora</Paragraph>
        </div>
        <div className="input">
          <InputButton
            button={"Fazer Parte"}
            buttonIcon={<Seta />}
            id="fazerparte"
            placeholder="seuemail@email.com"
            icon={<Letter />}
            onChange={handleEmail}
            onClick={handleClick}
          />
        </div>
      </DecidiuContainer>
    </Container>
  )
}

export default MainPage
