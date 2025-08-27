# Azzas Frontend Test - Star Wars Explorer

Frontend de teste para o grupo Azzas - Uma aplicação web para explorar o universo Star Wars usando a API SWAPI.

## 📋 Descrição

Esta é uma aplicação Next.js desenvolvida como teste técnico para o grupo Azzas. O projeto consiste em uma interface web moderna que permite aos usuários explorar informações sobre o universo Star Wars, incluindo personagens, planetas, naves espaciais, veículos e espécies.

## 🚀 Funcionalidades

- **Exploração de Dados Star Wars**: Navegue por diferentes categorias do universo Star Wars
- **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos
- **Navegação Intuitiva**: Sistema de roteamento com páginas dedicadas para cada categoria
- **Integração com API**: Consumo da SWAPI (Star Wars API) para dados em tempo real
- **Componentes Reutilizáveis**: Arquitetura baseada em componentes atômicos e organisms

### Categorias Disponíveis

- 🪐 **Planetas**: Informações sobre planetas do universo Star Wars
- 🚀 **Naves**: Detalhes sobre naves espaciais
- 🚗 **Veículos**: Informações sobre veículos terrestres
- 👥 **Pessoas**: Personagens do universo Star Wars
- 🧬 **Espécies**: Diferentes espécies alienígenas

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js 15.5.0** - Framework React com renderização híbrida
- **React 19.1.0** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5** - Superset do JavaScript com tipagem estática
- **Styled Components 6.1.19** - Biblioteca para estilização CSS-in-JS

### Ferramentas de Desenvolvimento

- **ESLint** - Linting e padronização de código
- **Turbopack** - Bundler ultra-rápido para desenvolvimento

### Requisições HTTP

- **Axios 1.11.0** - Cliente HTTP para consumo da API

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout global da aplicação
│   ├── page.tsx           # Página inicial
│   ├── especies/          # Página de espécies
│   ├── naves/             # Página de naves
│   ├── pessoas/           # Página de pessoas
│   ├── planetas/          # Página de planetas
│   └── veiculos/          # Página de veículos
├── components/            # Componentes React organizados por padrão atômico
│   ├── atoms/             # Componentes básicos (Button, Card, etc.)
│   ├── organisms/         # Componentes complexos (Header, Footer, etc.)
│   └── pages/             # Componentes de página específicos
└── services/              # Serviços para integração com APIs
    └── StarWarsService.ts # Service para consumir a SWAPI
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/mvtoledo83/azzas-frontend-test.git
cd azzas-frontend-test
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

```bash
# Crie um arquivo .env.local na raiz do projeto
NEXT_PUBLIC_BASE_API_URL=https://swapi.dev/api/
```

4. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento com Turbopack
- `npm run build` - Gera o build de produção
- `npm run start` - Executa a aplicação em modo de produção
- `npm run lint` - Executa o linting do código

## 🏗️ Arquitetura

### Padrão de Componentes

O projeto segue o padrão **Atomic Design** para organização dos componentes:

- **Atoms**: Componentes básicos e reutilizáveis (Button, Card)
- **Organisms**: Componentes mais complexos compostos por atoms (Header, Footer, BoxCard)
- **Pages**: Componentes específicos de cada página

### Gerenciamento de Estado

- Estados locais gerenciados com React Hooks
- Sem necessidade de gerenciamento global de estado complexo

### Estilização

- **Styled Components** para CSS-in-JS
- Componentes estilizados co-localizados com a lógica
- Tema consistente em toda a aplicação

## 🌐 Integração com API

O projeto consome a [SWAPI (Star Wars API)](https://swapi.dev/) através do service `StarWarsService`, que oferece métodos para:

- Listagem paginada de recursos
- Busca de recursos específicos por ID
- Tratamento de erros e loading states

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops

## 🤝 Contribuição

Este é um projeto de teste técnico. Para contribuições:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para o grupo Azzas.

## 📞 Contato

**Desenvolvedor**: Marcos Toledo  
**Email**: mvtoledo83@gmail.com  
**GitHub**: [@mvtoledo83](https://github.com/mvtoledo83)

---

Desenvolvido com ❤️ para o teste técnico do **Grupo Azzas**
