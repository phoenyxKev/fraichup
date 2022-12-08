<template>
	<footer action="https://formspree.io/f/mqkjrlqj" method="POST">
		<!-- action="https://formspree.io/f/mdobddan" method="POST" -->
		<div class="img-container">
			<img src="~/assets/img/Fraichup.svg" alt="Fraichup" />	
		</div>		
		<div class="links-container">
			<div class="links">
				<h3>Liens</h3>
				<nuxt-link to="/">Accueil</nuxt-link>
				<nuxt-link to="/contact">Contact</nuxt-link>
				<nuxt-link to="/a-propos">À Propos</nuxt-link>
			</div>
			<div class="links">
				<h3>Mentions Légales</h3>
				<nuxt-link to="/info">Conditions générales d'utilisation</nuxt-link>
				<nuxt-link to="/info">Politique de protection des données</nuxt-link>
			</div>	
		</div>
		
		<div class="footer-wrapper">
			<div class="social-media">
				<a href="/" target="_blank"><Icon name="ic:round-facebook" /></a>
				<a href="/" target="_blank"><Icon name="uil:linkedin" /></a>
				<a href="/" target="_blank"><Icon name="ph:instagram-logo-light" /></a>
			</div>
			<div id="fraichup06">		
				<p>Fraichup06.fr &copy; {{year}}<br>Tous Droits Réservés</p>
			</div>
		</div>

		<div id="credits">
			<p>Dev by <a href="https://twitter.com/phoenyxKev">{ PhoenyxKev }</a></p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>

<style scoped>
footer {
	background-color: var(--footerColor);
	padding: 2rem 1rem;
}
h3 {
	margin-top: 1rem;
}
.img-container {
	text-align: center;
}
img {
	height: 32px;
}
.links {
	display: flex;
	flex-direction: column;
}
.footer-wrapper {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;
}
.social-media {
	margin-top: 1rem;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: space-evenly;
	color: var(--altTextColor);
}
.social-media a {
	padding: 0.2rem 0.6rem;
	font-size: 1.2em;
}
#fraichup06 {
	margin-top: 1rem;
	text-align: right;
}
#fraichup06 p {
	font-family: monospace;
	font-size: 0.9rem;
}
#credits {
	margin-top: 1rem;
	text-align: center;
}
#credits a {
	background: -webkit-linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* +> 650px screens */
@media screen and (min-width: 650px) {
	footer {
    padding: 2rem 3rem;
  }
	.img-container {
		text-align: left;
	}
	.links-container {
		display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
		align-items: start;
	}
	.links {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.links h3 {
		width: 100%;
	}
	.links a {
		margin-right: 1rem;
	}
	.footer-wrapper {
		margin-top: 1rem;
		flex-direction: column;
	}
}
</style>