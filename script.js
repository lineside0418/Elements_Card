const elements = [
    { number: 1, symbol: 'H', name: '水素' },
    { number: 2, symbol: 'He', name: 'ヘリウム' },
    { number: 3, symbol: 'Li', name: 'リチウム' },
    { number: 4, symbol: 'Be', name: 'ベリリウム' },
    { number: 5, symbol: 'B', name: 'ホウ素' },
    { number: 6, symbol: 'C', name: '炭素' },
    { number: 7, symbol: 'N', name: '窒素' },
    { number: 8, symbol: 'O', name: '酸素' },
    { number: 9, symbol: 'F', name: 'フッ素' },
    { number: 10, symbol: 'Ne', name: 'ネオン' },
    { number: 11, symbol: 'Na', name: 'ナトリウム' },
    { number: 12, symbol: 'Mg', name: 'マグネシウム' },
    { number: 13, symbol: 'Al', name: 'アルミニウム' },
    { number: 14, symbol: 'Si', name: 'ケイ素' },
    { number: 15, symbol: 'P', name: 'リン' },
    { number: 16, symbol: 'S', name: '硫黄' },
    { number: 17, symbol: 'Cl', name: '塩素' },
    { number: 18, symbol: 'Ar', name: 'アルゴン' },
    { number: 19, symbol: 'K', name: 'カリウム' },
    { number: 20, symbol: 'Ca', name: 'カルシウム' },
    { number: 21, symbol: 'Sc', name: 'スカンジウム' },
    { number: 22, symbol: 'Ti', name: 'チタン' },
    { number: 23, symbol: 'V', name: 'バナジウム' },
    { number: 24, symbol: 'Cr', name: 'クロム' },
    { number: 25, symbol: 'Mn', name: 'マンガン' },
    { number: 26, symbol: 'Fe', name: '鉄' },
    { number: 27, symbol: 'Co', name: 'コバルト' },
    { number: 28, symbol: 'Ni', name: 'ニッケル' },
    { number: 29, symbol: 'Cu', name: '銅' },
    { number: 30, symbol: 'Zn', name: '亜鉛' },
    { number: 31, symbol: 'Ga', name: 'ガリウム' },
    { number: 32, symbol: 'Ge', name: 'ゲルマニウム' },
    { number: 33, symbol: 'As', name: 'ヒ素' },
    { number: 34, symbol: 'Se', name: 'セレン' },
    { number: 35, symbol: 'Br', name: '臭素' },
    { number: 36, symbol: 'Kr', name: 'クリプトン' },
    { number: 37, symbol: 'Rb', name: 'ルビジウム' },
    { number: 38, symbol: 'Sr', name: 'ストロンチウム' },
    { number: 39, symbol: 'Y', name: 'イットリウム' },
    { number: 40, symbol: 'Zr', name: 'ジルコニウム' },
    { number: 41, symbol: 'Nb', name: 'ニオブ' },
    { number: 42, symbol: 'Mo', name: 'モリブデン' },
    { number: 43, symbol: 'Tc', name: 'テクネチウム' },
    { number: 44, symbol: 'Ru', name: 'ルテニウム' },
    { number: 45, symbol: 'Rh', name: 'ロジウム' },
    { number: 46, symbol: 'Pd', name: 'パラジウム' },
    { number: 47, symbol: 'Ag', name: '銀' },
    { number: 48, symbol: 'Cd', name: 'カドミウム' },
    { number: 49, symbol: 'In', name: 'インジウム' },
    { number: 50, symbol: 'Sn', name: 'スズ' },
    { number: 51, symbol: 'Sb', name: 'アンチモン' },
    { number: 52, symbol: 'Te', name: 'テルル' },
    { number: 53, symbol: 'I', name: 'ヨウ素' },
    { number: 54, symbol: 'Xe', name: 'キセノン' },
    { number: 55, symbol: 'Cs', name: 'セシウム' },
    { number: 56, symbol: 'Ba', name: 'バリウム' },
    { number: 57, symbol: 'La', name: 'ランタン' },
    { number: 58, symbol: 'Ce', name: 'セリウム' },
    { number: 59, symbol: 'Pr', name: 'プラセオジム' },
    { number: 60, symbol: 'Nd', name: 'ネオジム' },
    { number: 61, symbol: 'Pm', name: 'プロメチウム' },
    { number: 62, symbol: 'Sm', name: 'サマリウム' },
    { number: 63, symbol: 'Eu', name: 'ユウロピウム' },
    { number: 64, symbol: 'Gd', name: 'ガドリニウム' },
    { number: 65, symbol: 'Tb', name: 'テルビウム' },
    { number: 66, symbol: 'Dy', name: 'ジスプロシウム' },
    { number: 67, symbol: 'Ho', name: 'ホルミウム' },
    { number: 68, symbol: 'Er', name: 'エルビウム' },
    { number: 69, symbol: 'Tm', name: 'ツリウム' },
    { number: 70, symbol: 'Yb', name: 'イッテルビウム' },
    { number: 71, symbol: 'Lu', name: 'ルテチウム' },
    { number: 72, symbol: 'Hf', name: 'ハフニウム' },
    { number: 73, symbol: 'Ta', name: 'タンタル' },
    { number: 74, symbol: 'W', name: 'タングステン' },
    { number: 75, symbol: 'Re', name: 'レニウム' },
    { number: 76, symbol: 'Os', name: 'オスミウム' },
    { number: 77, symbol: 'Ir', name: 'イリジウム' },
    { number: 78, symbol: 'Pt', name: '白金' },
    { number: 79, symbol: 'Au', name: '金' },
    { number: 80, symbol: 'Hg', name: '水銀' },
    { number: 81, symbol: 'Tl', name: 'タリウム' },
    { number: 82, symbol: 'Pb', name: '鉛' },
    { number: 83, symbol: 'Bi', name: 'ビスマス' },
    { number: 84, symbol: 'Po', name: 'ポロニウム' },
    { number: 85, symbol: 'At', name: 'アスタチン' },
    { number: 86, symbol: 'Rn', name: 'ラドン' },
    { number: 87, symbol: 'Fr', name: 'フランシウム' },
    { number: 88, symbol: 'Ra', name: 'ラジウム' },
    { number: 89, symbol: 'Ac', name: 'アクチニウム' },
    { number: 90, symbol: 'Th', name: 'トリウム' },
    { number: 91, symbol: 'Pa', name: 'プロトアクチニウム' },
    { number: 92, symbol: 'U', name: 'ウラン' },
    { number: 93, symbol: 'Np', name: 'ネプツニウム' },
    { number: 94, symbol: 'Pu', name: 'プルトニウム' },
    { number: 95, symbol: 'Am', name: 'アメリシウム' },
    { number: 96, symbol: 'Cm', name: 'キュリウム' },
    { number: 97, symbol: 'Bk', name: 'バークリウム' },
    { number: 98, symbol: 'Cf', name: 'カリホルニウム' },
    { number: 99, symbol: 'Es', name: 'アインスタイニウム' },
    { number: 100, symbol: 'Fm', name: 'フェルミウム' },
    { number: 101, symbol: 'Md', name: 'メンデレビウム' },
    { number: 102, symbol: 'No', name: 'ノーベリウム' },
    { number: 103, symbol: 'Lr', name: 'ローレンシウム' },
    { number: 104, symbol: 'Rf', name: 'ラザホージウム' },
    { number: 105, symbol: 'Db', name: 'ドブニウム' },
    { number: 106, symbol: 'Sg', name: 'シーボーギウム' },
    { number: 107, symbol: 'Bh', name: 'ボーリウム' },
    { number: 108, symbol: 'Hs', name: 'ハッシウム' },
    { number: 109, symbol: 'Mt', name: 'マイトネリウム' },
    { number: 110, symbol: 'Ds', name: 'ダルムスタチウム' },
    { number: 111, symbol: 'Rg', name: 'レントゲニウム' },
    { number: 112, symbol: 'Cn', name: 'コペルニシウム' },
    { number: 113, symbol: 'Nh', name: 'ニホニウム' },
    { number: 114, symbol: 'Fl', name: 'フレロビウム' },
    { number: 115, symbol: 'Mc', name: 'モスコビウム' },
    { number: 116, symbol: 'Lv', name: 'リバモリウム' },
    { number: 117, symbol: 'Ts', name: 'テネシン' },
    { number: 118, symbol: 'Og', name: 'オガネソン' }
];

