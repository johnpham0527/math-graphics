class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let r = 0; r < rows; r++) {
            this.data.push(new Array(cols));
            for (let c = 0; c < cols; c++) {
                this.data[r][c] = 0;
            }
        }

        console.log(`The Matrix's data is ${this.data}`);
    }
}