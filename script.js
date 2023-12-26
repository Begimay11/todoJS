const newList = document.querySelector('.newList')
const parentList = document.querySelector('.parentList')
const addList = document.querySelector('.addList')
const todoList = document.querySelector('.todo')
const addBtn = document.querySelector('.btn')
const textName = document.querySelector('.textName')
const name = document.querySelector('.name')
const sirname = document.querySelector('.sirname')
const throughtIcon = document.querySelector('.throughtIcon')
const entranse = document.querySelector('.entranse')
const extrenseGroup = document.querySelector('.extrense-group') 
const addTexted = document.querySelector('.addTexted')

let lessDiv = false
entranse.addEventListener('click',()=> {
    lessDiv = !lessDiv
    addList.style.display = lessDiv ?  'block' : ''
    extrenseGroup.style.display = 'none'
})
// addBtn.addEventListener('click',()=> {
//     addTodo()
// }) 
sirname.addEventListener('keydown',(e)=> {
    if(e.key === 'Enter'){
        addTodo()
    }
})
function addTodo(){
    addBtn.addEventListener('click',()=> {
        if(name.value !== '' && sirname.value !== ''){
            // const addTexted = document.createElement('h2')
            // addTexted.className = 'addTexted'
            // addTexted.innerHTML = 'Жаңы кошулгандар:'
            // newList.append(addTexted)
            const errName = document.querySelector('.errName')
            const errSirname = document.querySelector('.errSirname')
            newList.style.display = 'block'
            const parentList = document.createElement('div')
            parentList.className = 'parentList'
            newList.append(parentList)
            const textName = document.createElement('h3')
            textName.className = 'textName'
            textName.append(`${name.value}  ${sirname.value}`)
            parentList.append(textName)
            const throughtIcon = document.createElement('input')
            throughtIcon.className = 'throughtIcon'
            throughtIcon.type = 'checkbox'
            parentList.append(throughtIcon)
            const deleteIcon = document.createElement('span')
            deleteIcon.innerHTML = 'X'
            parentList.append(deleteIcon)
            name.value = ''
            sirname.value = ''
            name.style.border = ''
            sirname.style.border = ''
            console.log(errName);
            deleteIcon.addEventListener('click',()=> {
                deleteIcon.parentElement.remove()
            })
            errName ? errName.remove() : null
            errSirname ? errSirname.remove() : null
            let namer = false
            throughtIcon.addEventListener('click',()=> {
                namer = !namer
                textName.style.textDecoration = namer ? 'line-through' : '' 
            })
        }
        else{
            name.style.border = '2px solid red'
            sirname.style.border = '2px solid red'
            if(name.value === ''){
                const errName = document.createElement('h3')
                errName.innerHTML = 'Атыңызды жазыңыз'
                errName.className = 'errName'
                todoList.append(errName)
            }
            if(sirname.value === ''){
                const errSirname = document.createElement('h3')
                errSirname.innerHTML = 'Фамилиянызды жазыңыз'
                errSirname.className = 'errSirname'
                todoList.append(errSirname)
            }
        }
    }) 
}
addTodo()


