(function () {
	'use strict';

	var input = document.querySelector('[data-cabin-grid]') ? document.querySelector('#cabin-filter') : null;
	if (!input) {
		return;
	}

	var cards = Array.prototype.slice.call(document.querySelectorAll('[data-cabin-card]'));
	var count = document.querySelector('[data-result-count]');
	var empty = document.querySelector('[data-no-results]');

	function updateCabins() {
		var query = input.value.trim().toLowerCase();
		var visible = 0;

		cards.forEach(function (card) {
			var haystack = [
				card.getAttribute('data-title') || '',
				card.getAttribute('data-location') || '',
				card.getAttribute('data-price') || ''
			].join(' ');
			var match = haystack.indexOf(query) !== -1;

			card.classList.toggle('hidden', !match);
			if (match) {
				visible += 1;
			}
		});

		if (count) {
			count.textContent = visible + (visible === 1 ? ' cabin' : ' cabins');
		}
		if (empty) {
			empty.classList.toggle('hidden', visible !== 0);
		}
	}

	var params = new URLSearchParams(window.location.search);
	var q = params.get('q');
	if (q) {
		input.value = q;
	}

	input.addEventListener('input', updateCabins);
	updateCabins();
})();
