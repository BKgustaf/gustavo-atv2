/**
 * @jest-environment jsdom
 */

const {
    generatePassword,
    calculateSum,
    addNote
} = require('../public/app.js'); // Caminho para o seu app.js

describe('Testes de funcionalidades', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="generate-password-btn">Gerar Senha</button>
            <p>Senha: <span id="generated-password"></span></p>
            <input id="num1" placeholder="Número 1" type="number">
            <input id="num2" placeholder="Número 2" type="number">
            <button id="calculate-btn">Calcular Soma</button>
            <p>Resultado: <span id="calculation-result"></span></p>
            <input id="note-input" placeholder="Digite uma anotação">
            <button id="add-note-btn">Adicionar Anotação</button>
            <ul id="notes-list"></ul>
        `;
    });

    test('Deve gerar uma senha', () => {
        generatePassword();
        const generatedPassword = document.getElementById('generated-password').textContent;
        expect(generatedPassword).toHaveLength(12); // Verifica o tamanho da senha
    });

    test('Deve calcular a soma de dois números', () => {
        document.getElementById('num1').value = '5';
        document.getElementById('num2').value = '10';
        calculateSum();
        expect(document.getElementById('calculation-result').textContent).toBe('15');
    });

    test('Deve adicionar uma anotação', () => {
        const noteInput = document.getElementById('note-input');

        noteInput.value = 'Primeira anotação';
        addNote();
        expect(document.getElementById('notes-list').children.length).toBe(1);
        expect(document.getElementById('notes-list').children[0].textContent).toBe('Primeira anotação');

        noteInput.value = 'Segunda anotação';
        addNote();
        expect(document.getElementById('notes-list').children.length).toBe(2);
        expect(document.getElementById('notes-list').children[1].textContent).toBe('Segunda anotação');
    });
});
