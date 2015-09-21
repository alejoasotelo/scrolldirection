# JS ScrollDirection

Jquery Plugin para detectar scrollup y scrolldown.

* Es necesario jQuery.

Se puede utilizar por ejemplo para ocultar una barra superior cuando se hace scrolldown y luego volver a mostrarla cuando se hace scrolldown.

```javascript
jQuery(document).onScrollDown(function()
{
	console.log('scrolldown');
});

jQuery(document).onScrollUp(function()
{
	console.log('scrollup');
});

jQuery(document).scrollDirection(function(dir)
{
	console.log(dir);
});
```