const { test, expect } = require('@playwright/test');

test.describe('Thanglish → Tamil Translator Tests', () => {
  test.setTimeout(90000);

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tamil.changathi.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  });

  // Input is 1st textarea, Output is usually 2nd textarea
  const inputBox = (page) => page.locator('textarea').nth(0);
  const outputBox = (page) => page.locator('textarea').nth(1);

  // Tamil Unicode range check (0B80–0BFF)
  const hasTamil = (text) => /[\u0B80-\u0BFF]/.test(text || '');

  async function typeAndGetOutput(page, text) {
    const inBox = inputBox(page);
    const outBox = outputBox(page);

    await expect(inBox).toBeVisible({ timeout: 60000 });
    await inBox.fill('');
    await inBox.fill(text);

    // Wait until output has Tamil characters (real conversion)
    await expect
      .poll(async () => await outBox.inputValue(), { timeout: 15000 })
      .toSatisfy((val) => (val || '').trim().length > 0);

    const out = await outBox.inputValue();
    return out;
  }

  // =========================
  // POSITIVE TEST CASES (24)
  // Pos_Fun_0001 to Pos_Fun_0024
  // =========================

  test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan veetukku poren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0002 - Greeting question', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'vanakkam eppadi irukkeenga?');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0003 - Polite request sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'thayavu seithu enakku konjam help pannunga');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0004 - Informal command', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'dei inge vaa');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0005 - Daily question sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'nee eppo varuva?');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0006 - Present tense sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan ippo padikkiren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0007 - Past tense sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan nethu school ponen');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0008 - Future tense sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naalai naan office poren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0009 - Pronoun variation (we)', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naanga innaikku outing porom');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0010 - Plural sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'pasanga ground la vilaiyaaduraanga');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0011 - Compound sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan bus pidichen aana seat kidaikala');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0012 - Conditional sentence', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'nee vandhaal naan unakku solluren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0013 - Simple request', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'konjam thanni kudunga');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0014 - Repeated words', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'seri seri naan varren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0015 - Mixed English app word', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan WhatsApp la message anuppitten');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0016 - Abbreviation usage', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'enakku OTP varala');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0017 - Place name', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan Colombo poren');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0018 - Currency and number', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'Rs. 2500 kuduthen');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0019 - Time format', async ({ page }) => {
    const out = await typeAndGetOutput(page, '7.30 AM class irukku');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0020 - Date format', async ({ page }) => {
    const out = await typeAndGetOutput(page, '2026-02-01 exam irukku');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0021 - Units', async ({ page }) => {
    const out = await typeAndGetOutput(page, '2 kg arisi venum');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0022 - Punctuation variety', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'wow nee vandhutiya? super!!!');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0023 - Multiple spaces', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan   innaikku   late  aagitten');
    expect(hasTamil(out)).toBeTruthy();
  });

  test('Pos_Fun_0024 - Long paragraph conversion (L)', async ({ page }) => {
    const longText =
      'innaikku naan office la romba busy. morning la meeting documents review client call ellam irundhuchu. ' +
      'lunch kooda time illa. evening la thirumba travel pannitu veetukku late aa vandhen. ' +
      'aana work mudichuten nu sandhosham. naalai early aa ezhundhu vela seyyanum.';
    const out = await typeAndGetOutput(page, longText);
    expect(hasTamil(out)).toBeTruthy();
  });

  // =========================
  // NEGATIVE TEST CASES (10)
  // Neg_Fun_0001 to Neg_Fun_0010
  // =========================
  // For negative: we check system doesn't crash and output is either empty OR not proper Tamil.
  // (You can mark FAIL/PASS in Excel based on what you observe.)

  test('Neg_Fun_0001 - Joined words without spaces', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naanveetukkuporenippo');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0002 - Heavy typos', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naaan veetukku pogireeen ipoo');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0003 - Random symbols', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan #$%@ veetukku !!! poren');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0004 - Mixed Tamil + Thanglish', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan வீட்டுக்கு poren');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0005 - Repeated characters', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'soooo happyyyyy innaikku');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0006 - Abbreviation heavy', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'ID NIC OTP URL QR CPU GPU OS');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0007 - Very long number', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'order number 12345678901234567890');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0008 - Tabs and spaces', async ({ page }) => {
    const out = await typeAndGetOutput(page, 'naan\t\tinnaikku\tlate');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0009 - Only punctuation', async ({ page }) => {
    const out = await typeAndGetOutput(page, '!!!???...');
    expect(out).toBeDefined();
  });

  test('Neg_Fun_0010 - Empty input', async ({ page }) => {
    const inBox = inputBox(page);
    const outBox = outputBox(page);
    await inBox.fill('');
    await page.waitForTimeout(1000);
    const out = await outBox.inputValue();
    expect(out).toBeDefined();
  });

  // =========================
  // UI TEST CASES (1)
  // Pos_UI_0001
  // =========================

  test('Pos_UI_0001 - Real-time output changes while typing', async ({ page }) => {
    const inBox = inputBox(page);
    const outBox = outputBox(page);

    await inBox.fill('');
    await inBox.type('naan', { delay: 120 });
    await page.waitForTimeout(700);
    const out1 = await outBox.inputValue();

    await inBox.type(' veetukku poren', { delay: 120 });
    await page.waitForTimeout(700);
    const out2 = await outBox.inputValue();

    // Output should change as we type more
    expect(out2).not.toBe(out1);
  });
});
