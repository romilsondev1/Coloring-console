# 🎨 coloring-console

Uma biblioteca leve em TypeScript com Programação Orientada a Objetos (POO) para personalizar e colorir textos no terminal.

Ideal para logs mais visuais, ferramentas de CLI ou apenas para deixar seu terminal mais bonito!

---

## 🚀 Instalação

```bash
npm install coloring-console

🧠 Como funciona
A biblioteca usa ANSI escape codes para aplicar cores ao texto do console.

Ela foi construída com POO + TypeScript, sendo modular, extensível e ideal como exemplo de arquitetura limpa em bibliotecas.

___

## 🧪 Exemplo de uso

import coloring from "coloring-console";

console.log(coloring.modify('blue', 'texto de teste'));

console.log(coloring.modify('red', 'Texto vermelho'));

console.log(coloring.modify('yellow', 'Texto amarelo'));

console.log(coloring.modify('green', 'Texto verde'));

## 🎯 Cores disponíveis - V.1.0.0

red, green, blue, yellow, black


🤝 Contribuições
Sinta-se à vontade para enviar PRs, sugestões ou abrir issues!

📄 Licença
ISC © Romilson de Jesus Cavalcante