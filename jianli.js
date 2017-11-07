$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#466096','#233237','#336666' , '#984b43', '#56590A', '#18121E'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', 'lastPage'],
				menu: '#menu',
        verticalCentered: false,
        navigation: true,        
				scrollingSpeed: 1000,
       
        afterLoad: function(anchorLink, index){
            if(anchorLink == 'secondPage'){
                $('.skillbar').each(function(){
                  $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                  },1500);
                });
            }
        },
        onLeave: function(index, nextIndex, direction) {
          if(index == 2){
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