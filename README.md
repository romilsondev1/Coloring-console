# 🎨 coloring-console

A lightweight and elegant **TypeScript** library to **customize and colorize terminal output** using clean **Object-Oriented Programming (OOP)**.

Perfect for:

✅ Visual logs  
✅ CLI tools  
✅ Clean code architecture  
✅ Eye-catching terminal UIs

---

## 🚀 Installation

```bash
npm install coloring-console
```

✨ Why use it?
✅ Written in TypeScript with OOP principles

🧱 Based on the Builder Pattern for flexibility

🌈 Supports text color, background color, and text attributes

💡 Great as an educational example of clean, modular architecture


## 🧪 Usage Example

```typescript
import { coloring , theme } from "coloring-console";

console.log(coloring.create(
  {
    color: "blue",
    background: "bg-yellow",
    attrs: ["bold"]
  },
  "Stylish output in your terminal"
));

```

## 🎯 Text Colors

"default" | "black" | "red" | "green" | "yellow" |
"blue" | "magenta" | "cyan" | "white" |
"light-gray" | "light-red" | "light-green" |
"light-yellow" | "light-blue" | "light-magenta" |
"light-cyan" | "light-white"

## 🎨 Background Colors

"bg-black" | "bg-red" | "bg-green" | "bg-yellow" |
"bg-blue" | "bg-magenta" | "bg-cyan" | "bg-white" |
"bg-light-gray" | "bg-light-red" | "bg-light-green" |
"bg-light-yellow" | "bg-light-blue" | "bg-light-magenta" |
"bg-light-cyan" | "bg-light-white"

## 💡 Text Attributes

"bold" | "underline" | "blink"

## 🧩 Custom Themes (News)
Create named themes with reusable color, background, and attributes:

```typescript
coloring.addTheme("error", {
  color: "light-white",
  background: "bg-red",
  attrs: "bold"
});

console.log(theme.applyTheme('error', 'New error theme test', true))
```

## 🤝 Contributing
PRs, issues and suggestions are welcome!
Let’s build the most elegant terminal logs together. 🌟

## 📄 License
ISC © Romilson de Jesus Cavalcante

⭐️ Found it useful? Don’t forget to star this repo on GitHub and share it with your dev friends!

## access repository
--> https://github.com/romilsondev1/Coloring-console