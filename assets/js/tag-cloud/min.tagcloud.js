function showTag(t){jq.getJSON("../post.json",function(a){jq("#show-tag").empty(s);var s="<h2>分类："+t+'</h2><ul class="posts">',e=0;jq.each(a,function(a,n){jq.each(n.tags,function(a,i){i==t&&(s+='<li class="listing-item"><time datetime="'+n.date+'">'+n.date+'</time><a href="'+n.url+'">'+n.title+"</a></li>",e++)})}),e>0&&(s+="</ul>",postNumStr="<span>（"+e+"篇文章）</span>",jq("#show-tag").append(s),jq("#show-tag>h2").append(postNumStr))})}