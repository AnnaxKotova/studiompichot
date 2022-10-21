<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package studiompichot
 */

?>

<div id="backToTop" class="backToTop none"><img src=<?=get_template_directory_uri() . '/images/pictos/top-arrow.svg'?>></div>
	



<footer class="footer">
        <div class="footer__container">
          <figure class="footer__logo">
            <img src="../assets/images/logo__white--center.svg" />
          </figure>
  
          <div class="footer__social-networks">
            <p>Suivez moi sur les réseaux sociaux !</p>
            <div class="footer__social-networks--container">
              <figure>
                <a href="https://www.instagram.com/studio.mpichot/">
                  <img src="../assets/images/instagram--black.svg" />
                </a>
              </figure>
              <figure>
                <a href="https://www.behance.net/studio-marie-pichot">
                  <img src="../assets/images/behance--black.svg" alt=""
                /></a>
              </figure>
              <figure>
                <a href="https://www.linkedin.com/in/marie-pichot-761541188/">
                  <img src="../assets/images/linkedin--black.svg" alt=""
                /></a>
              </figure>
            </div>
          </div>
  
          <menu class="footer__menu">
            <a href="./services.html">Services</a>
            <a href="./realisations.html">Réalisations</a>
            <a href="./about-me.html">A propos</a>
          </menu>
  
          <div class="footer__contacts">
            <p class="bold">Contacts</p>
            <a href="mailto:studio.mpichot@gmail.com">studio.mpichot@gmail.com</a>
            <a href="tel:06 32 05 92 60">06 32 05 92 60</a>
          </div>
        </div>
  
        <a href="#" class="footer__legal-mentions">Mentions légales</a>
      </footer>

    <script type="module" src="../js/script.js"></script>
  </body>
</html>