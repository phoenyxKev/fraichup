<template>
  <NuxtLayout>
    <client-only>
      <LoadingComp v-if="!visited" />
      <NavComp v-else />
      <NuxtPage />
      <FooterComp />
    </client-only>
  </NuxtLayout>  
</template>

<script>
export default {
  data() {
    return {
      visited: false
    }
  },
  methods: {
    removeLoading() {
      this.visited = true
    }
  },
  mounted() {
    setTimeout(this.removeLoading, 2000)
  }
}
</script>

<style>
:root {
  --lightBlue: #2a7fff;
  --darkBlue: #0055d4;
  --textColor: rgb(63,63,70);
  --altTextColor: rgb(236, 236, 236);
  --footerColor: rgba(63, 63, 70, 0.2);
}
#__nuxt {
  position: relative;
  min-height: 100vh;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  overflow: hidden;
  color: var(--textColor);
  line-height: 1.5;
}
* {   
  box-sizing: border-box;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    "Segoe UI",
    Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0;
}
main {
  padding: 1rem;
  min-height: 100vh;
}
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  background: transparent;
  border: none;
  outline: 0;
  color: inherit;
  cursor: pointer;
}
button:active {
  transition: transform 250ms;
  transform: scale(0.98);
}

/* ON SIGHT ANIMATION */
@keyframes onSight {
  from { 
    opacity: 0.4;
    transform: translateY(2px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* +> 600px screens */
@media screen and (min-width: 600px) {
  #__nuxt {
    max-width: 1200px;
  }
  main {
    padding: 3rem;
  }
}
</style>