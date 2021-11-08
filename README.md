# Mini Sistema Financeiro
Esse sistema foi criado e baseado nas linguagens **HTML5, CSS3 e Javascript**, utilizando parte da biblioteca **Bootstrap** para utilizar algumas coisas já pronta.

Esse sistema não tem o intuito de ser um projeto final. Quem sabe um dia...

Foi só um meio de se aplicar meu conhecimento sobre as linguagens e tecnologias aprendidas na *Digital Innovation One* e parte por pesquisa.

*Obs:* O sistema não está responsivo. Mas futuramente irei implementar novas coisas para o seu melhoramento.

---

## Imagens e Algumas Explicações

![telainicial](https://i.imgur.com/je203s6.png)

- Bom, essa é a tela inicial. A única tela do sistema até o momento.
- Ela mostra 3 campos "principais":
  - Saldo/Entrada
    - Aqui será contabilizado todo os seus ganhos (entradas) 
    - **Exemplo**
      - recebeu dinheiro de entrega do ifood de R$40
      - Esse valor será registrado nessa parte de Saldo.
  - Despesa/Saída
    - Aqui será contabilizado todas as suas despesas (saídas) 
    - **Exemplo**
      - realizou pagamento de conta de luz de (supondo) R$90.
      - Esse valor será registrado nessa parte de Despesa.
  - Poupança
    - Aqui será contabilizado todas as suas poupanças 
    - **Exemplo**
      - guardou R$20 em uma conta digital, separada da principal. Ou investiu (acho que investimento entra em parte de despesa, e o ganho desse investimento podendo ir para saldo. Bom, você escolhe.)
      - Esse valor será registrado nessa parte de Poupado.

---

- #### Histórico

  ![historico](https://i.imgur.com/nOPgXvd.png)

  - Aqui será mostrado o histórico de todas as suas transações, com data e hora do registro.
  - Obs: Estou a implementar melhorias nessa parte, como:
    - Scrool na lista
    - Quando chegar no fim do mês ele limpar esses dados, armazenar em uma KEY específica para aquele mês, mostrando toda as transações.
    - Tentar um sistema de gráficos para quem gosta de gráficos. (estilo pizza e etc.)
    - Tentar integrar a um banco de dados mais robusto como o IndexedDB.
    - E muito mais

---

- ### Adicionado transações

  ![formulario](https://i.imgur.com/MN4k4Lx.png)

  - Aqui é o principal que faz o sistema inteiro "funcionar".

  - Esse formulário tu registrará todas as suas transações.

  - #### Campos:

    - Tipo de Transação
      - Entrada
        - Opção para entrada de dinheiro
      - Saída
        - Opção para gastos
      - Poupado
        - Opção (obviamente) para o valor poupado
    - Motivo (descrição)
      - Aqui tu irá colocar uma breve descrição (Esqueci de colocar um tamanho máximo de caracteres).
      - Como:
        - Salário
        - Extra
        - Água
        - Luz
    - Valor
      - Obviamente novamente
      - Campo para colocar o valor desta transação.

---

Bom, como disse, o sistema é simples, mas que poderá se tornar algo maior.

Aos poucos irei implementando mais recursos, novas páginas, e talvez transformar em um sistema completo e de código aberto (open source).

Meu plano é deixar esse sistema Livre e Gratuito.

---

## Aqui é Jefferson, criador do sistema. Venho agradecer por usar/testar o meu sistema. E por me dar essa oportunidade de te prender um pouquinho, isso se significa muito para mim.
