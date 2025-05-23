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

console.log(coloring.create(
        {
            color: 'blue',
            attributes: 'bold'
        }, 
        'Texto que você quer modificar'
        )
    );


## 🎯 Cores disponíveis 

        'red' | 
        'blue'| 
        'green'| 
        'black'| 
        'yellow'|
        'green'|
        'black'|
        'magenta'|
        'cyan'|
        'white'|
        'light-gray'|
        'light-red'|
        'light-green'|
        'light-yellow'|
        'light-blue'|
        'light-magenta'|
        'light-cyan'|
        'light-white'

## 🎯  Atributos disponíveis 

'bold' | 'underline' | 'blink'

🤝 Contribuições
Sinta-se à vontade para enviar PRs, sugestões ou abrir issues!

📄 Licença
ISC © Romilson de Jesus Cavalcante