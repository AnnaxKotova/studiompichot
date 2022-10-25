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

<div id="backToTop" class="backToTop none">
  <!-- <img src=<?=get_template_directory_uri() . '/assets/images/top-arrow.svg'?>> -->
  ↑
</div>
	



<footer class="footer">
        <div class="footer__container">
          <figure class="footer__logo">
            <img src=<?=get_template_directory_uri() . '/assets/images/logo__white--center.svg'?>>
          </figure>
  
          <div class="footer__social-networks">
            <p>Suivez moi sur les réseaux sociaux !</p>
            <div class="footer__social-networks--container">

              <?=link_networks()?>
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
      <?php wp_footer(); ?>
  </body>
</html>