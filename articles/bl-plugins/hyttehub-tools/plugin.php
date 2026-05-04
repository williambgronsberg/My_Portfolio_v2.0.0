<?php

class pluginHyttehubTools extends Plugin
{
	public function init()
	{
		$this->dbFields = array();
	}

	public function adminSidebar()
	{
		$html  = '<a class="nav-link" href="' . HTML_PATH_ADMIN_ROOT . 'new-content?hyttehub-cabin=1">';
		$html .= '<span class="fa fa-home"></span> New cabin';
		$html .= '</a>';
		$html .= '<a class="nav-link" href="' . HTML_PATH_ADMIN_ROOT . 'content">';
		$html .= '<span class="fa fa-list"></span> Manage cabins';
		$html .= '</a>';

		return $html;
	}

	public function adminBodyEnd()
	{
		$script = <<<'HTML'
<script>
(function () {
	if (window.location.search.indexOf('hyttehub-cabin=1') === -1) {
		return;
	}

	function ready(fn) {
		if (document.readyState !== 'loading') {
			fn();
			return;
		}
		document.addEventListener('DOMContentLoaded', fn);
	}

	ready(function () {
		var title = document.getElementById('jstitle');
		var editor = document.getElementById('jseditor');
		var toolbar = document.getElementById('jseditorToolbar');

		if (title) {
			title.placeholder = 'Cabin name';
		}
		if (editor && !editor.value) {
			editor.placeholder = 'Write the full cabin description here.';
		}
		if (toolbar && !document.getElementById('hyttehub-admin-note')) {
			var note = document.createElement('div');
			note.id = 'hyttehub-admin-note';
			note.className = 'alert alert-info mb-2';
			note.innerHTML = '<strong>New cabin:</strong> add the cabin photo in Options > General, write the description, then fill price, location, guests, bedrooms, amenities, owner email, and featured below the editor.';
			toolbar.parentNode.insertBefore(note, toolbar.nextSibling);
		}
	});
})();
</script>
HTML;

		return $script;
	}
}
