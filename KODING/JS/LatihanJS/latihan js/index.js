
const skillholder = document.getElementById('skill');   // 1.
const skil = ["komputer", "membaca", "agama", ];        // 2.
// console.log(skil[0]);   // 3.

skil.push('developer') //4.
// skillholder.innerHTML = `<li>${skil}</li>`;     // 5. 
let parent = "<ul>";    // 8. pakai var agar bisa di akses scoop function

skil.forEach( (a) => {                            // 6. 
    parent == "<li>" + a + "</li>"
    console.log(a)                      // 7.
} ) 

parent == "</ul>"

skillholder.innerHTML == parent;