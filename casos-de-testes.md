# ◻️ Cenários e Casos de Testes

<br>

## Cenário 01: Login usuário 👤

### CT01: Login com dados válidos
Dado que o usuário esteja na tela “Sign In” do Real World App, quando preencher os campos “Username” e Password” com dados válidos, clicar no checkbox “Remember me” e clicar no botão “Sign In”, então deverá ser direcionado para a página de pós-login.  

### CT02: Login com dados inválidos
Dado que o usuário esteja na tela “Sign In” do Real World App, quando preencher os campos “Username” e “Password” com dados inválidos, clicar no checkbox “Remember me” e clicar no botão “Sign In”, então uma mensagem de erro deverá ser exibida apontando dados inválidos para realizar o login.  

<br>

## Cenário 02: Cadastro de usuário 👤

### CT03: Cadastro realizado com sucesso
Dado que o usuário esteja na tela “Sign Up” do Real World App, quando preencher os campos “First Name”, “Last Name”, “Username”, “Password” e “Confirm Password” corretamente e clicar no botão “Sign Up”, então deverá ser redirecionado à tela de login.

### CT04: Cadastro com dados diferentes nos campos “Password” e “Confirm Password”
Dado que o usuário esteja na tela “Sign Up” do Real World App, quando preencher os campos “Password” e “Confirm Password” com valores diferentes, então uma mensagem de erro de que as informações não são compatíveis em ambos os campos deverá ser exibida.

<br>

## Cenário 03: Enviar dinheiro 💰

### CT05: Enviar dinheiro com saldo suficiente
Dado que o usuário tenho feito login na sua conta, quando clicar no botão “New” do menu, selecionar um contato, especificar a quantia no campo “Amount”, adicionar uma nota no campo “Add a note”, e clicar em “Pay”, então uma mensagem que a transação foi realizada deve ser exibida.

### CT06: Enviar dinheiro com saldo insuficiente
Dado que o usuário tenha feito login na sua conta, quando clicar no botão “New” do menu e selecionar um contato na etapa “Select Contact”, então deve ser feita uma verificação se o saldo em sua conta é ou não suficiente para realizar a transação.

<br>

## Cenário 04: Visualizar histórico de transações

### CT07: Visualizar histórico de transações com sucesso
Dado que o usuário logado tenha realizado transações bancárias anteriores, quando acessar a aba "Mine" de sua conta, então deverão ser exibidas suas transações realizadas.

### CT08: Tentar visualizar o histórico de transações de um usuário sem transações anteriores
Dado que o usuário logado não tenha realizado nenhuma transação bancária anteriormente, quando acessar a aba "Mine" de sua conta, então nenhum registro de transação deve ser exibido em seu histórico.