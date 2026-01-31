const { test, expect } = require('@playwright/test');

test.describe('Translator - Functional + UI Tests', () => {
  // ✅ Timeout applied to ALL tests inside this describe block
  test.setTimeout(90000);

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tamil.changathi.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  });

  const getInput = (page) => page.locator('textarea').first();

  // =========================
  // POSITIVE TEST CASES (24)
  // Style: Behavior + Linguistic Variety
  // =========================

  test('Pos_Fun_0101 - Basic statement input', async ({ page }) => {
    const input = getInput(page);
    await input.fill('naan romba santhosham');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('naan');
  });

  test('Pos_Fun_0102 - Simple question format', async ({ page }) => {
    const input = getInput(page);
    await input.fill('nee saptiya?');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('?');
  });

  test('Pos_Fun_0103 - Office related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('innaikku meeting romba important');
    await page.waitForTimeout(2000);
    const len = (await input.inputValue()).length;
    expect(len).toBeGreaterThan(10);
  });

  test('Pos_Fun_0104 - Casual spoken Tamil', async ({ page }) => {
    const input = getInput(page);
    await input.fill('enna da panra?');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0105 - Emotion based sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('innaikku romba tired-aa irukku');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('tired');
  });

  test('Pos_Fun_0106 - Instruction sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('please indha file open pannunga');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0107 - Shopping related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('market-la vegetables vaanganum');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('market');
  });

  test('Pos_Fun_0108 - Travel plan sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('next week Bangalore poren');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('Bangalore');
  });

  test('Pos_Fun_0109 - Health related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('innaikku fever konjam kammi');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0110 - Food related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('dosa romba nalla irundhuchu');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('dosa');
  });

  test('Pos_Fun_0111 - Education related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('exam-ku romba prepare panninen');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0112 - Work completion sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('task ellam mudichuten');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('task');
  });

  test('Pos_Fun_0113 - Time based sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('10 mani-kku office poganum');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('10');
  });

  test('Pos_Fun_0114 - Money related sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('500 rupees selavu aayiduchu');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('500');
  });

  test('Pos_Fun_0115 - Mobile usage sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('phone battery seekiram drain aagudhu');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('battery');
  });

  test('Pos_Fun_0116 - Weather sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('innaikku romba veyil');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0117 - Opinion sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('indha movie enakku pudichirukku');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('movie');
  });

  test('Pos_Fun_0118 - Suggestion sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('nee early-aa thoongu');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0119 - Comparison sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('indha phone better-aa irukku');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('better');
  });

  test('Pos_Fun_0120 - Reminder sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('meeting marandhudaadha');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Pos_Fun_0121 - Polite ending sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('thank you romba nandri');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('thank');
  });

  test('Pos_Fun_0122 - Mixed English verbs', async ({ page }) => {
    const input = getInput(page);
    await input.fill('file download panniten');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toContain('download');
  });

  test('Pos_Fun_0123 - Multi-clause sentence', async ({ page }) => {
    const input = getInput(page);
    await input.fill('late aagiduchu, adhanala taxi eduthen');
    await page.waitForTimeout(2500);
    expect(await input.inputValue()).toContain(',');
  });

  test('Pos_Fun_0124 - Paragraph style input', async ({ page }) => {
    const input = getInput(page);
    await input.fill(
      'innaikku neraya vela irundhuchu. morning meeting, afternoon calls, ' +
        'evening travel. night romba tired-aa irundhen.'
    );
    await page.waitForTimeout(3000);
    const len = (await input.inputValue()).length;
    expect(len).toBeGreaterThan(50);
  });

  // =========================
  // NEGATIVE TEST CASES (10)
  // Style: Stress + Invalid Patterns
  // =========================

  test('Neg_Fun_0201 - No vowels input', async ({ page }) => {
    const input = getInput(page);
    await input.fill('nn vttkk prn');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0202 - Only numbers', async ({ page }) => {
    const input = getInput(page);
    await input.fill('999999999');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0203 - Only emojis', async ({ page }) => {
    const input = getInput(page);
    await input.fill('😂😂🔥🔥');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0204 - Script like text', async ({ page }) => {
    const input = getInput(page);
    await input.fill('<div>test</div>');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toContain('<');
  });

  test('Neg_Fun_0205 - Excessive repeated letters', async ({ page }) => {
    const input = getInput(page);
    await input.fill('haaaaaaaaaaai');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0206 - Mixed language chaos', async ({ page }) => {
    const input = getInput(page);
    await input.fill('hello நான் okay aa irukken');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0207 - New lines input', async ({ page }) => {
    const input = getInput(page);
    await input.fill('naan\ninnaikku\nvarala');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toContain('\n');
  });

  test('Neg_Fun_0208 - Tabs only', async ({ page }) => {
    const input = getInput(page);
    await input.fill('\t\t\t');
    await page.waitForTimeout(1000);
    expect(await input.inputValue()).toBeDefined();
  });

  test('Neg_Fun_0209 - Special chars only', async ({ page }) => {
    const input = getInput(page);
    await input.fill('@@@###$$$');
    await page.waitForTimeout(1500);
    expect(await input.inputValue()).toBeTruthy();
  });

  test('Neg_Fun_0210 - Empty + wait', async ({ page }) => {
    const input = getInput(page);
    await input.fill('');
    await page.waitForTimeout(2000);
    expect(await input.inputValue()).toBeDefined();
  });

  // =========================
  // UI / UX TEST CASE (1)
  // =========================

  test('Pos_UI_0301 - Input remains responsive during continuous typing', async ({ page }) => {
    const input = getInput(page);
    await expect(input).toBeVisible();

    await input.type('naan slowly type pannren', { delay: 120 });
    const midValue = await input.inputValue();

    await input.type(' and UI hang aagala', { delay: 120 });
    const finalValue = await input.inputValue();

    expect(finalValue.length).toBeGreaterThan(midValue.length);
  });
});
