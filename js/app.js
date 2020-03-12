const faders = document.querySelectorAll('.fadeInOnScroll')
const sliders = document.querySelectorAll('.slide-in')

const options = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target)
    }
  })
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.unobserve(slider)
})
