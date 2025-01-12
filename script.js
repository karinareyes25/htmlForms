const form = document.querySelector('.form');

form.addEventListener( 'submit', loadForm )

    function loadForm(e){
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value
        const age = document.querySelector('#age').value;
        const occupation = document.getElementById("occupation").value;
        const recommendation = document.querySelector('input[name="recommendation"]:checked')?.value;
        const languages = document.querySelectorAll('input[type="checkbox"]:checked');
        const languagesCheck = [];
              languages.forEach(language => {
                languagesCheck.push(language.value)
                })

        const comments = document.getElementById("comments").value;
        
    console.log(name, email, age, occupation, recommendation, languages, languagesCheck, comments);  



    }


