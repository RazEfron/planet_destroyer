class Board  {
     draw() {
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            //background color for the whole canvas
            ctx.fillStyle = "darkgrey";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            //floor 
            ctx.fillStyle = "black";
            ctx.fillRect(0, 500, canvas.width, 100);

            //left column
            ctx.fillStyle = "grey";
            ctx.fillRect(0, 0, 50, canvas.height - 100);

            //right column
            ctx.fillStyle = "grey";
            ctx.fillRect(0, 0, 50, canvas.height - 100);
        }
    }
}

module.exports = Board;