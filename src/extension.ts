// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(
	vscode.commands.registerCommand('notebook-selection-test.get-current-selection', () => {
		if(vscode.window.activeNotebookEditor) {
			const notebookEditor = vscode.window.activeNotebookEditor;
			vscode.window.showInformationMessage(`current notebook: ${notebookEditor.notebook.uri.toString()} with selection ${notebookEditor.selection?.start}`);
		} else {
			vscode.window.showInformationMessage('No active notebook editor');
		}
	}),
	vscode.commands.registerCommand('notebook-selection-test.executeFoldingRangeProvider', async () => {
		const res = await vscode.commands.executeCommand('vscode.executeFoldingRangeProvider', vscode.window.activeTextEditor?.document.uri);
		vscode.window.showInformationMessage(`Folding ranges: ${JSON.stringify(res)}`);
	}),
	vscode.commands.registerCommand('notebook-selection-test.executeCodeActionProvider', async () => {
		const res = await vscode.commands.executeCommand('vscode.executeCodeActionProvider', vscode.window.activeTextEditor?.document.uri, vscode.window.activeTextEditor?.selection);
		vscode.window.showInformationMessage(`Code Actions: ${JSON.stringify(res)}`);
	}),
	vscode.commands.registerCommand('notebook-selection-test.executeWorkspaceSymbolProvider', async () => {
		const res = await vscode.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', 'test');
		vscode.window.showInformationMessage(`Workspace Symbols: ${JSON.stringify(res)}`);
	}));

}

// This method is called when your extension is deactivated
export function deactivate() {}
