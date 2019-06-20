
$(function ()
{
	$('select').selectmenu();
	$('input[type=submit], input[type=button], button')
		.button();
	$('#expandButton')
		.click(function (event)
		{
			event.preventDefault();
		});

	$('#copyright').html("&copy; " + new Date().getFullYear() + " MindFusion");
});

var collapsed = false;
function onExpandCollapse()
{
	if (collapsed)
	{
		$('#info').css('width', '400px');
		$('#content').css('right', '401px');
		$('#expandButton').button("option", "label", ">");
		collapsed = false;
	}
	else
	{
		$('#info').css('width', '0px');
		$('#content').css('right', '0px');
		$('#expandButton').button("option", "label", "<");
		collapsed = true;
	}
}
