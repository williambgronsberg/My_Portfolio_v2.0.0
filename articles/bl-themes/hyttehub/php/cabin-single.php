<?php
$location = hyttehub_custom($page, 'location', 'Location available on request');
$price = hyttehub_custom($page, 'price', 'Price on request');
$guests = hyttehub_custom($page, 'guests');
$bedrooms = hyttehub_custom($page, 'bedrooms');
$amenities = hyttehub_custom($page, 'amenities');
$ownerEmail = hyttehub_custom($page, 'owner_email');
?>

<article class="single-cabin">
	<div class="single-cover">
		<img src="<?php echo hyttehub_e(hyttehub_cover($page)); ?>" alt="<?php echo hyttehub_e($page->title()); ?>">
	</div>

	<div class="single-layout">
		<div class="single-main">
			<a class="back-link" href="<?php echo hyttehub_site_url('cabins'); ?>">Back to cabins</a>
			<h1><?php echo hyttehub_e($page->title()); ?></h1>
			<p class="single-location"><?php echo hyttehub_e($location); ?></p>

			<div class="rich-content">
				<?php echo $page->content(); ?>
			</div>
		</div>

		<aside class="booking-panel" aria-label="Cabin details">
			<div class="price-line"><?php echo hyttehub_e($price); ?></div>
			<dl class="detail-list">
				<?php if ($guests !== '') : ?>
					<div><dt>Guests</dt><dd><?php echo hyttehub_e($guests); ?></dd></div>
				<?php endif; ?>
				<?php if ($bedrooms !== '') : ?>
					<div><dt>Bedrooms</dt><dd><?php echo hyttehub_e($bedrooms); ?></dd></div>
				<?php endif; ?>
				<?php if ($amenities !== '') : ?>
					<div class="wide"><dt>Amenities</dt><dd><?php echo hyttehub_e($amenities); ?></dd></div>
				<?php endif; ?>
			</dl>

			<?php if ($ownerEmail !== '') : ?>
				<a class="button primary full" href="mailto:<?php echo hyttehub_e($ownerEmail); ?>?subject=<?php echo rawurlencode('Cabin inquiry: ' . $page->title()); ?>">Contact owner</a>
			<?php else : ?>
				<p class="muted">Owner contact details are not available yet.</p>
			<?php endif; ?>
		</aside>
	</div>
</article>
