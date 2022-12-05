<template>
  <header>
    <div id="logo">
      <img src="~/assets/img/Fraichup.svg" alt="Fraichup06.fr logo" />
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Accueil</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        <li><nuxt-link to="/a-propos">À Propos</nuxt-link></li>
      </ul>
    </nav>    
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#logo {
  display: flex;
  align-items: flex-end;
}
img {
  height: 32px;
}
nav {
  margin-left: 0.5rem;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}
li {
  margin-left: 0.5rem;
}
a {
  transition: all 1s;
  border-bottom: 1px solid transparent;
}
a:hover {
  color: var(--lightBlue);
}
.router-link-exact-active {
  color: var(--darkBlue);
  border-bottom: 1px solid var(--darkBlue);
  font-weight: bold;
}
</style>