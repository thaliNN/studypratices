// String (textos)
// Number (números)
// Boolean (true or false)
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 
  
  // VERIFICAR SE A 'SECTION' SAIU DA LINHA
  // QUAIS DADOS VOU PRECISAR?
  const sectionTop = section.offsetTop 
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  
  // VERIFICAR SE A BASE ESTÁ ABAIXO DA LINHA ALVO

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // LIMITES DA SEÇÃO
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


  menuElement.classList.remove('active')
  if (sectionBoundaries) { 
    menuElement.classList.add('active')
  } 

}

function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about content`)





// function activateMenuAtCurrentSection(section) {
  // LINHA ALVO
//  const targetLine = scrollY + innerHeight / 2 

  // O TOPO DA SEÇÃO
//  const sectionTop = section.offsetTop 
  
  // ALTURA DA SEÇÃO
//  const sectionHeight = section.offsetHeight
  
  // O TOPO DA SEÇÃO CHEGOU OU ULTRAPASSOU DA LINHA ALVO
//  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  
  //INFORMAÇÕES DOS DADOS E DA LÓGICA 
  //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)
  
  
  // VERIFICAR SE A 'SECTION' SAIU DA LINHA
  // QUAIS DADOS VOU PRECISAR?
  
  // A SEÇÃO TERMINA ONDE?
//  const sectionEndsAt = sectionTop + sectionHeight

  // O FINAL DA SEÇÃO PASSOU DA LINHA ALVO
//  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  // LIMITES DA SEÇÃO
//  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

//  const sectionId = section.getAttribute('id')
//  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


//  menuElement.classList.remove('active')
//  if (sectionBoundaries) { 
//    menuElement.classList.add('active')
//  }

