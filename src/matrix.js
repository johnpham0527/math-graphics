class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        this.string = '';

        for (let r = 0; r < rows; r++) {
            this.data.push(new Array(cols));
            for (let c = 0; c < cols; c++) {
                this.data[r][c] = 0;
            }
        }

        console.log(`The Matrix's data is ${this.data}. this.string is ${this.output('string')}`);
    }

    output(type='html') {
        let lineBreak = type === 'string' ? '\n' : '<br>'; //lineBreak is '\n' if string; otherwise use <br> for HTML
        let output = '';

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                output = output + this.data[r][c] + ' ';
            }
            output = output + lineBreak;
        }

        return output;
    }

    makeIdentity() {
        if (this.rows !== this.cols) {
            console.log('Cannot generate identity matrix: rows and cols are not equal')
            return;
        }

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.data[r][c] = 0;
            }
        }

        for (let r = 0; r < this.rows; r++) {
            this.data[r][r] = 1;
        }
    }
}