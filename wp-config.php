<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'studiompichot' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'anna' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '1234' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mIg$[CO<}Tu890j 6TP#R.9Kd}lGOX8+o~sV-TaEG?Q9B`gztT,R ([Ty<a=0<-`' );
define( 'SECURE_AUTH_KEY',  '_>[/t,UavO%#|E5~*bmCxqcf^sk$#F%uW{!qIqha94eBUk6+VsF>c+3,0oV,4Ag`' );
define( 'LOGGED_IN_KEY',    '3mSp)2bcB#`B^T>au47tYm:r}uxIQ6$5)% sM~LA8`+;rkf@sSU&-2]RzEy0v.f3' );
define( 'NONCE_KEY',        '5iA.z^D(J2G%e#(I(tnIUy8<>1VS}P.+ E KNeMF/pfAJ]`}[1!x)4hFA@s4s_Ur' );
define( 'AUTH_SALT',        '.wl80B5|^#kVyF=/pB:LwmSHB.Ofe4(GW(G>KqFt|yo.v*bH_*[:=+_w?zkcz[MH' );
define( 'SECURE_AUTH_SALT', '~O <*J>ee[GH}SgrR10~EK/4lxR[-~r@j?@-JU<?VDsHT?fSwF.Gwak}zj[K[qs0' );
define( 'LOGGED_IN_SALT',   '7QBbS-MvV!B3tAox;ZI[ji3(w%.}D^/t`mqfief4U%$(8S .Pr+lBp.[%KJX0XN*' );
define( 'NONCE_SALT',       '|@C]K+F,iP>:X0lFk]550]N2s2A^8fWb1QfwC$.<G^8Sm:0GyWWvB@]J?xF6g0_q' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
