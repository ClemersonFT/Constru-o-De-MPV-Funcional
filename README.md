
INTRODUÇÃO


A falta de organização de tarefas é um problema comum tanto para pessoas quanto para pequenas equipes. Muitas vezes, atividades ficam espalhadas entre cadernos, mensagens de WhatsApp ou até mesmo na memória, o que gera desorganização, esquecimento de prazos e perda de controle.
Diante disso, este trabalho propõe o desenvolvimento de um sistema simples com foco na organização de tarefas, seguindo os princípios de construção de um MVP (Produto Mínimo Viável), priorizando simplicidade e funcionalidade.



NOME DO SISTEMA

Nome do sistema: InteliTasks



PROBLEMA

Muitas pessoas enfrentam dificuldades para organizar suas tarefas diárias, acompanhar prazos e visualizar o que já foi concluído.
A falta de um sistema centralizado faz com que as atividades fiquem espalhadas em diferentes meios, causando desorganização e dificultando o controle das responsabilidades.




PÚBLICO-ALVO

O sistema é voltado para pessoas que desejam organizar suas atividades do dia a dia, como:
Estudantes
Profissionais
Pessoas com rotina intensa


OBJETIVO DO SISTEMA

O objetivo do sistema é permitir que o usuário registre, visualize e conclua tarefas de forma simples e organizada.
A proposta é oferecer uma solução prática que ajude no controle das atividades, facilitando a organização pessoal.













ESCOPO DO SISTEMA

Escope IN (o que o sistema faz)

CRUD de tarefas incluindo:
Criar tarefas com Título, Objetivo, Prazo e Descrição;
Listar tarefas por prazo;
Editar tarefas;
Excluir tarefas;

Prioridade de tarefas
As tarefas serão listadas por ordem de prazo, mudando a cor do bloco da tarefa dinamicamente de tons de verde para tons de vermelho para indicar quando um prazo está se esgotando.

Interface simples
O sistema possui uma interface básica, com o nome da pagina, botão para criar tarefa, e interações simples com a tarefa por meio de um botão de excluir, editar e marcar como finalizado

Escope OUT

Notificações automáticas
O sistema não envia alertas e lembretes sobre tarefas ou prazos.

Integração com outros aplicativos
Não há conexão com outros sistemas como Google Calendar ou WhatsApp.

Agendamento com calendário
O sistema não permite marcar tarefas em datas específicas dentro de um calendário.






FUNCIONALIDADES


Requisitos Funcionais(RF):

RF01: O sistema deve permitir criar tarefas por Titulo, Objetivo, Prazo e Descrição;
RF02: O sistema deve listar todas as tarefas;
RF03: O sistema deve permitir editar tarefas;
RF04: O sistema deve permitir excluir tarefas;
RF05: O sistema deve permitir marcar tarefas como concluídas.

Regras de Negocio(RN):

RN01: Tarefas não podem ser criadas sem título, objetivo ou descrição;
RN02: As tarefas devem ser ordenadas por prazo;
RN03: Tarefas devem mudar de cor conforme proximidade do prazo;
RN04: Tarefas concluídas devem ser visualmente diferenciadas. 

Requisitos Não Funcionais(RNF):

RNF01: O sistema deve ter interface simples e intuitiva.
RNF02: O sistema deve ser desenvolvido para o ambiente web
RNF03: O sistema precisa funcionar sem lentidão em nenhuma de suas interações
RNF04: O layout deve ser organizado em formato de grade (grid).


TECNOLOGIA / STACK

	A interface do sistema será desenvolvida em HTML, CSS e JAVASCRIPT. 



DESENVOLVIMENTO

O desenvolvimento do sistema teve início na data de 15/04/2026.
Atualmente, já foram implementados os seguintes requisitos funcionais: 
RF01: criação de tarefas;
RF02: listagem de tarefas em tela.
A estrutura do projeto foi organizada de forma básica, contendo somente os arquivos index.html, index.css e index.js.
Como próximo passo do desenvolvimento, estão previstas as seguintes implementações
As tarefas precisam ser persistidas localmente para não haver perda ao recarregar a página.
Será implementada a organização em GRID para a área de tarefa.
Será aplicado a listagem ordenada por prazos que mudam de cor dinamicamente. 
Também será adicionado os botões de exclusão e edição para cada tarefa criada respectivamente.

CONCLUSÃO

	O projeto já está em fase de desenvolvimento, apresentando funcionalidades básicas de cadastro e visualização de tarefas. Já foi possível validar a identidade visual do projeto que está totalmente alinhada com o que foi proposto. As próximas etapas envolvem a implementação das funcionalidades restantes.












