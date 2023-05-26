const input = document.createElement("input");
document.body.append(input);
input.style.width = '600px';
input.style.height = '50px';
input.style.border = '5px solid black';
input.style.fontSize = '30px';
input.style.margin = '100px 300px 0';
input.style.textAlign = 'center';

const div = document.createElement("div");
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'red';
div.style.margin = '0px 714px';

input.addEventListener("mouseover", () =>
    document.body.append(div)
);

input.addEventListener("mouseout", () =>
    div.remove()
);