// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const path   = require('path');					// to import django_unchained.mp3
const player = require('play-sound')({});		// to play django_unchained.mp3

const COOLDOWN_MS = 8000; // prevents replaying every keystroke
let lastPlayed = 0;

const DJANGO_IMPORT_RE = /^\s*(import django\b|from django(\.[\w.]+)?\s+import)/;

function activate(context) {
	const disposable = vscode.workspace.onDidChangeTextDocument((event) => {
		// Only care about .py files
        if (event.document.languageId !== 'python') return;

		 for (const change of event.contentChanges) {
            const lineIndex = change.range.start.line;
            const lineText  = event.document.lineAt(lineIndex).text.trim();

            // on importing django in any form
            if (DJANGO_IMPORT_RE.test(lineText)) {
                const now = Date.now();
                if (now - lastPlayed < COOLDOWN_MS) break; // cooldown guard
				
				lastPlayed = now;

                const audioPath = path.join(
                    context.extensionPath,
                    'media',
                    'django_unchained.mp3'
                );

                player.play(audioPath, (err) => {
                    if (err) {
                        vscode.window.showErrorMessage(
                            `Django Unchained: Couldn't play audio — ${err.message}`
                        );
                    }
                });

                break;
			}
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
