# Visualizador de Sobreposição de Fusos Horários

Uma aplicação web interativa para ajudar equipes em fusos horários diferentes a visualizar e encontrar os horários de trabalho que se sobrepõem.

## 🚀 Funcionalidades

- **Seleção de Fusos Horários**: Adicione múltiplos fusos horários com busca inteligente
- **Definição de Horário de Trabalho**: Configure horários de início e fim para cada fuso
- **Visualização em Timeline**: Interface intuitiva com linha do tempo horizontal
- **Destaque de Sobreposições**: Identificação visual clara dos períodos de sobreposição
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Horário em Tempo Real**: Indicador visual do horário atual em cada fuso

## 🛠️ Tecnologias

- **React 18**: Interface de usuário reativa
- **Tailwind CSS**: Estilização moderna e responsiva
- **Luxon**: Manipulação robusta de datas e fusos horários
- **Babel Standalone**: Transpilação JSX no navegador

## 📋 Como Executar

### Opção 1: Servidor Local Simples
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd time-zone-windows

# Instale um servidor HTTP simples (se não tiver)
npm install -g serve

# Execute o servidor
npm start
# ou
npx serve .
```

### Opção 2: Servidor Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Opção 3: Abrir Diretamente
Você pode abrir o arquivo `index.html` diretamente no navegador, mas é recomendado usar um servidor local para evitar problemas de CORS.

## 🎯 Como Usar

1. **Adicionar Fusos Horários**:
   - Use o campo de busca para encontrar cidades ou fusos horários
   - Defina os horários de início e fim do expediente
   - Clique em "Adicionar Fuso Horário"

2. **Visualizar Sobreposições**:
   - As áreas em verde mostram quando TODOS os fusos horários se sobrepõem
   - As áreas em azul mostram os horários de trabalho individuais
   - A linha vermelha indica o horário atual

3. **Gerenciar Fusos**:
   - Clique no "X" para remover um fuso horário
   - Adicione quantos fusos quiser para análise

## 🌍 Fusos Horários Suportados

A aplicação inclui os fusos horários mais populares:
- Brasil (São Paulo)
- Estados Unidos (Nova York, Los Angeles)
- Europa (Londres, Paris, Amsterdã, Berlim)
- Ásia (Tóquio, Xangai, Mumbai)
- Oceania (Sydney, Auckland)
- América Latina (México, Buenos Aires)
- África (Cairo)

## 📊 Exemplo de Uso

Imagine uma equipe com:
- **São Paulo**: 09:00 - 17:00
- **Los Angeles**: 09:00 - 17:00  
- **Amsterdã**: 09:00 - 17:00

A aplicação mostrará automaticamente que o melhor horário para reuniões é **13:00 - 17:00** no horário de São Paulo (que corresponde a 09:00 - 13:00 em Los Angeles e 18:00 - 22:00 em Amsterdã).

## 🎨 Características do Design

- **Interface Moderna**: Design limpo com cantos arredondados e sombras suaves
- **Código Limpo**: Bem comentado e organizado seguindo boas práticas
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Acessível**: Cores contrastantes e navegação intuitiva
- **Performance**: Cálculos otimizados em tempo real

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Interface otimizada para dispositivos móveis

## 🔧 Estrutura do Código

O código está organizado em componentes React bem definidos:

- `App`: Componente principal com gerenciamento de estado
- `TimezoneSelector`: Interface para adicionar novos fusos horários
- `Timeline`: Visualização principal da linha do tempo
- `TimezoneRow`: Linha individual para cada fuso horário

## 📄 Licença

MIT License - Sinta-se livre para usar, modificar e distribuir.
