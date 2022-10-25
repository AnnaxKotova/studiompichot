<?php

/*
Template name: SERVICES
*/

get_header();

the_content();?>

<section class="work-together centered-annonce without-lines">
  <h2 class="quikens">
    Travaill<img src=<?=get_template_directory_uri() . "/assets/images/flower--black.svg"?> alt="">ns
    ensemble !
  </h2>
  <p>Discutons de votre projet par mail, téléphone ou autour d’un café !</p>
  <a href="./contact" class="button button--black">Me contacter</a>
</section>

<?php
get_footer();
?>

