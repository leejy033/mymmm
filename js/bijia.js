/**
 * Created by Administrator on 2017/8/19 0019.
 */

$(function(){
    var productId = GetQueryString("productid");
    //console.log(productId);
    $.ajax({
        url:'http://182.254.146.100:3000/api/getproduct',
        data:{
            "productid":productId
        },
        success:function(data){
            var dataName=data.result[0].productName.split(' ')[0];
            $('.list-title3').html(dataName)

            //图片
            var html=template('product-Pic',data);
            $('.product-list-pt').html(html);
        }
    })
    productList(productId);
})
function productList(productId){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getproductcom",
        data:{
            "productid": productId
        },
        success:function(data){
            console.log(data);
            var html = template("product-List",data);
            $(".product-com-ul").html(html)
        }
    })
}



function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}