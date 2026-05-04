<?php defined('BLUDIT') or die('Bludit CMS.'); ?>
<?php
$location = hyttehub_custom($cabin, 'location');
$price = hyttehub_custom($cabin, 'price');
$guests = hyttehub_custom($cabin, 'guests');
$coverImage = $cabin->coverImage();
$searchText = trim($cabin->title() . ' ' . $location . ' ' . $price);
?>
<article class="cabin-card" data-cabin-card data-search="<?php echo hyttehub_escape(strtolower($searchText)); ?>">
	<a class="card-media" href="<?php echo $cabin->permalink(); ?>" aria-label="View <?php echo hyttehub_escape($cabin->title()); ?>">
		<?php if ($coverImage): ?>
			<img src="<?php echo $coverImage; ?>" alt="<?php echo hyttehub_escape($cabin->title()); ?>">
		<?php else: ?>
			<div class="cover-placeholder"></div>
		<?php endif; ?>
	</a>
	<div class="card-body">
		<div class="card-meta">
			<?php if ($location): ?><span><?php echo hyttehub_escape($location); ?></span><?php endif; ?>
			<?php if ($price): ?><strong><?php echo hyttehub_escape($price); ?></strong><?php endif; ?>
		</div>
		<h3><a href="<?php echo $cabin->permalink(); ?>"><?php echo $cabin->title(); ?></a></h3>
		<?php if ($guests): ?><p class="small-detail"><?php echo hyttehub_escape($guests); ?> guests</p><?php endif; ?>
		<?php if ($cabin->description()): ?>
			<p><?php echo hyttehub_escape($cabin->description()); ?></p>
		<?php endif; ?>
		<a class="card-link" href="<?php echo $cabin->permalink(); ?>">View cabin</a>
	</div>
</article>
