/* scrollDirection v1.1.0 | (c) 2015 by AlejoSotelo.com.ar | http://github.com/alejoasotelo/scrolldirection/LICENSE.md */

jQuery.fn.extend({
    'scrollDirection' : function(threshold, cb)
    {
        var self = this;

        this.$obj = jQuery(this);

        if (typeof(threshold) == 'function' )
        {
            cb = threshold;
            this.threshold = 200;
        }
        else
            this.threshold = typeof (threshold) != 'defined' ? threshold : 200;

        this.lastPageY = 0;

        this.debounce = function(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        this.scrollHandler = this.debounce(function()
        {
            var pageY = window.pageYOffset;

            if (Math.abs(pageY - self.lastPageY) > self.threshold)
            {
                if (pageY > self.lastPageY)
                {
                    cb('scrolldown');
                    self.$obj.trigger('scrolldown');
                }
                else if (pageY < self.lastPageY)
                {
                    cb('scrollup');
                    self.$obj.trigger('scrollup');
                }

                self.lastPageY  = pageY;
            }
        }, 250);

        this.$obj.bind('scroll', self.scrollHandler);
    },
    onScrollUp : function(cb)
    {
        this.scrollDirection(function(d)
        {
            if (d == 'scrollup')
                cb();
        });
    },
    onScrollDown : function(cb)
    {
        this.scrollDirection(function(d)
        {
            if (d == 'scrolldown')
                cb();
        });
    }
});
