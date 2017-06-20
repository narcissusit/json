$('.mob_menu').click(function(){
	$('.main_menu').animate({'top': '86px'}).click(function(){
		$(this).animate({'top':'-200px'});
	})
})

$.getJSON('../json/user.json', function(data){

 $.each(data, function(i, user){
 	var userInfo = '<ul class=userInfo><li>Name:</li><li>Surname:</li><li>Age:</li><li>Country:</li></ul>';
 	var image = '<img src='+user.image+'>'
 	var Name = '<li>'+user.name+'</li>';
 	var Surname = '<li>'+user.surname+'</li>';
 	var Age = '<li>'+user.age+'</li>';
 	var Country = '<li>'+user.country+'</li>';
 	var info = '<ul class="info">'+Name+Surname+Age+Country+'</ul>';
 	var article = [];
 	var articles = [];
 	var body = [];
 	var pages = [];
 	for (var j = 0; j < user.articles.length; j++) {
 		article[j] = user.articles[j].title;
 		articles[j] = '<li>'+user.articles[j].title+'</li>';
 		body[j] = user.articles[j].body;
 		pages[j] = user.articles[j].pages;

 		$('.art').append('<div class="art_block">'+'<h3>'+article[j]+'</h3><p class="artBody">'+body[j]+'</p><p>Author: '+user.name+' '+user.surname+'</p><p>Pages: '+pages[j]+'</p></div>');
    }
    var recentArticles='<div class="articl"><h3 class="recent">Recent articles: </h3><ol class="arTitle">'+articles.join('')+'</ol></div>';
    $('.user').append('<div class="user_block">'+image+userInfo+info+recentArticles+'</div>');
 	
 })
});