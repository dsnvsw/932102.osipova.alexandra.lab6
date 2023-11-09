document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.left');
    const bothButton = document.querySelector('.middle'); // или замените на '.both', если вы добавите такой класс
    const rightButton = document.querySelector('.right');
    const catColumn = document.getElementById('cat');
    const dogColumn = document.getElementById('dog');

    leftButton.addEventListener('click', () => {
        createAsymmetricColumns(catColumn, dogColumn);
    });

    rightButton.addEventListener('click', () => {
        createAsymmetricColumns(dogColumn, catColumn);
    });

    bothButton.addEventListener('click', () => {
        catColumn.style.flexBasis = '50%';
        catColumn.querySelector('img').style.width = '100%';
        catColumn.querySelector('img').style.display = 'block';
        dogColumn.style.flexBasis = '50%';
        dogColumn.querySelector('img').style.display = 'block';
        dogColumn.querySelector('img').style.width = '100%';
    });

    const createAsymmetricColumns = (wideColumnEl, narrowColumnEl) => {
        wideColumnEl.style.flexBasis = '95%';
        wideColumnEl.querySelector('img').style.width = '75%';
        wideColumnEl.querySelector('img').style.display = 'block';
        narrowColumnEl.style.flexBasis = '5%';
        narrowColumnEl.querySelector('img').style.display = 'none';
    };
});