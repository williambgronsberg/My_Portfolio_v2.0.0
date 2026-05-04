<?php
/*
 * HytteHub theme router.
 *
 * Bludit setup:
 * 1. In Settings > General > Custom fields, paste the custom fields JSON from
 *    the project brief.
 * 2. Cabin owners/admins add each cabin as a normal Bludit page.
 * 3. A page is treated as a cabin listing when it has a price or location
 *    custom field. Missing fields are handled safely by the helpers below.
 */

if (!function_exists('hyttehub_e')) {
	function hyttehub_e($value)
	{
		return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
	}
}

if (!function_exists('hyttehub_custom')) {
	function hyttehub_custom($page, $field, $default = '')
	{
		if (!is_object($page) || !method_exists($page, 'custom')) {
			return $default;
		}

		$value = $page->custom($field);
		if ($value === false || $value === null || $value === '') {
			return $default;
		}

		return $value;
	}
}

if (!function_exists('hyttehub_is_cabin')) {
	function hyttehub_is_cabin($page)
	{
		return trim((string) hyttehub_custom($page, 'price')) !== '' || trim((string) hyttehub_custom($page, 'location')) !== '';
	}
}

if (!function_exists('hyttehub_is_featured')) {
	function hyttehub_is_featured($page)
	{
		$value = hyttehub_custom($page, 'featured');
		return $value === true || $value === 'true' || $value === '1' || $value === 1 || $value === 'on';
	}
}

if (!function_exists('hyttehub_cabins')) {
	function hyttehub_cabins($limit = null, $featuredOnly = false)
	{
		global $content;
		global $pages;

		$cabins = array();
		$items = array();
		$seen = array();
		if (!empty($content) && is_array($content)) {
			foreach ($content as $item) {
				$key = is_object($item) && method_exists($item, 'key') ? $item->key() : md5(serialize($item));
				$seen[$key] = true;
				$items[] = $item;
			}
		}

		if (isset($pages) && is_object($pages) && method_exists($pages, 'getList')) {
			$keys = $pages->getList(1, -1, true, true);
			if (is_array($keys)) {
				foreach ($keys as $key) {
					if (isset($seen[$key])) {
						continue;
					}
					$items[] = new Page($key);
					$seen[$key] = true;
				}
			}
		}

		foreach ($items as $item) {
			if (!hyttehub_is_cabin($item)) {
				continue;
			}

			if ($featuredOnly && !hyttehub_is_featured($item)) {
				continue;
			}

			$cabins[] = $item;
			if ($limit !== null && count($cabins) >= $limit) {
				break;
			}
		}

		return $cabins;
	}
}

if (!function_exists('hyttehub_site_url')) {
	function hyttehub_site_url($path = '')
	{
		$base = method_exists('Theme', 'siteUrl') ? Theme::siteUrl() : DOMAIN_BASE;
		return rtrim($base, '/') . '/' . ltrim($path, '/');
	}
}

if (!function_exists('hyttehub_cover')) {
	function hyttehub_cover($page)
	{
		if (is_object($page) && method_exists($page, 'coverImage') && $page->coverImage()) {
			return $page->coverImage();
		}

		return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 760%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 x2=%221%22 y1=%220%22 y2=%221%22%3E%3Cstop stop-color=%22%23d8e7df%22/%3E%3Cstop offset=%221%22 stop-color=%22%238aa99b%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%221200%22 height=%22760%22 fill=%22url(%23g)%22/%3E%3Cpath d=%22M170 520 370 320l95 95 95-95 285 285H170z%22 fill=%22%23fff%22 opacity=%22.46%22/%3E%3Cpath d=%22M545 520 710 355l320 320H545z%22 fill=%22%23fff%22 opacity=%22.32%22/%3E%3Ccircle cx=%22942%22 cy=%22172%22 r=%2278%22 fill=%22%23fff%22 opacity=%22.42%22/%3E%3C/svg%3E';
	}
}

if (!function_exists('hyttehub_excerpt')) {
	function hyttehub_excerpt($page, $length = 150)
	{
		$text = '';
		if (is_object($page) && method_exists($page, 'description')) {
			$text = trim(strip_tags($page->description()));
		}
		if ($text === '' && is_object($page) && method_exists($page, 'content')) {
			$text = trim(strip_tags($page->content()));
		}
		if (function_exists('mb_strlen') && mb_strlen($text) > $length) {
			return mb_substr($text, 0, $length - 1) . '...';
		}
		if (strlen($text) > $length) {
			return substr($text, 0, $length - 1) . '...';
		}
		return $text;
	}
}

$routeKey = '';
if (isset($url) && method_exists($url, 'slug')) {
	$routeKey = $url->slug();
} elseif (isset($page) && is_object($page) && method_exists($page, 'slug')) {
	$routeKey = $page->slug();
}

$isCabinsRoute = ($routeKey === 'cabins') || (isset($page) && is_object($page) && method_exists($page, 'slug') && $page->slug() === 'cabins');
$isCabinSingle = ($WHERE_AM_I === 'page' && isset($page) && hyttehub_is_cabin($page) && !$isCabinsRoute);
?><!DOCTYPE html>
<html lang="<?php echo Theme::lang(); ?>">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php echo Theme::metaTags('title'); ?>
	<?php echo Theme::metaTags('description'); ?>
	<?php echo Theme::css('css/style.css'); ?>
	<?php Theme::plugins('siteHead'); ?>
</head>
<body>
	<?php Theme::plugins('siteBodyBegin'); ?>
	<?php include(THEME_DIR_PHP . 'header.php'); ?>

	<main id="main-content">
		<?php
		if ($WHERE_AM_I === 'home') {
			include(THEME_DIR_PHP . 'home.php');
		} elseif ($isCabinsRoute) {
			include(THEME_DIR_PHP . 'cabins.php');
		} elseif ($isCabinSingle) {
			include(THEME_DIR_PHP . 'cabin-single.php');
		} else {
			?>
			<section class="page-shell standard-page">
				<div class="content-wrap narrow">
					<?php if (isset($page) && is_object($page)) : ?>
						<h1><?php echo hyttehub_e($page->title()); ?></h1>
						<div class="rich-content">
							<?php echo $page->content(); ?>
						</div>
					<?php else : ?>
						<h1>Page not found</h1>
						<p>The page you are looking for could not be found.</p>
					<?php endif; ?>
				</div>
			</section>
			<?php
		}
		?>
	</main>

	<?php include(THEME_DIR_PHP . 'footer.php'); ?>
	<?php echo Theme::js('js/script.js'); ?>
	<?php Theme::plugins('siteBodyEnd'); ?>
</body>
</html>
