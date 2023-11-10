const Form = document.querySelector('form')
    const writeText = document.querySelector("form input[type='text']");
    // const Add = document.querySelector(".submit");
    const Done = document.querySelector(".done");
    const Remove = document.querySelector(".remove");
    const Ull = document.querySelector(".ul-todo")

    Form.addEventListener('submit', function (e) {
        e.preventDefault();
        const Value = writeText.value;
        const newList = document.createElement('li');
        const newListDetails = `<span class="text">${Value}</span>
                <div class="todo-btn">
                    <button class="button done">Done</button>
                    <button class="button remove">Remove</button>
                </div>`;
        newList.innerHTML = newListDetails;
        Ull.append(newList);
        writeText.value = "";

    });

    Ull.addEventListener('click', function (e) {
        if (e.target.classList.contains("done")) {
            const Lispan = e.target.parentNode.previousElementSibling;
            Lispan.style.textDecoration = "line-through";
        }
        if (e.target.classList.contains("remove")) {
            const Targetedli = e.target.parentNode.parentNode;
            Targetedli.remove();
        }
    })