import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const whatsappUrl =
  'https://wa.me/message/H556YNPSAHT4H1?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20VendAI';

function useSiteEffects() {
  const location = useLocation();

  useEffect(() => {
    const yearNode = document.getElementById('year');
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear();
    }

    const header = document.querySelector('.site-header');
    if (header) {
      const toggleHeader = () => {
        header.classList.toggle('scrolled', window.scrollY > 18);
      };

      toggleHeader();
      window.addEventListener('scroll', toggleHeader, { passive: true });

      return () => window.removeEventListener('scroll', toggleHeader);
    }
  }, [location.pathname]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            target.classList.remove('is-hidden');
          } else {
            target.classList.remove('is-visible');
            target.classList.add('is-hidden');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => {
      item.classList.add('is-hidden');
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}

function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="VendAI home">
            <span className="brand-mark">V</span>
            <span>VendAI</span>
          </Link>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="/#solucoes">Soluções</a>
            <a href="/#beneficios">Benefícios</a>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#contato">Contato</a>
          </nav>

          <div className="header-actions">
            <Link to="/privacy" className="text-link">Privacidade</Link>
            <a href={whatsappUrl} className="button button-primary" target="_blank" rel="noreferrer">
              Falar agora
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Atendimento + vendas em canais que convertem</span>
              <h1 className="hero-title">
                <span className="line block-line"><span>Atenda</span> <span className="gradient-text">rápido           </span></span>
                <span className="line block-line"><span>Potencialize</span> <span className="gradient-text">vendas            </span></span>
                <span className="line block-line"><span>Humanize</span> <span className="gradient-text">conexões              </span></span>
              </h1>
              <p>
                A VendAI foi pensada para ajudar negócios a responder mais rápido,
                vender com mais clareza e transformar mensagens em conversões, usando
                os canais que mais geram relacionamento e confiança hoje.
              </p>

              <div className="hero-actions">
                <a href="#contato" className="button button-primary">Quero vender mais</a>
                <a href="#solucoes" className="button button-secondary">Ver solução</a>
              </div>

              <div className="tag-row" aria-label="Canais principais">
                <span className="tag">WhatsApp</span>
                <span className="tag">Instagram</span>
                <span className="tag">IA humanizada</span>
              </div>

              <ul className="social-proof" aria-label="Frases de impacto">
                <li><strong>IA humanizada</strong><span>atendimento natural</span></li>
                <li><strong>Estoque inteligente</strong><span>texto + imagem</span></li>
                <li><strong>Atendimento 24/7</strong><span>sem parar</span></li>
              </ul>
            </div>

            <div className="hero-visual reveal" aria-label="Dashboard da plataforma VendAI">
              <div className="dashboard-card card-main">
                <div className="dashboard-header">
                  <span className="dot dot-green"></span>
                  <span className="dot dot-purple"></span>
                  <span className="dot dot-yellow"></span>
                </div>

                <div className="dashboard-body">
                  <div className="summary-row">
                    <div>
                      <p>Operação</p>
                      <h3>WhatsApp + Instagram</h3>
                    </div>
                   
                  </div>

                  <div className="chart-bars" aria-hidden="true">
                    <span style={{ height: '36%' }}></span>
                    <span style={{ height: '52%' }}></span>
                    <span style={{ height: '64%' }}></span>
                    <span style={{ height: '58%' }}></span>
                    <span style={{ height: '76%' }}></span>
                    <span style={{ height: '84%' }}></span>
                    <span style={{ height: '96%' }}></span>
                  </div>

                  <div className="lead-list">
                    <div className="lead-row">
                      <div>
                        <strong>Mensagem respondida</strong>
                        <small>em segundos</small>
                      </div>
                      <span className="pill purple">rápido</span>
                    </div>
                    <div className="lead-row">
                      <div>
                        <strong>Lead qualificado</strong>
                        <small>com contexto</small>
                      </div>
                      <span className="pill green">organizado</span>
                    </div>
                    <div className="lead-row">
                      <div>
                        <strong>Venda em andamento</strong>
                        <small>com follow-up</small>
                      </div>
                      <span className="pill gold">conversão</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card card-top">
                <span className="mini-label">Foco</span>
                <strong>Atendimento e vendas</strong>
              </div>

              <div className="floating-card card-bottom">
                <span className="mini-label">Canais</span>
                <strong>WhatsApp + Instagram</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-row" aria-label="Parceiros e marcas">
            <span>NovaMetrica</span>
            <span>FlowNova</span>
            <span>PeakOps</span>
            <span>Elevado</span>
            <span>NorthScale</span>
          </div>
        </section>

        <section id="solucoes" className="section">
          <div className="container section-heading reveal">
            <span className="eyebrow">Soluções</span>
            <h2>Estratégia prática para vender melhor em canais que realmente geram conversa.</h2>
          </div>

          <div className="container feature-grid">
            <article className="feature-card reveal">
              <div className="icon-wrap purple">AI</div>
              <h3>IA humanizada</h3>
              <p>
                Uma inteligência artificial que conversa como um vendedor humano,
                com linguagem natural, atenção real e abordagem que parece feita
                especialmente para cada cliente.
              </p>
            </article>

            <article className="feature-card reveal">
              <div className="icon-wrap green">📦</div>
              <h3>Estoque inteligente</h3>
              <p>
                A IA aprende com o estoque da sua loja em texto e imagem, entendendo
                produtos, disponibilidade e contexto para responder com mais precisão.
              </p>
            </article>

            <article className="feature-card reveal">
              <div className="icon-wrap gold">24/7</div>
              <h3>Atendimento constante</h3>
              <p>
                Sua loja atende todos os dias, a qualquer hora, mantendo respostas,
                orientações e conversões funcionando mesmo fora do expediente.
              </p>
            </article>
          </div>
        </section>

        <section id="beneficios" className="section section-alt">
          <div className="container split-layout">
            <div className="reveal">
              <span className="eyebrow">Benefícios</span>
              <h2>Uma operação comercial mais organizada e mais pronta para vender.</h2>
              <ul className="check-list">
                <li>Atendimento mais humano e natural</li>
                <li>Respostas mais certeiras com base no estoque</li>
                <li>Suporte em qualquer momento do dia</li>
                <li>Mais confiança para o cliente e mais clareza na venda</li>
              </ul>
            </div>

            <div className="stats-panel reveal">
              <div className="stat-box">
                <strong>Velocidade</strong>
                <span>respostas mais rápidas e mais eficientes</span>
              </div>
              <div className="stat-box">
                <strong>Organização</strong>
                <span>contatos, conversas e oportunidades em fluxo</span>
              </div>
              <div className="stat-box">
                <strong>Conversão</strong>
                <span>uma jornada mais clara para vender com confiança</span>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section">
          <div className="container section-heading reveal">
            <span className="eyebrow">Como funciona</span>
            <h2>Um fluxo simples para transformar mensagem em atendimento e venda.</h2>
          </div>

          <div className="container steps-grid">
            <div className="step-card reveal">
              <span>01</span>
              <h3>Receba o contato</h3>
              <p>Mensagens do WhatsApp e do Instagram entram em um processo organizado e centralizado.</p>
            </div>
            <div className="step-card reveal">
              <span>02</span>
              <h3>Qualifique e atenda</h3>
              <p>Use automações, gatilhos e contexto para responder com mais clareza e menos atrito.</p>
            </div>
            <div className="step-card reveal">
              <span>03</span>
              <h3>Feche com confiança</h3>
              <p>Guia o cliente para a próxima etapa com acompanhamento inteligente e mais conversão.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="section cta-section">
          <div className="container cta-panel reveal">
            <div>
              <span className="eyebrow">Vamos vender melhor?</span>
              <h2>Precisamos criar uma operação de atendimento e vendas mais inteligente.</h2>
            </div>
            <a
              href={whatsappUrl}
              className="button button-primary"
              target="_blank"
              rel="noreferrer"
            >
              Falar com a VendAI
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">V</span>
              <span>VendAI</span>
            </Link>
            <p>Plataforma de IA para acelerar a operação comercial.</p>
          </div>

          <div className="footer-links">
            <Link to="/privacy">Política de Privacidade</Link>
            <Link to="/terms">Termos de Serviço</Link>
            <a href="/#contato">Contato</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© <span id="year"></span> VendAI. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}

