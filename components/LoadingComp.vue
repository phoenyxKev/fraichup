<template>
  <div class="loading">
    <img src="~/assets/img/Fraichup.svg" alt="Loading message" />
  </div>
</template>

<style>
.loading {
  position: absolute;
  z-index: 1;
  background-color: white;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  text-align: center;
  padding: 2rem;
}
.loading img {
  width: 100%;
  height: 100%;
  margin-top: 200px;
  object-fit: contain;
  animation: imgOpacity 2100ms linear;
  opacity: 0;
}
@keyframes imgOpacity {
  0% {
    opacity: 0.2;
  } 70% {
    opacity: 1;
  } 100% {
    opacity: 0.6;
  }
}

/* +> 600px screens */
@media screen and (min-width: 600px) {
  .loading img {
    width: 80%;
    height: 80%; 
  }
}
</style>