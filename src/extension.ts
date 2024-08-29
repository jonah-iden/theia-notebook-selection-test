// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('notebook-selection-test.get-current-selection', () => {
		if(vscode.window.activeNotebookEditor) {
			const notebookEditor = vscode.window.activeNotebookEditor;
			vscode.window.showInformationMessage(`current notebook: ${notebookEditor.notebook.uri.toString()} with selection ${notebookEditor.selection?.start}`);
		} else {
			vscode.window.showInformationMessage('No active notebook editor');
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
