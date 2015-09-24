/**
 * 
 */
function createImageIndex(){
	$("#info").html("正在创建索引...");
	$.ajax({
		type:"POST",
		url:"createImageIndex",
		success : function(obj) {
			if(obj){
				$("#info").html("索引创建成功");
			}else{
				$("#info").html("索引创建失败");
			}
		},
		async : false
	});
}