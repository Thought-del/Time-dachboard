const timeframeBtns = document.querySelectorAll('.timeframe-btn');
const activityCards = document.querySelectorAll('.activity-card');

let activitiesData = [];

let = currentTimeframe = 'weekly';


fetch('data.json').then((response) => {
    if(!response.ok) throw new Error('Oops!');

    return response.json();
}).then((data) => {
    activitiesData = data;
    console.log('Данные загруженны', activitiesData);

    setActiveTimeframe('weekly');

    updatesCardsData('weekly');
}).catch(error => {
    console.error('Ошибка', error);
});

function setActiveTimeframe(timeframe) {
    timeframeBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');

    });

    const activeBtn = document.querySelector(`[data-timeframe="${timeframe}"]`);

    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-pressed', 'true');
    }

    currentTimeframe = timeframe;
}

function getPeriodText(timeframe) {
    const texts = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    };
    return texts[timeframe];
}

function updatesCardsData(timeframe) {
    activityCards.forEach(card => {
        const cardClasses = Array.from(card.classList);
        const activityClass = cardClasses.find(cls => cls.startsWith('card-'));

        if(!activityClass) return;

        const activityType = activityClass.replace('card-', '');

        const activityData = activitiesData.find(item => {
            return item.title.toLowerCase() === activityType;
        });

        if (activityData) {
            const timeframeData = activityData.timeframes[timeframe];
            
            const currentElement = card.querySelector('.current-hours');
            const previousElement = card.querySelector('.previous-hours');
            
            if (currentElement) {
                currentElement.textContent = `${timeframeData.current}hrs`;
            }
            
            if (previousElement) {
                const periodText = getPeriodText(timeframe);
                previousElement.textContent = `${periodText} - ${timeframeData.previous}hrs`;
            }
        }
    });
}

timeframeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const timeframe = e.target.getAttribute('data-timeframe');

        if (timeframe && timeframe !== currentTimeframe) {

            setActiveTimeframe(timeframe);
            updatesCardsData(timeframe);
        }
    });
});

console.log('Нашли кнопок:', timeframeBtns.length);
console.log('Нашли карточек:', activityCards.length);
console.log('Активность карточки:', activityType);