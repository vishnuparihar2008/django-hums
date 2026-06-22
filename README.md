# 🎵 Django Hums
A chaotic little VS Code extension written in JavaScript that **plays the Django Unchained theme** whenever you write a Django import in Python.

---

## ✨ Features

- Detects any form of Django import (`import django`, `from django.x import y`, etc.) in `.py` files.
- Plays *Django* by Luis Bacalov from Django Unchained (2012) automatically on trigger.
- 8-second cooldown guard to prevent the song from blasting on every keystroke.
- Activates only for Python files.

---

## 🛠 Tech Stack
* **Language:** JavaScript (Node.js)
* **Tools:** VS Code Extension API, npm, ESLint, Git, VS Code

## 📚 Dependencies
| Package | Purpose |
|---|---|
| `vscode` | VS Code Extension API for editor event hooks |
| `play-sound` | Cross-platform audio playback for the MP3 file |
| `@vscode/test-cli` | Testing framework for VS Code extensions |
| `@vscode/test-electron` | Electron-based test runner |

---

## 📁 Project Structure

```
django-hums/
├── extension.js            # Core extension logic
├── package.json            # Extension manifest and dependencies
├── eslint.config.mjs       # Linting configuration (Default)
├── jsconfig.json           # JS project config (Default)
├── .vscode-test.mjs        # Test runner config (Default)
├── .vscodeignore           # Files excluded from the published extension (Default)
├── media/
│   └── django_unchained.mp3    # The audio file that plays on trigger
└── test/
    └── extension.test.js       # Extension tests (Default)
```

---

## 🚀 Getting Started
To get a copy of this project up and running on your local machine:

### Prerequisites
Make sure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm**
- **VS Code** (v1.125.0 or later)
- **mpg123** Audio Dependencies

### Installation

- Clone the repository:
```bash
git clone https://github.com/vishnuparihar2008/django-hums.git
```

- Navigate into the project directory:
```bash
cd ./django-hums
```

- Install dependencies:
```bash
npm install
```

- Open in VS Code and launch the extension host:
```bash
code .
```
Then press `F5` to open a new Extension Development Host window with the extension active.

- Build and Publish
```bash
npm install -g @vscode/vsce
vsce package
```
This generates a django-hums-X.X.X.vsix file which can be installed in VS Code

- Install
```bash
code --install-extension django-hums-0.0.1.vsix
```
This installs django-hums in your VS Code Profile and can be used in any Project.

---

### 🐍 Triggering the Extension
Open any `.py` file in the Extension Development Host and type any Django import:

```python
import django
# or
from django.db import models
# or
from django.http import HttpResponse
```

The Django Unchained theme will play immediately. 🤠 (which won't turn off until the song is finished)

> [!NOTE]  
> An 8-second cooldown is enforced between plays, so the song won't retrigger on every character you type.

---

## ⚙️ How It Works

1. **Activation** — The extension activates automatically on any Python file (`onLanguage:python`).
2. **Event Listener** — Listens to `onDidChangeTextDocument` events for changes in `.py` files.
3. **Regex Matching** — Checks the edited line against `/^\s*(import django\b|from django(\.[\w.]+)?\s+import)/`.
4. **Cooldown Guard** — Compares current timestamp against `lastPlayed`; skips if within 8 seconds.
5. **Audio Playback** — Resolves the path to `media/django_unchained.mp3` and plays it via `play-sound`.

---

## 👩‍💻 Author

**Vishnu Parihar** — [vishnuparihar2008](https://github.com/vishnuparihar2008)

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute.
