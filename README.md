# 💱 Conversor de Moedas

Este é um aplicativo mobile de conversão de moedas desenvolvido em **React Native** com **Expo**, que permite ao usuário converter valores entre diferentes moedas em tempo real utilizando uma API externa de taxas de câmbio.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Plataforma](https://img.shields.io/badge/plataforma-mobile-blue)
![Expo](https://img.shields.io/badge/expo-%5E49.0.0-000?logo=expo)

---

## ✨ Funcionalidades

- ✅ Seleção da moeda de origem e destino
- ✅ Conversão em tempo real utilizando a API de câmbio
- ✅ Interface amigável e responsiva
- ✅ Botão para inverter as moedas
- ✅ Exibição do resultado da conversão e da taxa de câmbio usada

---

## 📱 Preview da Interface

<img height="700em"  src="https://github.com/user-attachments/assets/d8bb9d2d-47dc-418a-b349-f34fafd5aa3d">


---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- API: [ExchangeRate API](https://www.exchangerate-api.com/)
- Componentização com `Button`, `Input`, `ResultCard`

---

## 📦 Instalação e Execução

### Pré-requisitos:
- Node.js
- Expo CLI (`npm install -g expo-cli`)

### Passos:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse o diretório
cd seu-repositorio

# Instale as dependências
npm install

# Execute o app com Expo
npm start
```

Você pode escanear o QR code com o app do **Expo Go** em seu celular Android/iOS para visualizar o app.

---

## 🌐 API utilizada

```
https://api.exchangerate-api.com/v4/latest/{moeda}
```

---

## 📁 Estrutura de Pastas

```
📁 src
 ┣ 📁 components
 ┃ ┣ 📄 Button.js
 ┃ ┣ 📄 Input.js
 ┃ ┣ 📄 ResultCard.js
 ┣ 📁 constants
 ┃ ┗ 📄 currencies.js
 ┣ 📁 services
 ┃ ┗ 📄 api.js
 ┣ 📁 Utils
 ┃ ┗ 📄 convertCurrency.js
📄 App.js
📄 app.styles.js
```

---

## 🐞 Possíveis melhorias futuras

- Salvar histórico de conversões
- Animações de transição
- Testes automatizados
- Suporte offline com cache de última taxa

---

## 👨‍💻 Autor

Feito por **𝒜𝒷𝓃𝑒𝓇**  
<br>
📫 [ <a href="mailto: abcdmartins40@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
  </a> 
  <a href="https://www.linkedin.com/in/abner-camargo-b28009258/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>]  

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
