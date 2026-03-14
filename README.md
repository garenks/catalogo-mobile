# 🛍️ Catálogo Mobile

Aplicativo mobile de catálogo de produtos desenvolvido com React Native e Expo, consumindo a API REST do DummyJSON.

---

## 📱 Telas

- **Login** — autenticação com validação de campos
- **Lista de Produtos** — produtos separados por abas (Masculino e Feminino)
- **Detalhes do Produto** — nome, imagem, descrição, preço e desconto
- **Configurações** — logout com modal de confirmação

---

## 🚀 Tecnologias utilizadas

- ⚛️ [React Native](https://reactnative.dev/) — framework para desenvolvimento mobile
- 📦 [Expo](https://expo.dev/) — plataforma para rodar e buildar o app
- 🔷 [TypeScript](https://www.typescriptlang.org/) — tipagem estática para JavaScript
- 🌐 [Axios](https://axios-http.com/) — client HTTP para consumo da API
- 🧭 [React Navigation](https://reactnavigation.org/) — navegação entre telas
- 🎨 [@expo/vector-icons](https://docs.expo.dev/guides/icons/) — biblioteca de ícones
- 🛒 [DummyJSON API](https://dummyjson.com/) — API REST de produtos utilizada

---

## ⚙️ Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [Expo Go](https://expo.dev/go) instalado no celular

### Instalação

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/catalogo-mobile.git
```

**2. Acesse a pasta do projeto:**
```bash
cd catalogo-mobile
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Inicie o projeto:**
```bash
npx expo start
```

**5. Escaneie o QR Code com o app Expo Go no celular.**

---

## 🔐 Credenciais de acesso

| Campo    | Valor   |
|----------|---------|
| Username | admin   |
| Password | 123     |

---

## 📂 Estrutura do projeto
```
catalogo-mobile/
├── src/
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── ProductListScreen.tsx
│   │   ├── ProductDetailScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── components/
│   │   └── ProductCard.tsx
│   ├── services/
│   │   └── api.ts
│   └── styles/
│       ├── LoginStyles.ts
│       ├── ProductListStyles.ts
│       ├── ProductDetailStyles.ts
│       ├── ProductCardStyles.ts
│       └── SettingsStyles.ts
└── App.tsx
```

---

## 🖼️ Prints das telas

<!-- Adicione os prints aqui -->

---

## 👨‍💻 Autor

Desenvolvido por **seu nome** para a disciplina de **Mobile Development** — UniFECAF.