function LegalPage({ page, eyebrow, heading, children }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="VendAI home">
            <span className="brand-mark">V</span>
            <span>VendAI</span>
          </Link>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="/#solucoes">Soluções</a>
            <a href="/#beneficios">Benefícios</a>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#contato">Contato</a>
          </nav>

          <div className="header-actions">
            <Link to={page === 'privacy' ? '/terms' : '/privacy'} className="text-link">
              {page === 'privacy' ? 'Termos de Serviço' : 'Política de Privacidade'}
            </Link>
            <a href="/#contato" className="button button-primary">Agendar demo</a>
          </div>
        </div>
      </header>

      <main className="legal-page">
        <div className="container legal-shell">
          <div className="legal-header">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{heading}</h1>
          </div>

          <section className="legal-content">{children}</section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">V</span>
              <span>VendAI</span>
            </Link>
            <p>Plataforma de IA para acelerar a operação comercial.</p>
          </div>

          <div className="footer-links">
            <Link to="/privacy">Política de Privacidade</Link>
            <Link to="/terms">Termos de Serviço</Link>
            <a href="/#contato">Contato</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© <span id="year"></span> VendAI. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}

function PrivacyPage() {
  return (
    <LegalPage
      page="privacy"
      eyebrow="Política de Privacidade"
      heading="Como protegemos seus dados e sua privacidade."
    >
      <p>
        Esta Política de Privacidade descreve como a VendAI coleta, usa, armazena,
        compartilha e protege informações pessoais fornecidas por usuários da
        plataforma, visitantes do site e clientes.
      </p>

      <h2>1. Informações coletadas</h2>
      <p>
        Podemos coletar dados como nome, endereço de e-mail, telefone, cargo,
        dados de uso da plataforma, informações de navegação, histórico de
        interações e dados de contato necessários para a prestação do serviço.
      </p>

      <h2>2. Base legal e encarregado</h2>
      <p>
        No Brasil, o tratamento de dados pessoais deve estar respaldado por uma
        base legal prevista na Lei Geral de Proteção de Dados (LGPD), como
        consentimento, execução de contrato, obrigação legal, interesse legítimo
        ou defesa de interesses. Para dúvidas sobre privacidade, o usuário pode
        entrar em contato com a equipe da VendAI por meio do e-mail
        contato@vendai.com.
      </p>

      <h2>3. Uso das informações</h2>
      <p>
        Utilizamos as informações para prestar serviços, aprimorar a experiência do
        usuário, personalizar funcionalidades, manter a segurança da plataforma,
        responder solicitações, cumprir obrigações legais e apoiar processos de
        atendimento e vendas por meio dos canais da empresa.
      </p>

      <h2>4. Dados de menores</h2>
      <p>
        A plataforma não se destina a menores de idade, e não deve ser utilizada por
        pessoas que não tenham capacidade legal para consentir ao tratamento de seus
        dados pessoais, salvo em conformidade com a legislação aplicável.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        As informações podem ser compartilhadas com parceiros e prestadores de
        serviço que atuam sob obrigações de confidencialidade, apenas quando
        necessário para a operação dos serviços, segurança, suporte técnico e
        cumprimento de exigências legais.
      </p>

      <h2>6. Retenção de dados</h2>
      <p>
        Os dados serão armazenados de forma segura durante o período em que a conta
        estiver ativa ou conforme necessário para o cumprimento de obrigações legais,
        fiscais, regulatórias ou para a execução das finalidades descritas nesta
        Política. Após o encerramento do relacionamento ou quando não houver mais
        necessidade legal para a retenção, os dados serão excluídos ou anonimizados,
        salvo previsão em lei ou necessidade razoável de preservação.
      </p>

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger dados contra acesso
        não autorizado, perda, uso indevido ou alteração não consentida. No entanto,
        nenhuma plataforma digital é completamente imune a riscos, e a VendAI busca
        continuamente aprimorar seus controles de segurança.
      </p>

      <h2>8. Direitos do usuário</h2>
      <p>
        O usuário pode solicitar acesso, correção, exclusão, portabilidade, limitação
        do tratamento ou revogação do consentimento relacionado aos seus dados pessoais,
        conforme aplicável e dentro dos limites previstos pela LGPD.
      </p>

      <h2>9. Cookies e tecnologias</h2>
      <p>
        Podemos utilizar cookies e tecnologias semelhantes para melhorar a navegação,
        manter sessão, analisar métricas, personalizar a experiência e compreender melhor
        a forma como os usuários interagem com o site e a plataforma.
      </p>

      <h2>10. Alterações</h2>
      <p>
        Esta política pode ser atualizada periodicamente. A versão mais recente será
        publicada no site e entrará em vigor quando da sua divulgação.
      </p>

      <h2>11. Contato</h2>
      <p>
        Para dúvidas ou solicitações relacionadas à privacidade, entre em contato com
        a equipe da VendAI pelo e-mail: contato@vendai.com.
      </p>
    </LegalPage>
  );
}

