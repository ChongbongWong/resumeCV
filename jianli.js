$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#18121E','#336666' ,'#233237', '#984b43', '#C29B48', '#466096'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
				menu: '#menu',
        verticalCentered: false,
        navigation: true,        
				scrollingSpeed: 1000,
       
        afterLoad: function(anchorLink, index){
            if(anchorLink == '3rdPage'){
                $('.skillbar').each(function(){
                  $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                  },1500);
                });
            }
        },
        onLeave: function(index, nextIndex, direction) {
          if(index == 3){
            $('.skillbar-bar').css('width','0px');
          }
        }
        
			});
  
  
      $('.worksimg').hover(function(){
              $(this).css({borderColor: '#FF8376', borderStyle: 'solid'}).animate({
                opacity: '1',
                borderWidth: '5px'
              }, 100);
              }, function(){
                $(this).css({borderColor: '#FF8376', borderStyle: 'solid'}).animate({
                opacity: '0.7',
                borderWidth: '0'  
              }, 100);
         }); 
      
      $('.circleLink').hover(function(){
              $(this).animate({
                borderRadius: '20%',
                opacity: '1'
              }, 300);
              }, function(){
                $(this).animate({              
                borderRadius: '50%',
                opacity: '0.8'
              }, 300);
         }); 
     
 
      
		});