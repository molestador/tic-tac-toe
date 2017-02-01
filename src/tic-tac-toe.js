class TicTacToe {
    constructor() {
        this.arr = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentSymbol = 'x';
        this.count = 0;

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex > 2 || columnIndex > 2) {
            return;
        }
        if (!this.arr[rowIndex][columnIndex]) {
            this.arr[rowIndex][columnIndex] = this.currentSymbol;
            if (this.currentSymbol === 'x') {
                this.currentSymbol = 'o';
            }
            else { this.currentSymbol = 'x' }
            this.count++;
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if (this.isWinner('x')) {
            return 'x';
        }
        if (this.isWinner('o')) {
            return 'o';
        }
        return null;
    }

    isWinner(current) {

        if ((this.arr[0][0] === current && this.arr[1][0] === current && this.arr[2][0] === current) ||
            (this.arr[0][1] === current && this.arr[1][1] === current && this.arr[2][1] === current) ||
            (this.arr[0][2] === current && this.arr[1][2] === current && this.arr[2][2] === current) ||

            (this.arr[0][0] === current && this.arr[0][1] === current && this.arr[0][2] === current) ||
            (this.arr[1][0] === current && this.arr[1][1] === current && this.arr[1][2] === current) ||
            (this.arr[2][0] === current && this.arr[2][1] === current && this.arr[2][2] === current) ||

            (this.arr[0][0] === current && this.arr[1][1] === current && this.arr[2][2] === current) ||
            (this.arr[2][0] === current && this.arr[1][1] === current && this.arr[0][2] === current))
        { return current }
    }

    noMoreTurns() {
        return this.count >= 9;
    }

    isDraw() {
        if (!(this.noMoreTurns()) || this.getWinner()) {
            return false;
        }
        return true;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
