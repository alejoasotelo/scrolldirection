/* scrollDirection v1.0.0 | (c) 2015 by AlejoSotelo.com.ar | http://github.com/alejoasotelo/scrolldirection/LICENSE.md */

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

        this.scrollHandler = function()
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
        }

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