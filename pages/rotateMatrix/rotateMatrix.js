var A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function renderGraphic() {

    let gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";

    // <div class="box 2">a</div>
    // <div class="box 3">a</div>
    // <div class="box 4">a</div>

    for (let i = 0; i < A.length; i++) {
        let rowContainer = document.createElement("div");
        rowContainer.className = "rowContaier";

        for (let j = 0; j < A[i].length; j++) {
            let boxElement = document.createElement("div");

            boxElement.className = "box";
            boxElement.innerHTML = A[i][j];

            rowContainer.appendChild(boxElement);
        }
        gridContainer.appendChild(rowContainer);
    }



}

function transpose() {
    let N = A.length;

    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            swap(A, i, j, j, i);
        }
    }

    renderGraphic();
}

function swap(A, i, j, k, l) {
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
}

function exchangeCols() {
    // Create a temporary array to store the left column.
    const temp = [];
    for (let i = 0; i < A.length; i++) {
        temp.push(A[i][0]);
    }

    // Replace the left column with the right column.
    for (let i = 0; i < A.length; i++) {
        A[i][0] = A[i][2];
    }

    // Replace the right column with the temporary array.
    for (let i = 0; i < A.length; i++) {
        A[i][2] = temp[i];
    }
    renderGraphic();
}

function rotateMatrix() {
    transpose();
    exchangeCols();
}

renderGraphic();

// console.log("Original matrix = " + JSON.stringify(A));
// transpose(A);
// console.log("Transpose A = " + JSON.stringify(A));
// exchangeCols(A);
// console.log("A Rotated = " + JSON.stringify(A));