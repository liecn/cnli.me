$(function (){		
	  // $.getJSON('/js/main.json', function (data) {
    //   $.each (data, function(key, values) {        
    //     var content = ""; 
    //     $.each( values, function( index, item ){
    //       if (jQuery.isEmptyObject(item)) {
    //         return;
    //       }

    //       if (item.selected == 0) {
    //         return true;
    //       }

    //       var bibtex = "";
    //       if (key == "journal") {
    //         bibtex = '<button class="btn btn-default btn-meta" data-toggle="popover" data-html="true" data-placement="bottom" data-trigger="click" data-content="<pre>' 
    //               + "@ARTICLE{" + item.bibtex + ",\n" 
    //               + "author={" + item.author.replace(/,/g, " and") + "},\n"
    //               + "journal={" + item.booktitle + "},\n"
    //               + "title={" + item.title + "},\n"
    //               + "volume={" + item.volume + "},\n"
    //               + "number={" + item.number + "},\n"
    //               + "pages={" + item.pages + "},\n"
    //               + "month={" + item.month + "},\n"
    //               + "year={" + item.year + "},\n"
    //               + '}</pre>"><i class="fa fa-book">&nbsp;</i>Bibtex</button>';
    //       }
    //       else if (key == "conference") {
    //         bibtex = '<button class="btn btn-default btn-meta" data-toggle="popover" data-html="true" data-placement="bottom" data-trigger="click" data-content="<pre>' 
    //               + "@INPROCEEDINGS{" + item.bibtex + ",\n" 
    //               + "author={" + item.author.replace(/,/g, " and") + "},\n"
    //               + "booktitle={" + item.booktitle + "},\n"
    //               + "title={" + item.title + "},\n"
    //               + "pages={" + item.pages + "},\n"
    //               + "month={" + item.month + "},\n"
    //               + "year={" + item.year + "},\n"
    //               + '}</pre>"><i class="fa fa-book">&nbsp;</i>Bibtex</button>';           
    //       }
    //       var remarks = "";
    //       if (item.highlights != "") {
    //         remarks = '<span class="highlight">'+ item.highlights +'</span></br> ';
    //       }
    //       if (item.notes != "") {
    //         remarks = ''+ item.notes + ' </br>';
    //       }
    //       var paper = "";
    //       if (item.paper != "") {
    //         paper = '<a class="btn btn-default btn-meta" href="' + item.paper + '">' 
    //               + '<i class="fa fa-file-pdf-o">&nbsp;</i>PDF</a>';
    //       }
    //       var slides = "";
    //       if (item.slides != "") {
    //         slides = '<a class="btn btn-default btn-meta" href="' + item.slides + '">' 
    //               + '<i class="fa fa-file-powerpoint-o">&nbsp;</i>Slides</a>';
    //       }
    //       var demo = "";
    //       if (item.demo) {
    //         demo = '<a class="btn btn-default btn-meta" href="' + item.demo + '">' 
    //               + '<i class="fa fa-video-camera">&nbsp;</i>Demo</a>';
    //       }
    //       var code = "";
    //       if (item.code) {
    //         code = '<a class="btn btn-default btn-meta" href="' + item.code + '">' 
    //               + '<i class="fa fa-code">&nbsp;</i>Code</a>';
    //       }
    //       var website = "";
    //       if (item.website) {
    //         website = '<a class="btn btn-default btn-meta" href="' + item.website + '">' 
    //               + '<i class="fa fa-link">&nbsp;</i>Website</a>';
    //       }
    //       // content += '<span class="text_block"><li>[<span class="booktitle">' 
    //       // + item.shorttitle + '</span>] ' 
    //       // + item.author.replace('Chenning Li', '<b>Chenning Li</b>') + ', "<a target="blank" href="' 
    //       // + item.link +'">' 
    //       // + item.title + '</a>", ' 
    //       // + item.booktitle + ', ' 
    //       // + item.details + '. ' 
    //       // + remarks + paper + ' ' + slides + ' ' + demo + ' ' + code + ' ' + website + ' ' + bibtex 
    //       // + '</li></span>';
    //       content += '<span class="text_block"><li>[<span class="booktitle">' 
    //       + item.shorttitle + '</span>] <a target="blank" href="' 
    //       + item.link +'">' 
    //       + item.title + '</a></br>' 
    //       + item.author.replace('Chenning Li', '<b>Chenning Li</b>') + '</br>'
    //       + item.booktitle + ', ' 
    //       + item.details + '. </br>' 
    //       + remarks + paper + ' ' + slides + ' ' + demo + ' ' + code + ' ' + website + ' ' + bibtex 
    //       + '</li></span>';
    //     });
    //     $('ol#'+key).html(content);
    //   });
    //   $("[data-toggle='popover']").popover();       
    // });	

    $("[data-toggle='popover']").popover({
      content: $('#'+$("[data-toggle='popover']").attr('data-name')).html()
    });  
        
    $('html').on('click', function(e) {
      if (typeof $(e.target).data('original-title') == 'undefined' &&
         !$(e.target).parents().is('.popover.in')) {
        $('[data-original-title]').popover('hide');
      }
    });   
});