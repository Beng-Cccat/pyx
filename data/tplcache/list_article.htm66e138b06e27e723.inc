<?php
$z[0]=Array("global","",217,243);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("include","",2930,2965);
$z[1][4]=array();
$z[1][4]['filename']="head.htm";
$z[2]=Array("global","",3180,3212);
$z[2][4]=array();
$z[2][4]['name']="cfg_templets_skin";
$z[3]=Array("field","",3482,3511);
$z[3][4]=array();
$z[3][4]['name']="position";
$z[4]=Array("list","\r\n                            <div class=\"row\" id=\"list-item\">\r\n                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\" id=\"listImg\">\r\n                                    [field:array runphp='yes']@me = (empty(@me['litpic']) ? \"\" : \"<a href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}'/></a>\"); [/field:array] \r\n                                </div>\r\n                                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\" id=\"listright\"> \r\n                                [<b>[field:typelink/]</b>] <a href=\"[field:arcurl/]\" class=\"title\">[field:title/]</a> <span class=\"info\"> \r\n                                <p class=\"descript\"> [field:description/]... </p>  \r\n                                </div>\r\n                             </div>\r\n                            ",3665,4523);
$z[4][4]=array();
$z[4][4]['pagesize']="6";
$z[5]=Array("pagelist","",4656,4722);
$z[5][4]=array();
$z[5][4]['listitem']="index,end,pre,next,pageno";
$z[5][4]['listsize']="5";
$z[6]=Array("arclist","\r\n                         <li style=\"border-top: 1px solid #d8d8d8;padding-top: 10px;\r\n                         margin-bottom: 0px\"><a href=\"[field:arcurl/]\">[field:title/]</a>\r\n                           <p><i class=\"glyphicon glyphicon-time\"></i>\r\n                           20[field:pubdate function=\"MyDate('y-m-d',@me)\"/]</p>\r\n                         </li>\r\n                         ",5248,5687);
$z[6][4]=array();
$z[6][4]['row']="6";
$z[6][4]['orderby']="click";
$z[7]=Array("include","",6371,6408);
$z[7][4]=array();
$z[7][4]['filename']="footer.htm";

?>