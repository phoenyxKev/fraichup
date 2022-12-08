<template>
  <main>

    <div id="hero-container">
      <section class="hero">
        <h1>Livraison de frites fraîches<br>& légumes prédécoupés</h1>
        <p class="description">Basé à Biot, nous livrons à nos clients des frites et fruits frais mis sous vide.</p>
        <button @click="$router.push('/contact')" class="sample">Obtenez un échantillon gratuit
          <Icon name="material-symbols:chevron-right-rounded" />
        </button>
      </section>
      <div class="background-img"></div>
    </div>

    <section id="process">
      <h2>SERVICE FRAICHUP</h2>
      <ul>
        <li class="on-sight" style="opacity: 0.1;">
          <h3>Qualité<Icon name="mingcute:certificate-fill" /></h3>
          <p>Nous garantissons un produit de qualité, grâce à l'application de notre charte d'engagements.</p>
        </li>
        <li class="on-sight" style="opacity: 0.1;">
          <h3>Fraîcheur garantie <Icon name="noto:kiwi-fruit" /></h3>  
          <p>Nos camions réfrigérés nous permettent de livrer nos produits rapidement en conservant la fraîcheur.</p>
        </li>
        <li class="on-sight" style="opacity: 0.1;">
          <h3>Suivi des commandes <Icon name="fluent-mdl2:issue-tracking" /></h3>
          <p>Afin de cultiver cultiver avec nos partenaires une relation basée sur la confiance nous établissons un suivi sur chaque commande.</p>
        </li>
      </ul>
    </section>

    <section id="map">
      <div class="map-container">
        <a href="https://goo.gl/maps/FBiPPGZpx4yBuH7r6" target="_blank">
          <span>Retrouvez nous sur Google Maps</span>
          <Icon name="logos:google-maps" />
        </a>
        <a href="https://goo.gl/maps/FBiPPGZpx4yBuH7r6" target="_blank">
          <img class="map" src="~/assets/img/map.png" alt="Fraichup Google maps">
        </a>
      </div>
      <ul>
        <li>471 Chem. des Prés, 06410 Biot</li>
        <li><a href="mailto:contactfraichup@gmail.com">contactfraichup@gmail.com</a></li>
        <li><a href="tel:+33658228321">06 58 22 83 21</a></li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    onSight() {
      // Intersection Observer API: apparition animation on screen visibility
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // <- on 100% pixels screen visibility
      }
      const handleIntersect =  (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > options.threshold) {
            entry.target.style.animation = "onSight 1s linear"
            entry.target.style.opacity = "1"
            observer.unobserve(entry.target)
          }        
        })
      }        
      let observer = new IntersectionObserver(handleIntersect, options)
      let elmts = document.querySelectorAll(".on-sight")
      elmts.forEach(elt => {
        observer.observe(elt)    
      })
    }
  },
  mounted() {
    this.onSight()
  },
  unmounted() {
    this.onSight()
  }
}
</script>

<style scoped>
/* HERO */
#hero-container {
  min-height: calc(100vh - 64px - 1rem);
  max-height: calc(100vh - 64px - 1rem);
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr;
}

h1 {
  background: -webkit-linear-gradient(0deg, var(--lightBlue) 50%, var(--darkBlue));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  text-align: center;
  margin: 1rem 0;
  line-height: 1.25;
}

.sample {
  margin: 1rem 0;
  text-align: left;
  font-size: 1.1rem;
  color: var(--darkBlue);
  border: 2px solid var(--darkBlue);
  font-weight: 700;
  padding: 0.8rem;
  border-radius: 8px;
  background-size: 300% 300%;
  animation: animatedgradient 6s ease-in-out infinite alternate;
}

.sample:hover {
  background-color: #2a7fff1a;
}

.sample svg {
  font-size: 1.4rem;
}

@keyframes animatedgradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.background-img {
  background-image: url("~/assets/img/fruits.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
}

/* PROCESS */
#process {
  padding-top: 4rem;
}
h2 {
  margin-top: 2rem;
}
#process h2, h3 {
  text-align: center;
}
#process ul li {
  padding: 1rem;
  border-radius: 4px;
  background-color: white;
  box-shadow: -4px 4px 14px 0px rgba(0, 85, 212, 0.5);
  border: 1px solid rgba(0, 85, 212, 0.2);
  margin: 1rem 0;
}
#process h3 {
  margin: 1rem 0;
}
#process p {
  text-align: left;
}
#process svg {
  font-size: 32px;
  vertical-align: bottom;
}

/* MAP */
#map {
  margin: 4rem 0 2rem 0;
}
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.map-container a {
  text-decoration: underline;
}

.map-container svg {
  vertical-align: baseline;
}

.map {
  margin: 1rem;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 2px solid white;
  cursor: pointer;
  box-shadow: 0 0 11px 4px rgba(0, 85, 212, 0.5);
  position: relative;
}

#map ul {
  margin: auto;
  width: fit-content;
}

/* +> 600px screens */
@media screen and (min-width: 600px) {
  #hero-container {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  #process {
    padding-top: 0rem;
  }
  #process h2 {
    margin-top: 0rem;
  }
  #process ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
}

/* +> 650px screens */
@media screen and (min-width: 650px) {
  #map {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    max-width: fit-content;
    justify-items: start;
    padding-top: 3rem;
    margin: auto;
  }
}

/* +> 900px screens */
@media screen and (min-width: 900px) {
  #process ul {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
}
</style>