function TermsPage() {
  return (
    <LegalPage
      page="terms"
      eyebrow="Termos de Serviço"
      heading="Condições gerais de uso da plataforma VendAI."
    >
      <p>
        Ao acessar ou utilizar a plataforma VendAI, você concorda com estes Termos de
        Serviço. Caso não concorde com qualquer disposição, por favor, não utilize a
        plataforma.
      </p>

      <h2>1. Definição dos serviços</h2>
      <p>
        A VendAI oferece soluções de inteligência artificial e automação para apoiar a
        gestão comercial, prospecção, relacionamento e análise de oportunidades de venda.
      </p>

      <h2>2. Uso aceitável</h2>
      <p>
        O usuário deve utilizar a plataforma de maneira lícita, respeitando direitos de
        terceiros, normas aplicáveis e políticas internas da empresa.
      </p>

      <h2>3. Conta e acesso</h2>
      <p>
        O uso da plataforma pode exigir criação de conta. O usuário é responsável por
        manter a segurança dos seus dados de acesso e informações de autenticação.
      </p>

      <h2>4. Propriedade dos dados do cliente</h2>
      <p>
        Os dados inseridos pelo cliente na plataforma, incluindo leads, históricos de
        conversas, métricas, informações de contato e demais materiais fornecidos pelo
        usuário, continuam sendo de propriedade do cliente. A VendAI apenas processa
        esses dados para prestar o serviço contratado e não se apropria deles para uso
        comercial independente, salvo quando houver autorização expressa do cliente ou
        exigência legal.
      </p>

      <h2>5. Inteligência artificial e supervisão humana</h2>
      <p>
        Os recursos de Inteligência Artificial disponibilizados pela VendAI têm finalidade
        de apoio à tomada de decisão e automação de processos. O usuário reconhece que
        outputs gerados por IA podem eventualmente conter imprecisões, interpretações
        inadequadas ou limitações técnicas. Por isso, as abordagens comerciais, mensagens,
        prospecções e demais sugestões produzidas pela plataforma devem ser revisadas,
        validadas e aprovadas pelo usuário final antes de serem enviadas a clientes ou
        parceiros reais. A VendAI não se responsabiliza por decisões comerciais tomadas
        com base em conteúdo gerado automaticamente sem validação humana.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo, interfaces, marca, software e materiais relacionados à VendAI
        são de propriedade da empresa ou de seus licenciadores e não podem ser copiados,
        distribuídos ou reutilizados sem autorização expressa.
      </p>

      <h2>7. Responsabilidade e limitação de responsabilidade</h2>
      <p>
        A VendAI buscará oferecer serviços com qualidade e segurança, mas não garante
        resultados específicos em processos de venda ou conversão. A empresa não será
        responsável por prejuízos decorrentes de interpretação indevida, uso inadequado,
        ausência de revisão humana ou decisões tomadas com base em conteúdo gerado por IA.
        Em nenhuma hipótese a VendAI será responsável por danos diretos, indiretos,
        incidentais, consequenciais ou especiais decorrentes do uso da plataforma ou da
        indisponibilidade dos serviços.
      </p>

      <h2>8. Disponibilidade e manutenção</h2>
      <p>
        A VendAI se esforça para manter a plataforma disponível e funcional, porém pode
        ocorrer indisponibilidade temporária em razão de manutenção, upgrades, falhas
        técnicas, problemas de infraestrutura ou circunstâncias fora do seu controle.
        Manutenções programadas e eventuais interrupções serão comunicadas quando
        possível, mas não constituem responsabilidade da empresa em casos de falhas não
        previsíveis ou de força maior.
      </p>

      <h2>9. Cancelamento e encerramento</h2>
      <p>
        A VendAI pode, a seu critério, suspender ou encerrar o acesso de usuários que
        violem estes termos, comprometam a segurança da plataforma ou realizem uso indevido.
      </p>

      <h2>10. Alterações dos termos</h2>
      <p>
        Estes termos podem ser alterados periodicamente. A versão vigente será publicada no
        site e continuará aplicável aos usuários a partir da data de divulgação.
      </p>

      <h2>11. Lei aplicável</h2>
      <p>
        Estes termos são regidos pela legislação brasileira, e qualquer controvérsia será
        submetida ao foro da comarca do domicílio da empresa, salvo disposição legal diversa.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para o e-mail: contato@vendai.com.
      </p>
    </LegalPage>
  );
}

export default function App() {
  const location = useLocation();
  useSiteEffects();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
