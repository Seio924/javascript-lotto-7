import InputView from '../src/View/InputView';
import { mockQuestions } from './ApplicationTest';

describe('InputView 테스트', () => {
  test('로또 구입 금액을 입력 받는다.', async () => {
    const input = ['1000'];
    const output = 1000;

    mockQuestions(input);

    const inputView = new InputView();
    const purchaseAmount = await inputView.readPurchaseAmount();

    expect(purchaseAmount).toBe(output);
  });

  test('구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.', async () => {
    const input = ['1002'];

    mockQuestions(input);

    const inputView = new InputView();

    await expect(inputView.readPurchaseAmount()).rejects.toThrow(
      '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.'
    );
  });

  test('입력하지 않은 경우 예외가 발생한다.', async () => {
    const input = [''];

    mockQuestions(input);

    const inputView = new InputView();

    await expect(inputView.readPurchaseAmount()).rejects.toThrow(
      '[ERROR] 구입 금액을 입력해야 합니다.'
    );
  });

  test('숫자가 아닐 경우 예외 처리한다.', async () => {
    const input = ['abc'];

    mockQuestions(input);

    const inputView = new InputView();

    await expect(inputView.readPurchaseAmount()).rejects.toThrow(
      '[ERROR] 구입 금액은 숫자여야 합니다.'
    );
  });
});
