class EnglishLearningGame {
    constructor() {
        this.score = 0;
        this.level = 1;
        this.currentGame = null;
        this.selectedEnglishWord = null;
        this.selectedChineseWord = null;
        this.currentListeningWord = null;
        this.currentQuizQuestion = null;
        this.gameData = {
            words: [
                // 食物类
                { english: "apple", chinese: "苹果", audio: "apple" },
                { english: "banana", chinese: "香蕉", audio: "banana" },
                { english: "grape", chinese: "葡萄", audio: "grape" },
                { english: "orange", chinese: "橙子", audio: "orange" },
                { english: "ice cream", chinese: "冰淇淋", audio: "ice_cream" },
                { english: "juice", chinese: "果汁", audio: "juice" },
                { english: "milk", chinese: "牛奶", audio: "milk" },
                { english: "bread", chinese: "面包", audio: "bread" },
                { english: "cake", chinese: "蛋糕", audio: "cake" },
                { english: "rice", chinese: "米饭", audio: "rice" },
                { english: "noodle", chinese: "面条", audio: "noodle" },
                { english: "egg", chinese: "鸡蛋", audio: "egg" },
                
                // 动物类
                { english: "cat", chinese: "猫", audio: "cat" },
                { english: "dog", chinese: "狗", audio: "dog" },
                { english: "elephant", chinese: "大象", audio: "elephant" },
                { english: "fish", chinese: "鱼", audio: "fish" },
                { english: "lion", chinese: "狮子", audio: "lion" },
                { english: "rabbit", chinese: "兔子", audio: "rabbit" },
                { english: "bird", chinese: "鸟", audio: "bird" },
                { english: "tiger", chinese: "老虎", audio: "tiger" },
                { english: "monkey", chinese: "猴子", audio: "monkey" },
                { english: "panda", chinese: "熊猫", audio: "panda" },
                { english: "horse", chinese: "马", audio: "horse" },
                
                // 学习用品
                { english: "notebook", chinese: "笔记本", audio: "notebook" },
                { english: "pencil", chinese: "铅笔", audio: "pencil" },
                { english: "book", chinese: "书", audio: "book" },
                { english: "pen", chinese: "钢笔", audio: "pen" },
                { english: "ruler", chinese: "尺子", audio: "ruler" },
                { english: "eraser", chinese: "橡皮", audio: "eraser" },
                { english: "schoolbag", chinese: "书包", audio: "schoolbag" },
                { english: "crayon", chinese: "蜡笔", audio: "crayon" },
                
                // 家庭成员
                { english: "father", chinese: "爸爸", audio: "father" },
                { english: "mother", chinese: "妈妈", audio: "mother" },
                { english: "brother", chinese: "兄弟", audio: "brother" },
                { english: "sister", chinese: "姐妹", audio: "sister" },
                { english: "grandfather", chinese: "爷爷", audio: "grandfather" },
                { english: "grandmother", chinese: "奶奶", audio: "grandmother" },
                
                // 颜色
                { english: "red", chinese: "红色", audio: "red" },
                { english: "blue", chinese: "蓝色", audio: "blue" },
                { english: "green", chinese: "绿色", audio: "green" },
                { english: "yellow", chinese: "黄色", audio: "yellow" },
                { english: "purple", chinese: "紫色", audio: "purple" },
                { english: "orange", chinese: "橙色", audio: "orange" },
                { english: "black", chinese: "黑色", audio: "black" },
                { english: "white", chinese: "白色", audio: "white" },
                
                // 数字
                { english: "one", chinese: "一", audio: "one" },
                { english: "two", chinese: "二", audio: "two" },
                { english: "three", chinese: "三", audio: "three" },
                { english: "four", chinese: "四", audio: "four" },
                { english: "five", chinese: "五", audio: "five" },
                { english: "six", chinese: "六", audio: "six" },
                { english: "seven", chinese: "七", audio: "seven" },
                { english: "eight", chinese: "八", audio: "eight" },
                { english: "nine", chinese: "九", audio: "nine" },
                { english: "ten", chinese: "十", audio: "ten" },
                
                // 身体部位
                { english: "head", chinese: "头", audio: "head" },
                { english: "eye", chinese: "眼睛", audio: "eye" },
                { english: "ear", chinese: "耳朵", audio: "ear" },
                { english: "nose", chinese: "鼻子", audio: "nose" },
                { english: "mouth", chinese: "嘴巴", audio: "mouth" },
                { english: "hand", chinese: "手", audio: "hand" },
                { english: "foot", chinese: "脚", audio: "foot" },
                { english: "arm", chinese: "胳膊", audio: "arm" },
                { english: "leg", chinese: "腿", audio: "leg" },
                
                // 天气
                { english: "sun", chinese: "太阳", audio: "sun" },
                { english: "rain", chinese: "雨", audio: "rain" },
                { english: "snow", chinese: "雪", audio: "snow" },
                { english: "wind", chinese: "风", audio: "wind" },
                { english: "cloud", chinese: "云", audio: "cloud" },
                
                // 交通工具
                { english: "car", chinese: "汽车", audio: "car" },
                { english: "bus", chinese: "公交车", audio: "bus" },
                { english: "bike", chinese: "自行车", audio: "bike" },
                { english: "train", chinese: "火车", audio: "train" },
                { english: "plane", chinese: "飞机", audio: "plane" },
                
                // 其他
                { english: "hat", chinese: "帽子", audio: "hat" },
                { english: "kite", chinese: "风筝", audio: "kite" },
                { english: "tree", chinese: "树", audio: "tree" },
                { english: "house", chinese: "房子", audio: "house" },
                { english: "school", chinese: "学校", audio: "school" },
                { english: "park", chinese: "公园", audio: "park" },
                { english: "friend", chinese: "朋友", audio: "friend" }
            ],
            quizQuestions: [
                // 食物类
                {
                    question: "下列哪个是水果？",
                    options: ["cat", "apple", "dog", "hat"],
                    answer: "apple"
                },
                {
                    question: "下列哪个是饮品？",
                    options: ["milk", "elephant", "orange", "queen"],
                    answer: "milk"
                },
                {
                    question: "下列哪个是食物？",
                    options: ["kite", "ice cream", "tree", "rabbit"],
                    answer: "ice cream"
                },
                {
                    question: "下列哪个是主食？",
                    options: ["rice", "apple", "fish", "juice"],
                    answer: "rice"
                },
                
                // 动物类
                {
                    question: "下列哪个是动物？",
                    options: ["banana", "fish", "juice", "pencil"],
                    answer: "fish"
                },
                {
                    question: "下列哪个是哺乳动物？",
                    options: ["bird", "fish", "dog", "snake"],
                    answer: "dog"
                },
                {
                    question: "下列哪个是中国国宝？",
                    options: ["tiger", "panda", "lion", "monkey"],
                    answer: "panda"
                },
                
                // 学习用品
                {
                    question: "下列哪个是学习用品？",
                    options: ["notebook", "lion", "sun", "grape"],
                    answer: "notebook"
                },
                {
                    question: "下列哪个是书写工具？",
                    options: ["ruler", "pen", "eraser", "schoolbag"],
                    answer: "pen"
                },
                {
                    question: "下列哪个是用来装东西的？",
                    options: ["pencil", "schoolbag", "crayon", "book"],
                    answer: "schoolbag"
                },
                
                // 家庭成员
                {
                    question: "下列哪个是家庭成员？",
                    options: ["friend", "teacher", "mother", "student"],
                    answer: "mother"
                },
                {
                    question: "下列哪个是长辈？",
                    options: ["brother", "sister", "grandfather", "cousin"],
                    answer: "grandfather"
                },
                
                // 颜色
                {
                    question: "下列哪个是颜色？",
                    options: ["cat", "red", "dog", "hat"],
                    answer: "red"
                },
                {
                    question: "下列哪个是暖色调？",
                    options: ["blue", "green", "purple", "orange"],
                    answer: "orange"
                },
                
                // 数字
                {
                    question: "下列哪个是数字？",
                    options: ["cat", "five", "dog", "hat"],
                    answer: "five"
                },
                {
                    question: "下列哪个数字最大？",
                    options: ["three", "seven", "five", "nine"],
                    answer: "nine"
                },
                
                // 身体部位
                {
                    question: "下列哪个是身体部位？",
                    options: ["cat", "head", "dog", "hat"],
                    answer: "head"
                },
                {
                    question: "下列哪个是感官器官？",
                    options: ["hand", "foot", "eye", "arm"],
                    answer: "eye"
                },
                
                // 天气
                {
                    question: "下列哪个是天气现象？",
                    options: ["cat", "rain", "dog", "hat"],
                    answer: "rain"
                },
                {
                    question: "下列哪个与太阳有关？",
                    options: ["sun", "rain", "snow", "wind"],
                    answer: "sun"
                },
                
                // 交通工具
                {
                    question: "下列哪个是交通工具？",
                    options: ["cat", "car", "dog", "hat"],
                    answer: "car"
                },
                {
                    question: "下列哪个在天上飞？",
                    options: ["car", "bus", "plane", "train"],
                    answer: "plane"
                },
                
                // 其他
                {
                    question: "下列哪个是场所？",
                    options: ["cat", "school", "dog", "hat"],
                    answer: "school"
                },
                {
                    question: "下列哪个是物品？",
                    options: ["friend", "kite", "mother", "brother"],
                    answer: "kite"
                }
            ]
        };
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateScoreBoard();
    }

