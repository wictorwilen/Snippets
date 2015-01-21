// Copy and paste this into the Console window in any browser debugging tool to edit the Alternate CSS for a site
var context = SP.ClientContext.get_current()
var web = context.get_web()
web.set_alternateCssUrl('assets/test.css')
web.update()
context.executeQueryAsync(
function(){
	alert('CSS Updated')
},
function() {
	alert('Error updating CSS')
})
