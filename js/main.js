$.ajax({
	url: 'https://randomuser.me/api/',
	data:{results: 50},
	dataType: 'json',
	success: function(data) {
  //     console.log(typeof(data));
  //     console.log(data);
	  
	  var result = data.results;
	  console.log(result);
	  $.each(result, function(index, user){
		var pictureUrl = user.picture.thumbnail;
		var name = user.name.title+' '+user.name.first+' '+user.name.last;
		var phone = user.phone;
		var email = user.email;
		
		var imgDom =$('<img>');
		imgDom.prop('src', pictureUrl);
  
		var nameDom =$('<div class="name">');
		nameDom.text(name);
  
		var phoneDom =$('<a class="phone">');
		phoneDom.prop('href', 'tel:'+phone).text(phone);
  
		var emailDom =$('<a class="email">');
		emailDom.prop('href', 'mailto:'+email).text(email);
  
		$('#user').append(imgDom).append(nameDom).append(phoneDom).append(emailDom);
		
	  });
	  
	}
  });