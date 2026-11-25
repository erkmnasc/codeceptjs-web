Feature('login');

Before(({ I }) => {
    I.amOnPage('/')
})

Scenario('cadastro com sucesso',  ({ I }) => {
    I.click('Cadastro')
    I.waitForText('Cadastro de usuário', 10)
    I.fillField('#user', 'Erick');
    I.fillField('#email', 'erick_teste@gmail.com');
    I.fillField('#password', 'testeteste');
    I.click('Cadastrar')
    I.waitForText('Cadastro realizado!', 5)
}).tag('@cadastrocomsucesso');

Scenario('login com sucesso',  ({ I }) => {
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'teste@gmail.com');
    I.fillField('#password', 'testeteste');
    I.click('#btnLogin')
    I.waitForText('Login realizado', 10)
}).tag('@sucesso')

Scenario('login informando apenas o e-mail',  ({ I }) => {
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'teste@gmail.com');
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 5)
}).tag('@logarapenascomemail');

Scenario('login informando apenas a senha',  ({ I }) => {
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', 'teste');
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)
}).tag('@logarapenascomsenha');

Scenario('login sem e-mail e sem senha',  ({ I }) => {
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)
}).tag('@logarsemdados');