const startButton = document.getElementById('start-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const cardElement = document.getElementById('card');
const questionElement = document.getElementById('question');
const answerSymbolElement = document.getElementById('answer-symbol');
const answerNameElement = document.getElementById('answer-name');
const answerNumberElement = document.getElementById('answer-number');
const mainMenu = document.querySelector('.main-menu');
const cardContainer = document.querySelector('.card-container');
const startNumberInput = document.getElementById('start-number');
const endNumberInput = document.getElementById('end-number');
const modeSelect = document.getElementById('mode-select');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const backToMenuButton = document.getElementById('back-to-menu'); // ボタンの要素を取得
const body = document.body;

let currentElements = [];
let currentCardIndex = 0;
let currentMode = 'name-to-symbol';
let currentCardData = null;
let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function showMenu() {
    mainMenu.style.display = 'flex';
    cardContainer.style.display = 'none';
    currentCardIndex = 0;
    currentElements = [];
    currentCardData = null;
    cardElement.classList.remove('flipped');
}

function startGame() {
    const start = parseInt(startNumberInput.value);
    const end = parseInt(endNumberInput.value);
    const mode = modeSelect.value;

    if (isNaN(start) || isNaN(end) || start < 1 || end > 118 || start > end) {
        alert('範囲指定が正しくありません。');
        return;
    }

    currentElements = elements.filter(element => element.number >= start && element.number <= end);
    if (currentElements.length === 0) {
        alert('指定された範囲に元素がありません。');
        return;
    }

    currentMode = mode;
    currentCardIndex = 0;
    shuffleArray(currentElements);

    mainMenu.style.display = 'none';
    cardContainer.style.display = 'flex';
    showCard();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showCard() {
    cardElement.classList.remove('flipped');
    questionElement.textContent = '';
    setTimeout(() => {
        if (currentCardIndex < currentElements.length) {
            currentCardData = currentElements[currentCardIndex];
            if (currentMode === 'name-to-symbol') {
                questionElement.textContent = currentCardData.name;
            } else if (currentMode === 'symbol-to-name') {
                questionElement.textContent = currentCardData.symbol;
            }
        } else {
            alert('全て表示しました！');
            showMenu();
        }
    }, 10);
}

function showAnswer() {
    if (currentCardData) {
        if (currentMode === 'name-to-symbol') {
            answerSymbolElement.textContent = currentCardData.symbol;
            answerNameElement.textContent = '';
            answerNumberElement.textContent = currentCardData.number;
        } else if (currentMode === 'symbol-to-name') {
            answerSymbolElement.textContent = '';
            answerNameElement.textContent = currentCardData.name;
            answerNumberElement.textContent = currentCardData.number;
        }
    }
}

function nextCard() {
    cardElement.style.transition = 'none';
    cardElement.classList.remove('flipped');
    setTimeout(() => {
        currentCardIndex = (currentCardIndex + 1) % currentElements.length;
        showCard();
        setTimeout(() => {
            cardElement.style.transition = '';
        }, 10);
    }, 10);
}

function prevCard() {
    cardElement.style.transition = 'none';
    cardElement.classList.remove('flipped');
    setTimeout(() => {
        currentCardIndex = (currentCardIndex - 1 + currentElements.length) % currentElements.length;
        showCard();
        setTimeout(() => {
            cardElement.style.transition = '';
        }, 10);
    }, 10);
}

function flipCard() {
    if (currentElements.length > 0) {
        cardElement.classList.toggle('flipped');
        if (cardElement.classList.contains('flipped')) {
            showAnswer();
        }
    }
}

function backToMenu() {
    showMenu();
}

startButton.addEventListener('click', startGame);
prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);
cardElement.addEventListener('click', flipCard);
darkModeToggle.addEventListener('click', toggleDarkMode);
backToMenuButton.addEventListener('click', backToMenu); // 戻るボタンにイベントリスナーを追加

// 初期表示
showMenu();