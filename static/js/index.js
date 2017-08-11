$(function() {
    // 自适应宽度
    var contentCon=$('.content-con');
    var navCon=$('.nav-con');
    window.onload=window.onresize=function(){        
        contentCon.width($(document.body).width()-navCon.width()-80);
        var h=forMax(navCon.outerHeight(),contentCon.outerHeight());
        $('.content').css({'height':h});
        $('.content-padding').css({'height':h-80});
    };
    //取最大值
    function forMax(a,b){        
        return a >= b ? a : b;
    };
    // 导航切换
    layui.use('element');
    // form查询
    layui.use(['form', 'layedit', 'laydate'],
    function() {
        var form = layui.form(),
        layer = layui.layer,
        layedit = layui.layedit,
        laydate = layui.laydate;

        var start = {
            min: laydate.now(),
            max: '2099-06-16 23:59:59',
            istoday: false,
            choose: function(datas) {
                end.min = datas; //开始日选好后，重置结束日的最小日期
                end.start = datas //将结束日的初始值设定为开始日
            }
        };

        var end = {
            min: laydate.now(),
            max: '2099-06-16 23:59:59',
            istoday: false,
            choose: function(datas) {
                start.max = datas; //结束日选好后，重置开始日的最大日期
            }
        };

        $('#LAY_demorange_s').click(function() {
            start.elem = this;
            laydate(start);
        });
        $('#LAY_demorange_e').click(function() {
            start.elem = this;
            laydate(start);
        });

        

    });
    
});
//上传图片 得到url
function getObjectURL(file) { 
    var url = null ; 
    if (window.createObjectURL!=undefined) {  
        url = window.createObjectURL(file) ; 
    } else if (window.URL!=undefined) {  
        url = window.URL.createObjectURL(file) ; 
    } else if (window.webkitURL!=undefined) { 
        url = window.webkitURL.createObjectURL(file) ; 
    } 
    return url ;
}
//上传图片 预览
function previewImage(file,callback){   
    if (file.files && file.files[0]){
        for(var i=0,n=file.files.length;i<n;i++){            
            var fileIndex=file.files[i];            
            if(validatePicture(fileIndex)){
                var filePic=getObjectURL(fileIndex); 
                var filePicName=fileIndex.name;
                callback&&callback(filePic,filePicName);
            }    
        }
                 
    }
};

//判断图片格式
function validatePicture(obj) {
    var boolResult = true;    
    if (obj){        
        var imgUrlType = judge(obj);         
        if(!imgUrlType){
            layer.msg('上传图片格式不正确！');
            boolResult = false;
        }else if(obj.size>1024*400){ //图片大于400kb
            layer.msg('上传图片应小于400kb！');
            boolResult = false;
        }
    } 
    return boolResult; 
};
function judge(obj){
    var str='';
    if(obj.name.match(/.jpg/i)){
        str='.jpg';
    }else if(obj.name.match(/.jpeg/i)){
        str='.jpeg';
    }else if(obj.name.match(/.png/i)){
        str='.png';
    }else if(obj.name.match(/.gif/i)){
        str='.gif';
    }else if(obj.name.match(/.bmp/i)){
        str='.bmp';
    }
    return str;
};

//全选获取元素
var layTable=$('.layui-table');
var first=layTable.find('thead input[type="checkbox"]').get(0);
 
//全选
function allChoose(){ 
    var child = layTable.find('tbody input[type="checkbox"]'); 
    child.each(function(index, item){
        item.checked = first.checked;
    });    
}

//判断是否选中状态
function isChoose(){
    var child = layTable.find('tbody input[type="checkbox"]'); 
    var ischoose=false;
    child.each(function(index, item){        
        if(!item.checked){
            ischoose=false;
            return false;           
        }else{
            ischoose=true
            return true;             
        }
    }); 
    return ischoose;   
}; 
//判断是否选中状态后把状态赋给全选按钮
function checkmore(){    
    var checkflag=isChoose();
    first.checked = checkflag;
}
//删除
function cancelGoods(str){   

    switch(str)
    {
        case 'all':   
            var child = layTable.find('tbody input[type="checkbox"]');  
            layer.confirm('您确定删除吗？', {
                title:false,
                btn: ['确定','取消']
            }, function(index1){
                child.each(function(index, item){           
                    if(!item.checked){
                        //layer.msg("请先选择要删除的项");                  
                        return false;
                    }else{
                        $(item).parents('tr').remove();   
                        first.checked=false;                    
                    }
                }); 
                layer.close(index1); 
            }); 
            break;
        case 0:
            var childtr=layTable.find('tbody tr');
            layer.confirm('您确定删除吗？', {
                title:false,
                btn: ['确定','取消']
            }, function(index1){
                childtr.each(function(index, item){
                    var flag=$(item).find('input[type="checkbox"]').get(0).checked;
                    if(!flag){  
                        //layer.msg("请先选择要删除的项");                      
                        return false;
                    }else{
                        $(item).remove();                                             
                    }
                }); 
                layer.close(index1); 
            }); 
            break;
    }
}







