const quotes = {
    1: {
        quote:
            'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author: 'Mother Teresa',
    },
    2: {
        quote:
            `Don't judge each day by the harvest you reap but by the seeds that you plant.`,
        author: 'Robert Louis Stevenson'
    },

    3: {
        quote:
            `The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.`,
        author: 'Helen Keller'
    },
    4: {
        quote:
            `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
        author: 'Ralph Waldo Emerson'
    }
};

let i = 1;
document.querySelector('.btn').addEventListener('click', function (e) {
    if (i > Object.keys(quotes).length) i = 1;

    const q = quotes[i];
    const quotes_area = document.querySelector('.quotes__text');
    quotes_area.innerText = q['quote'];
    const quotes_author = document.querySelector('.quotes__author');
    quotes_author.innerText = q['author'];

    i += 1;
});