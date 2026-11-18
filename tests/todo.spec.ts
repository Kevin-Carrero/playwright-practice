import { test, expect } from '@playwright/test';

test.describe('Lista de tareas', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('agregar una tarea', async ({ page }) => {

    const taskInput = page.getByPlaceholder('What needs to be done?');

    await taskInput.fill('Task: 1');
    await taskInput.press('Enter');

    await expect(page.getByTestId('todo-title')).toHaveText('Task: 1');

  });

  test('agregar 3 tareas', async ({ page }) => {

    const taskInput = page.getByPlaceholder('What needs to be done?');

    const qty = 3;

    for (let i = 1; i <= qty; i++) {
      //await taskInput.fill('Tarea 1');
      await taskInput.fill(`Task: ${i}`);
      await taskInput.press('Enter');
    }

    await expect(page.getByTestId('todo-title')).toHaveText([
      'Task: 1',
      'Task: 2',
      'Task: 3'
    ]);

    await expect(page.getByTestId('todo-title')).toHaveCount(qty);

  });

});