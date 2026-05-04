<?php
$featuredCabins = hyttehub_cabins(3, true);
if (empty($featuredCabins)) {
	$featuredCabins = hyttehub_cabins(3);
}
?>

<section class="hero">
	<div class="hero-copy">
		<p class="eyebrow">Cabin rentals from real owners</p>
		<h1>Find your next cabin getaway</h1>
		<p class="hero-subtitle">Discover unique cabins posted directly by cabin owners.</p>

		<form class="hero-search" action="<?php echo hyttehub_site_url('cabins'); ?>" method="get">
			<label class="sr-only" for="home-cabin-search">Search cabins</label>
			<input id="home-cabin-search" name="q" type="search" placeholder="Search by place, cabin, or price">
			<button type="submit">Search</button>
		</form>

		<div class="hero-actions">
			<a class="button primary" href="<?php echo hyttehub_site_url('cabins'); ?>">Browse cabins</a>
			<a class="button secondary" href="<?php echo hyttehub_site_url('list-your-cabin'); ?>">List your cabin</a>
		</div>
	</div>
	<div class="hero-panel" aria-hidden="true">
		<div class="hero-photo"></div>
		<div class="floating-card">
			<span>Featured stays</span>
			<strong><?php echo count($featuredCabins); ?> cabins ready</strong>
		</div>
	</div>
</section>

<section class="section-block">
	<div class="section-heading">
		<div>
			<p class="eyebrow">Featured cabins</p>
			<h2>Owner-listed places for slower days</h2>
		</div>
		<a href="<?php echo hyttehub_site_url('cabins'); ?>">View all</a>
	</div>

	<?php if (empty($featuredCabins)) : ?>
		<div class="empty-state">
			<h3>No cabins yet</h3>
			<p>Add normal Bludit pages with the custom fields <strong>price</strong> or <strong>location</strong>, then mark selected cabins as featured.</p>
		</div>
	<?php else : ?>
		<div class="cabin-grid">
			<?php foreach ($featuredCabins as $cabin) : ?>
				<article class="cabin-card" data-title="<?php echo hyttehub_e(strtolower($cabin->title())); ?>" data-location="<?php echo hyttehub_e(strtolower(hyttehub_custom($cabin, 'location'))); ?>" data-price="<?php echo hyttehub_e(strtolower(hyttehub_custom($cabin, 'price'))); ?>">
					<a class="card-image" href="<?php echo $cabin->permalink(); ?>">
						<img src="<?php echo hyttehub_e(hyttehub_cover($cabin)); ?>" alt="<?php echo hyttehub_e($cabin->title()); ?>">
					</a>
					<div class="card-body">
						<div class="card-meta">
							<span><?php echo hyttehub_e(hyttehub_custom($cabin, 'location', 'Location available on request')); ?></span>
							<span><?php echo hyttehub_e(hyttehub_custom($cabin, 'price', 'Price on request')); ?></span>
						</div>
						<h3><a href="<?php echo $cabin->permalink(); ?>"><?php echo hyttehub_e($cabin->title()); ?></a></h3>
						<p><?php echo hyttehub_e(hyttehub_excerpt($cabin)); ?></p>
						<a class="text-link" href="<?php echo $cabin->permalink(); ?>">View cabin</a>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>
</section>
