<?php $cabins = hyttehub_cabins(); ?>

<section class="page-hero compact">
	<div class="content-wrap">
		<p class="eyebrow">Browse cabins</p>
		<h1>Cabins listed by owners</h1>
		<p>Search by title, location, or price text. Results update instantly in your browser.</p>
	</div>
</section>

<section class="section-block cabins-section">
	<div class="filter-bar">
		<label class="sr-only" for="cabin-filter">Search cabins</label>
		<input id="cabin-filter" class="cabin-filter" type="search" placeholder="Search Trysil, sauna, 1200 kr..." autocomplete="off">
		<span class="result-count" data-result-count><?php echo count($cabins); ?> cabins</span>
	</div>

	<?php if (empty($cabins)) : ?>
		<div class="empty-state">
			<h2>No cabin listings yet</h2>
			<p>Create normal Bludit pages and add a <strong>price</strong> or <strong>location</strong> custom field to make them appear here.</p>
		</div>
	<?php else : ?>
		<div class="cabin-grid" data-cabin-grid>
			<?php foreach ($cabins as $cabin) : ?>
				<?php
				$location = hyttehub_custom($cabin, 'location', 'Location available on request');
				$price = hyttehub_custom($cabin, 'price', 'Price on request');
				$guests = hyttehub_custom($cabin, 'guests');
				?>
				<article class="cabin-card" data-cabin-card data-title="<?php echo hyttehub_e(strtolower($cabin->title())); ?>" data-location="<?php echo hyttehub_e(strtolower($location)); ?>" data-price="<?php echo hyttehub_e(strtolower($price)); ?>">
					<a class="card-image" href="<?php echo $cabin->permalink(); ?>">
						<img src="<?php echo hyttehub_e(hyttehub_cover($cabin)); ?>" alt="<?php echo hyttehub_e($cabin->title()); ?>">
					</a>
					<div class="card-body">
						<div class="card-meta">
							<span><?php echo hyttehub_e($location); ?></span>
							<span><?php echo hyttehub_e($price); ?></span>
						</div>
						<h2><a href="<?php echo $cabin->permalink(); ?>"><?php echo hyttehub_e($cabin->title()); ?></a></h2>
						<?php if ($guests !== '') : ?>
							<p class="guest-line"><?php echo hyttehub_e($guests); ?> guests</p>
						<?php endif; ?>
						<p><?php echo hyttehub_e(hyttehub_excerpt($cabin)); ?></p>
						<a class="button small" href="<?php echo $cabin->permalink(); ?>">View cabin</a>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
		<div class="empty-state hidden" data-no-results>
			<h2>No matches</h2>
			<p>Try another cabin name, location, or price.</p>
		</div>
	<?php endif; ?>
</section>
