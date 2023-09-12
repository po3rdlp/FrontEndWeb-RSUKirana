import ScrollReveal from 'scrollreveal'

const scrollRevealInstance = () => {
  const sr = ScrollReveal()

  sr.reveal('.headline', {
    delay: 200,
    duration: 500,
    easing: 'ease-in-out',
    distance: '20px',
    origin: 'bottom',
    reset: false
  })
}

export default scrollRevealInstance
