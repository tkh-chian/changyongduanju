// 泰语字母数据
const thaiLetters = [
    { thai: 'ก', pronunciation: 'gɔɔ gài', meaning: '鸡' },
    { thai: 'ข', pronunciation: 'kʰɔɔ kʰài', meaning: '蛋' },
    { thai: 'ฃ', pronunciation: 'kʰɔɔ kʰùat', meaning: '瓶子' },
    { thai: 'ค', pronunciation: 'kʰɔɔ kʰwaai', meaning: '水牛' },
    { thai: 'ฅ', pronunciation: 'kʰɔɔ kʰon', meaning: '人' },
    { thai: 'ฆ', pronunciation: 'kʰɔɔ rákʰaŋ', meaning: '钟' },
    { thai: 'ง', pronunciation: 'ŋɔɔ ŋuu', meaning: '蛇' },
    { thai: 'จ', pronunciation: 'jɔɔ jaan', meaning: '盘子' },
    { thai: 'ฉ', pronunciation: 'cʰɔɔ cʰìŋ', meaning: '钹' },
    { thai: 'ช', pronunciation: 'cʰɔɔ cʰáaŋ', meaning: '象' },
    { thai: 'ซ', pronunciation: 'sɔɔ sôo', meaning: '链子' },
    { thai: 'ฌ', pronunciation: 'cʰɔɔ chəə', meaning: '树' },
    { thai: 'ญ', pronunciation: 'yɔɔ yǐŋ', meaning: '女人' },
    { thai: 'ฎ', pronunciation: 'ɖɔɔ cʰadaa', meaning: '王冠' },
    { thai: 'ฏ', pronunciation: 'tɔɔ patak', meaning: '刺' },
    { thai: 'ฐ', pronunciation: 'tʰɔɔ tʰǎan', meaning: '底座' },
    { thai: 'ฑ', pronunciation: 'tʰɔɔ montʰoo', meaning: '夫人' },
    { thai: 'ฒ', pronunciation: 'tʰɔɔ pʰuutʰao', meaning: '老人' },
    { thai: 'ณ', pronunciation: 'nɔɔ neen', meaning: '沙弥' },
    { thai: 'ด', pronunciation: 'dɔɔ dèk', meaning: '孩子' },
    { thai: 'ต', pronunciation: 'tɔɔ tao', meaning: '乌龟' },
    { thai: 'ถ', pronunciation: 'tʰɔɔ tʰǔŋ', meaning: '袋子' },
    { thai: 'ท', pronunciation: 'tʰɔɔ tʰaháan', meaning: '士兵' },
    { thai: 'ธ', pronunciation: 'tʰɔɔ tʰoŋ', meaning: '旗子' },
    { thai: 'น', pronunciation: 'nɔɔ nuu', meaning: '老鼠' },
    { thai: 'บ', pronunciation: 'bɔɔ bai mái', meaning: '叶子' },
    { thai: 'ป', pronunciation: 'pɔɔ plaa', meaning: '鱼' },
    { thai: 'ผ', pronunciation: 'pʰɔɔ pʰɯ̂ŋ', meaning: '蜜蜂' },
    { thai: 'ฝ', pronunciation: 'fɔɔ fǎa', meaning: '盖子' },
    { thai: 'พ', pronunciation: 'pʰɔɔ pʰaan', meaning: '盘子' },
    { thai: 'ฟ', pronunciation: 'fɔɔ fan', meaning: '牙齿' },
    { thai: 'ภ', pronunciation: 'pʰɔɔ sǎmpʰao', meaning: '帆船' },
    { thai: 'ม', pronunciation: 'mɔɔ máa', meaning: '马' },
    { thai: 'ย', pronunciation: 'yɔɔ yák', meaning: '巨人' },
    { thai: 'ร', pronunciation: 'rɔɔ rɯa', meaning: '船' },
    { thai: 'ล', pronunciation: 'lɔɔ liŋ', meaning: '猴子' },
    { thai: 'ว', pronunciation: 'wɔɔ wɛ̌ɛn', meaning: '戒指' },
    { thai: 'ศ', pronunciation: 'sɔɔ sǎalaa', meaning: '亭子' },
    { thai: 'ษ', pronunciation: 'sɔɔ rɯɯsǐi', meaning: '隐士' },
    { thai: 'ส', pronunciation: 'sɔɔ sɯ̌a', meaning: '老虎' },
    { thai: 'ห', pronunciation: 'hɔɔ hìip', meaning: '盒子' },
    { thai: 'ฬ', pronunciation: 'lɔɔ julaa', meaning: '风筝' },
    { thai: 'อ', pronunciation: 'ɔɔ àaŋ', meaning: '盆' },
    { thai: 'ฮ', pronunciation: 'hɔɔ nók hùuk', meaning: '猫头鹰' }
];

class ThaiAlphabetLearning {
    constructor() {
        this.currentIndex = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.playTimeout = null;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        
        this.initializeElements();
        this.setupEventListeners();
        this.renderLetterGrid();
        this.updateDisplay();
    }
    
    initializeElements() {
        this.playBtn = document.getElementById('playBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.currentLetterSpan = document.getElementById('currentLetter');
        this.progressText = document.getElementById('progressText');
        this.currentLetterCard = document.getElementById('currentLetterCard');
        this.letterGrid = document.getElementById('letterGrid');
    }
    
    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.play());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.stopBtn.addEventListener('click', () => this.stop());
        
