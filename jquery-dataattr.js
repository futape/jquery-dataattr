(function($) {
	$.fn.extend({
		dataAttr: function(key, value) {
			if (typeof key == 'undefined') {
				return this.data();
			} else if (typeof key == 'object') {
				$.each(key, function(key, val) {
					$(this).dataAttr(key, val);
				});

				return this;
			} else if (arguments.length > 1) {
				if (typeof value != 'undefined') {
					var attr = getDataAttr(key),
						attrValue = typeof value == 'string' ? value : JSON.stringify(value);

					this.attr(attr, attrValue);
					this.data(key, value);
				}

				return this;
			} else {
				return this.data(key);
			}
		},
		removeDataAttr: function(key) {
			var attr = getDataAttr(key);

			this.removeAttr(attr);
			this.removeData(key);

			return this;
		}
	});

	var getDataAttr = function(key) {
			var attr = 'data-' + key.replace(/[A-Z]/g, '-$&').toLowerCase();
			return attr;
		};
})(jQuery);