    bindEvents() {
        // 游戏模式选择
        document.getElementById('start-words').addEventListener('click', () => this.startGame('words'));
        document.getElementById('start-listening').addEventListener('click', () => this.startGame('listening'));
        document.getElementById('start-quiz').addEventListener('click', () => this.startGame('quiz'));

        // 返回菜单按钮
        document.getElementById('back-to-menu').addEventListener('click', () => this.showMenu());
        document.getElementById('back-to-menu-2').addEventListener('click', () => this.showMenu());
        document.getElementById('back-to-menu-3').addEventListener('click', () => this.showMenu());
        document.getElementById('back-to-menu-4').addEventListener('click', () => this.showMenu());

        // 下一轮/下一题按钮
        document.getElementById('next-round').addEventListener('click', () => this.nextRound());
        document.getElementById('next-audio').addEventListener('click', () => this.nextRound());
        document.getElementById('next-question').addEventListener('click', () => this.nextRound());

        // 再玩一次按钮
        document.getElementById('play-again').addEventListener('click', () => this.playAgain());

        // 听力练习按钮
        document.getElementById('play-audio').addEventListener('click', () => this.playAudio());
    }

    startGame(gameType) {
        this.currentGame = gameType;
        this.hideAllScreens();
        document.getElementById(`game-${gameType}`).classList.add('active');
        this.nextRound();
    }

