$(function(){
    $('#category').on('click','.category_ul>li>a',function(){
        //alert(1)
        $(this).parent().find('ul').toggle();
        $(this).parent().siblings().find('ul').slideUp();
        var titleid = $(this).attr("data-title-id");
        $that=$(this);

        categoryProduct(titleid,$that)

    })
    categoryTitle()
})

function categoryTitle(){
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategorytitle',
        success:function(data){
            //console.log(data);
            var html=template('category-title',data)
            $('.category_ul').html(html);
        }
    })
}


function categoryProduct(titleid,$that){
    $.ajax({
        url:'http://182.254.146.100:3000/api/getcategory?titleid='+titleid,
        success:function(data){
            //console.log(data);
            var html = template("category-product",data);
            var $ul = $that.siblings("ul");
            $ul.html(html);
        }
    })
}

