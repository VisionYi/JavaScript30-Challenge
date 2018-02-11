const secretInput = document.querySelector('input[name="secret"]');
const pressedInput = document.querySelector('input[name="pressed"]');
const numberDisplay = document.querySelector('#number');
const successDisplay = document.querySelector('#success');

const DEFAULT = 'test';
const getSecretCode = () => (secretInput.value ? secretInput.value : DEFAULT);
const getNumberDisplayText = secret => (secret !== DEFAULT ? `已設定此 ${secret.length} 碼` : `預設為 ${DEFAULT}`);

/**
 * 設置密語內容，並顯示提示
 */
function handleSecret() {
    const secretCode = getSecretCode();
    numberDisplay.innerHTML = getNumberDisplayText(secretCode);
}

/**
 * 處理輸入的字，配對密語內容正確就顯示提示
 */
function handlePressed() {
    const secretCode = getSecretCode();
    const pressed = [...(this.value)];

    // 使輸入的字不會超過密語的文字長度，若超過會把前面輸入的字刪掉
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    this.value = pressed.join('');

    if (this.value.includes(secretCode)) {
        successDisplay.innerHTML = 'DING DING !';
        cornify_add();
    } else {
        successDisplay.innerHTML = '可以嘗試連續輸入';
    }
}

secretInput.addEventListener('keyup', handleSecret);
pressedInput.addEventListener('keyup', handlePressed);
