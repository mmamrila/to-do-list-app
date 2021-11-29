function newItem() {

  //Add New Item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //Cross Out Item
  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

  //Add Cross Out Button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
      li.addClass('delete')
  }
  $('#list').sortable();
}
