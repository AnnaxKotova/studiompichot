<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package studiompichot
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>


<header id="header" 

 <?php if ((is_front_page()) || (is_page('about-me'))) {
echo 'class = "header highlight--blue"';}
else echo 'class="header highlight--white"';
?>
>
<a href="<?= home_url(); ?>" class="header__logo element-desktop">
<img src=<?=get_template_directory_uri() . '/assets/images/logo__black--center.svg'?>>
      </a>
      <a href="<?= home_url(); ?>" class="header__logo element-mobile">
      <img src=<?=get_template_directory_uri() . '/assets/images/logo__black--left.svg'?>>

      </a>
      <menu class="header__menu">
        <nav id="navbar" class="header__navbar">
          <div class="header__navbar--container">
            <figure id="closeMenu" class="header__close element-mobile">

              <img src=<?=get_template_directory_uri() . '/assets/images/close.svg'?>>
            </figure>
            <figure class="element-mobile header__logo--mobile">
              
            <img src=<?=get_template_directory_uri() . '/assets/images/logo__black--left.svg'?>>
            </figure>
            <p class="text-figure header__text-figure element-mobile">
              Travaillons ensemble
            </p>
            <div class="header__items">
              <a
                class="element-mobile"
                href=<?= home_url(); ?>
                >Accueil</a
              >
              <a href=<?= get_permalink( get_page_by_path( 'services/services-web' ) )?>>Services</a>
              <a href=<?= get_permalink( get_page_by_path( 'realisations' ) )?>>Réalisations</a>
              <a href=<?= get_permalink( get_page_by_path( 'about-me' ) )?>>A propos</a>
              <a href=<?= get_permalink( get_page_by_path( 'contact' ) )?>>Contact</a>
            </div>
            <div class="header__contacts element-mobile">
              <a href="tel:06 32 05 92 60">
              <img src=<?=get_template_directory_uri() . '/assets/images/phone.svg'?>>
                <span>06 32 05 92 60</span>
              </a>

              <a href="mailto:studio.mpichot@gmail.com">
                
              <img src=<?=get_template_directory_uri() . '/assets/images/email.svg'?>>
 
                <span>studio.mpichot@gmail.com</span>
              </a>
            </div>
            <div class="header__social-networks element-mobile">
            <?=link_networks()?>
              <!-- <figure>
                <a href="https://www.instagram.com/studio.mpichot/">
                <img src=<?=get_template_directory_uri() . '/assets/images/instagram--black.svg'?>>
                </a>
              </figure>
              <figure>
                <a href="https://www.behance.net/studio-marie-pichot">
                <img src=<?=get_template_directory_uri() . '/assets/images/behance--black.svg'?>>
                  </a>
              </figure>
              <figure>
                <a href="https://www.linkedin.com/in/marie-pichot-761541188/">
               
                <img src=<?=get_template_directory_uri() . '/assets/images/linkedin--black.svg'?>></a>
              </figure> -->
            </div>
          </div>
        </nav>
        <figure id="menu-burger" class="header__menu-burger element-mobile">
                   <img src=<?=get_template_directory_uri() . '/assets/images/menu-burger.svg'?>>
        </figure>
      </menu>
    </header>