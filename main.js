// evitando o erro "uncaught referenceerror" da função onScroll
window.addEventListener('scroll', onScroll)
// garantindo que o botão de scroll apareça em qualquer section após página atualizada:
onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    // scrollY home = 0 ~ 827
    // scrollY services = 288 ~ 1849
    // scrollY about = 1850 - 2588
    // scrollY contact = 2589
    
    // definindo a linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha

    // definindo o topo e a altura da seção
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    // o topo da seção alcançou ou passou da linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a base está abaixo da liha alvo   
    
    // onde a seção termina
    const sectionEndAt = sectionTop + sectionHeight

    // o final da seção passou a linha alvo
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    // limites da seção
    const sectionBoudaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
   
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoudaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    //forma que corrigiu o erro que estava dando no chrome e no edge:Uncaught TypeError: Cannot read properties of undefined
    let nav = document.getElementById('navigation')
    if(scrollY > 45) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll')
    }


    //forma feita na aula
    // if(scrollY > 45) {
    //     navigation.classList.add('scroll')
    // } else {
    //     navigation.classList.remove('scroll')
    // }
}

function showBackToTopButtonOnScroll(){
    // My Solution
    // if(scrollY > 500){
    //     backToTopButton.classList.remove('hiddenButton')
    // } else {
    //     backToTopButton.classList.add('hiddenButton')
    // }
    
    // Mike Solution
    if(scrollY > 500){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

// ScrollReveal Lib
let scrollObj = {
    origin: 'top',
    distance: '30px', 
    duration: 1500,
}

ScrollReveal(scrollObj).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services, 
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content
`);