    showMenu() {
        this.hideAllScreens();
        document.getElementById('game-start').classList.add('active');
        this.currentGame = null;
    }

    hideAllScreens() {
        const screens = document.querySelectorAll('.game-screen');
        screens.forEach(screen => screen.classList.remove('active'));
    }

    nextRound() {
        switch (this.currentGame) {
            case 'words':
                this.generateWordPairs();
                break;
            case 'listening':
                this.generateListeningQuestion();
                break;
            case 'quiz':
                this.generateQuizQuestion();
                break;
        }
    }

    generateWordPairs() {
        const englishWordsContainer = document.getElementById('english-words');
        const chineseWordsContainer = document.getElementById('chinese-words');
        englishWordsContainer.innerHTML = '';
        chineseWordsContainer.innerHTML = '';

        const shuffledWords = this.shuffleArray([...this.gameData.words]);
        const selectedWords = shuffledWords.slice(0, 6);

        const englishWords = selectedWords.map(word => word.english);
        const chineseWords = selectedWords.map(word => word.chinese);

        this.shuffleArray(englishWords).forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-item';
            wordElement.textContent = word;
            wordElement.addEventListener('click', () => this.selectEnglishWord(wordElement, word));
            englishWordsContainer.appendChild(wordElement);
        });

        this.shuffleArray(chineseWords).forEach(word => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word-item';
            wordElement.textContent = word;
            wordElement.addEventListener('click', () => this.selectChineseWord(wordElement, word));
            chineseWordsContainer.appendChild(wordElement);
        });

        this.selectedEnglishWord = null;
        this.selectedChineseWord = null;
    }

    selectEnglishWord(element, word) {
        const wordItems = document.querySelectorAll('#english-words .word-item');
        wordItems.forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedEnglishWord = word;
        this.checkWordPair();
    }

    selectChineseWord(element, word) {
        const wordItems = document.querySelectorAll('#chinese-words .word-item');
        wordItems.forEach(item => item.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedChineseWord = word;
        this.checkWordPair();
    }

    checkWordPair() {
        if (this.selectedEnglishWord && this.selectedChineseWord) {
            const matchedWord = this.gameData.words.find(word => 
                word.english === this.selectedEnglishWord && word.chinese === this.selectedChineseWord
            );

            if (matchedWord) {
                const englishElement = document.querySelector(`#english-words .word-item.selected`);
                const chineseElement = document.querySelector(`#chinese-words .word-item.selected`);
                if (englishElement && chineseElement) {
                    englishElement.classList.add('correct');
                    chineseElement.classList.add('correct');
                    englishElement.removeEventListener('click', () => {});
                    chineseElement.removeEventListener('click', () => {});
                    this.score += 10;
                    this.updateScoreBoard();
                    
                    // 检查是否所有单词都已配对完成
                    const allCorrect = document.querySelectorAll('.word-item.correct').length;
                    if (allCorrect === 6) {
                        // 显示正确提示
                        const wordsContainer = document.querySelector('.words-container');
                        const messageElement = document.createElement('div');
                        messageElement.className = 'success-message';
                        messageElement.textContent = '所有单词配对正确！';
                        wordsContainer.appendChild(messageElement);
                        
                        // 2秒后自动跳转下一轮
                        setTimeout(() => {
                            messageElement.remove();
                            this.nextRound();
                        }, 2000);
                    }
                }
            } else {
                const englishElement = document.querySelector(`#english-words .word-item.selected`);
                const chineseElement = document.querySelector(`#chinese-words .word-item.selected`);
                if (englishElement && chineseElement) {
                    englishElement.classList.remove('selected');
                    chineseElement.classList.remove('selected');
                }
            }

            this.selectedEnglishWord = null;
            this.selectedChineseWord = null;
        }
    }

    generateListeningQuestion() {
        const optionsContainer = document.getElementById('listening-options');
        optionsContainer.innerHTML = '';

        const shuffledWords = this.shuffleArray([...this.gameData.words]);
        this.currentListeningWord = shuffledWords[0];
        const otherWords = shuffledWords.slice(1, 4);

        const options = [this.currentListeningWord, ...otherWords].map(word => word.english);
        this.shuffleArray(options).forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-item';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.checkListeningAnswer(optionElement, option));
            optionsContainer.appendChild(optionElement);
        });
    }

    playAudio() {
        if (this.currentListeningWord) {
            const word = this.currentListeningWord.english;
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
        }
    }

    checkListeningAnswer(element, answer) {
        const optionItems = document.querySelectorAll('#listening-options .option-item');
        optionItems.forEach(item => {
            item.removeEventListener('click', () => {});
            if (item.textContent === this.currentListeningWord.english) {
                item.classList.add('correct');
            } else if (item === element) {
                item.classList.add('incorrect');
            }
        });

        if (answer === this.currentListeningWord.english) {
            this.score += 15;
            this.updateScoreBoard();
            
            // 显示正确提示
            const listeningContainer = document.querySelector('.listening-container');
            const messageElement = document.createElement('div');
            messageElement.className = 'success-message';
            messageElement.textContent = '回答正确！';
            listeningContainer.appendChild(messageElement);
            
            // 2秒后自动跳转下一题
            setTimeout(() => {
                messageElement.remove();
                this.nextRound();
            }, 2000);
        }
    }

    generateQuizQuestion() {
        const questionContainer = document.getElementById('quiz-question');
        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';

        const shuffledQuestions = this.shuffleArray([...this.gameData.quizQuestions]);
        this.currentQuizQuestion = shuffledQuestions[0];

        questionContainer.textContent = this.currentQuizQuestion.question;

        this.shuffleArray([...this.currentQuizQuestion.options]).forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-item';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.checkQuizAnswer(optionElement, option));
            optionsContainer.appendChild(optionElement);
        });
    }

    checkQuizAnswer(element, answer) {
        const optionItems = document.querySelectorAll('#quiz-options .option-item');
        optionItems.forEach(item => {
            item.removeEventListener('click', () => {});
            if (item.textContent === this.currentQuizQuestion.answer) {
                item.classList.add('correct');
            } else if (item === element) {
                item.classList.add('incorrect');
            }
        });

        if (answer === this.currentQuizQuestion.answer) {
            this.score += 20;
            this.updateScoreBoard();
            
            // 显示正确提示
            const quizContainer = document.querySelector('.quiz-container');
            const messageElement = document.createElement('div');
            messageElement.className = 'success-message';
            messageElement.textContent = '回答正确！';
            quizContainer.appendChild(messageElement);
            
            // 2秒后自动跳转下一题
            setTimeout(() => {
                messageElement.remove();
                this.nextRound();
            }, 2000);
        }
    }

    updateScoreBoard() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.level;
    }

    playAgain() {
        this.score = 0;
        this.level = 1;
        this.updateScoreBoard();
        this.showMenu();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// 初始化游戏
window.addEventListener('DOMContentLoaded', () => {
    new EnglishLearningGame();
});

// 添加音频播放功能的兼容性处理
if ('speechSynthesis' in window) {
    console.log('语音合成功能可用');
} else {
    console.log('语音合成功能不可用');
}