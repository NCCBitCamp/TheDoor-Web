function movePawn(element) {
    alert('폰 선택');
    const pawn = element;
    const row = parseInt(pawn.dataset.row);
    const col = parseInt(pawn.dataset.col);

    
    if (row === 1) {
    
        const newRow1 = row + 1;
        const newRow2 = row + 2;
    
        pawn.dataset.row = newRow1;
    
        pawn.classList.add('moving');
    
    } else {
        const newRow = row + 1;
        pawn.dataset.row = newRow;
        pawn.classList.add('moving');
    }

    const newPosition = `<div class="black-pawn" onclick="movePawn(this)" data-row="${pawn.dataset.row}" data-col="${pawn.dataset.col}"></div>`;
    pawn.outerHTML = newPosition;

    pawn.classList.remove('moving');
}