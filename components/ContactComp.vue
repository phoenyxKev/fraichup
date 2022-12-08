<template>
  <main>
    <h2>Contactez-nous</h2>
    <p>Vous pouvez remplir ce formulaire pour nous contacter. Pour demander un échantillon gratuit veuillez cocher la case correspondante.</p>
    <form method="POST" action="https://formspree.io/f/mqkjrlqj" ref="form">     
      <input
        name="name"
        type="text"
        placeholder="Votre nom ou celui de la société"
        required
      />
      <input
        name="tel"
        type="tel"
        placeholder="Téléphone"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        placeholder="Votre message (optionnel)"
        rows="4"
      ></textarea>
      <div class="sample">
        <input
          name="sample"
          type="checkbox"
          value="Je souhaite recevoir un échantillon gratuit"
        />
        <label for="sample">Je souhaite recevoir un échantillon gratuit</label>        
      </div> 
      <div class="btn">
        <button type="submit">GO! <Icon name="majesticons:send" /></button>
      </div>
    </form>
    <div class="links">
      <ul>
        <li><a href="mailto:contactfraichup@gmail.com"><Icon name="ic:baseline-email" /> contactfraichup@gmail.com</a></li>
        <li><nuxt-link to="/"><Icon name="mdi:web" /> www.fraichup06.fr</nuxt-link></li>
        <li><a href="/"><Icon name="ic:round-facebook" /> Facebook</a></li>
        <li><a href="/"><Icon name="uil:linkedin" /> Linkedin</a></li>
        <li><a href="/"><Icon name="ph:instagram-logo-light" /> Instagram</a></li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 2rem 0;
}
/* Form */
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
}
input, textarea {
  font-size: 16px;
  padding: 1rem;
  border-top: 1px solid var(--textColor);
  border-right: 1px solid var(--textColor);
  border-left: 1px solid var(--textColor);
  border-bottom: 1px solid transparent;
  transition: border 0.5s;
  background-color: transparent;
}
input {
  border-bottom: 1px solid transparent;
}
input[type='checkbox'] {
  vertical-align: middle;
}
textarea {
  border-bottom: 1px solid var(--textColor);
}
input:focus, input:focus::placeholder, textarea:focus {
  outline: none;
  font-weight: 500;
}
input:hover, textarea:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.sample {
  margin: 1rem 0;
}
label {
  margin-left: 1rem;
}
.btn {
  text-align: right;
}
button {
  border: 1px solid var(--textColor);
  width: 100px;
  padding: 1rem;
  margin: 8px 0;
  border-radius: 4px;
  font-weight: 600;
  color: var(--darkBlue);
}
svg:nth-child(n) {
  color: var(--darkBlue);
}
button:hover {
  background-color: rgba(0, 85, 212, 0.1);
}

/* Links */
ul {
  margin: 2rem 0;
}
li {
  margin: 0.5rem 0;
}
li:hover {
  text-decoration: underline;
}

/* +> 600px screens */
@media screen and (min-width: 600px) {
  main {
    max-width: 700px;
    margin: auto;  
  }
}
</style>