        // 处理语音合成事件
        this.speechSynthesis.addEventListener('voiceschanged', () => {
            this.getVoices();
        });
    }
    
    getVoices() {
        const voices = this.speechSynthesis.getVoices();
        this.thaiVoice = voices.find(voice => voice.lang.includes('th')) || voices[0];
        this.chineseVoice = voices.find(voice => voice.lang.includes('zh')) || voices[0];
    }
    
    renderLetterGrid() {
        this.letterGrid.innerHTML = '';
        thaiLetters.forEach((letter, index) => {
            const letterElement = document.createElement('div');
            letterElement.className = 'grid-letter';
            letterElement.innerHTML = `
                <div class="thai">${letter.thai}</div>
                <div class="pronunciation">${letter.pronunciation}</div>
                <div class="meaning">${letter.meaning}</div>
            `;
            letterElement.addEventListener('click', () => this.jumpToLetter(index));
            this.letterGrid.appendChild(letterElement);
        });
    }
    
    updateDisplay() {
        const currentLetter = thaiLetters[this.currentIndex];
        
        // 更新主显示卡片
        this.currentLetterCard.innerHTML = `
            <div class="thai-letter">${currentLetter.thai}</div>
            <div class="pronunciation">${currentLetter.pronunciation}</div>
            <div class="meaning">${currentLetter.meaning}</div>
        `;
        
        // 更新进度信息
        this.currentLetterSpan.textContent = `${currentLetter.thai} - ${currentLetter.meaning}`;
        this.progressText.textContent = `${this.currentIndex + 1}/${thaiLetters.length}`;
        
        // 更新网格中的当前字母高亮
        document.querySelectorAll('.grid-letter').forEach((el, index) => {
            el.classList.toggle('current', index === this.currentIndex);
        });
        
        // 滚动到当前字母
        this.scrollToCurrentLetter();
    }
    
    scrollToCurrentLetter() {
        const currentGridLetter = document.querySelectorAll('.grid-letter')[this.currentIndex];
        if (currentGridLetter) {
            currentGridLetter.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }
    
    async speak(text, voice, lang = 'th-TH') {
        return new Promise((resolve, reject) => {
            if (this.currentUtterance) {
                this.speechSynthesis.cancel();
            }
            
            this.currentUtterance = new SpeechSynthesisUtterance(text);
            this.currentUtterance.lang = lang;
            this.currentUtterance.rate = 0.8;
            this.currentUtterance.pitch = 1;
            
            if (voice) {
                this.currentUtterance.voice = voice;
            }
            
            this.currentUtterance.onend = () => {
                resolve();
            };
            
            this.currentUtterance.onerror = (event) => {
                console.error('Speech synthesis error:', event);
                resolve(); // 继续执行，不要因为语音错误而停止
            };
            
            this.speechSynthesis.speak(this.currentUtterance);
        });
    }
    
    async playCurrentLetter() {
        if (!this.isPlaying || this.isPaused) return;
        
        const currentLetter = thaiLetters[this.currentIndex];
        this.currentLetterCard.classList.add('active');
        
        try {
            // 播放泰语字母 3 次
            for (let i = 0; i < 3; i++) {
                if (!this.isPlaying || this.isPaused) return;
                await this.speak(currentLetter.thai, this.thaiVoice, 'th-TH');
                if (i < 2) await this.delay(500); // 短暂停顿
            }
            
            await this.delay(800); // 稍长停顿
            
            // 播放中文意思 3 次
            for (let i = 0; i < 3; i++) {
                if (!this.isPlaying || this.isPaused) return;
                await this.speak(currentLetter.meaning, this.chineseVoice, 'zh-CN');
                if (i < 2) await this.delay(500); // 短暂停顿
            }
            
        } catch (error) {
            console.error('播放出错:', error);
        }
        
        this.currentLetterCard.classList.remove('active');
        
        if (this.isPlaying && !this.isPaused) {
            await this.delay(1000); // 字母间停顿
            this.nextLetter();
        }
    }
    
    delay(ms) {
        return new Promise(resolve => {
            this.playTimeout = setTimeout(resolve, ms);
        });
    }
    
    nextLetter() {
        if (!this.isPlaying) return;
        
        this.currentIndex = (this.currentIndex + 1) % thaiLetters.length;
        this.updateDisplay();
        
        if (this.isPlaying && !this.isPaused) {
            this.playCurrentLetter();
        }
    }
    
    jumpToLetter(index) {
        this.currentIndex = index;
        this.updateDisplay();
        
        if (this.isPlaying && !this.isPaused) {
            this.speechSynthesis.cancel();
            this.playCurrentLetter();
        }
    }
    
    play() {
        this.isPlaying = true;
        this.isPaused = false;
        
        this.playBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.stopBtn.disabled = false;
        
        this.getVoices(); // 确保获取到语音
        this.playCurrentLetter();
    }
    
    pause() {
        this.isPaused = true;
        this.speechSynthesis.cancel();
        
        if (this.playTimeout) {
            clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }
        
        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.currentLetterCard.classList.remove('active');
    }
    
    stop() {
        this.isPlaying = false;
        this.isPaused = false;
        this.speechSynthesis.cancel();
        
        if (this.playTimeout) {
            clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }
        
        this.currentIndex = 0;
        this.updateDisplay();
        
        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.stopBtn.disabled = true;
        this.currentLetterCard.classList.remove('active');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new ThaiAlphabetLearning();
});

// 处理页面可见性变化，暂停播放当页面不可见时
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.thaiLearning) {
        // 页面隐藏时暂停
        if (window.thaiLearning.isPlaying && !window.thaiLearning.isPaused) {
            window.thaiLearning.pause();
        }
    }
});

// 保存实例到全局变量以便调试
document.addEventListener('DOMContentLoaded', () => {
    window.thaiLearning = new ThaiAlphabetLearning();
});