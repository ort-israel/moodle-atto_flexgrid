YUI.add("moodle-atto_bsgrid-button",function(e,t){function p(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}var n="atto_bsgrid",r="atto_bsgrid",i={INPUTSUBMIT:"atto_bsgrid_selectcolumns"},s=M.util.get_string("thisdirection","langconfig")==="rtl"?"pull-right":"",o='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-6 span6'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-6 span6'+s+'"><p>'+M.util.get_string("column2","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",u='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-4 span4'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-4 span4'+s+'"><p>'+M.util.get_string("column2","atto_bsgrid")+"</p></div>"+'<div class="col-md-4 span4'+s+'"><p>'+M.util.get_string("column3","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",a='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-4 span4'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-8 span8'+s+'"><p>'+M.util.get_string("column2","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",f='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-8 span8'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-4 span4'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",l='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-3 span3'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-3 span3'+s+'"><p>'+M.util.get_string("column2","atto_bsgrid")+"</p></div>"+'<div class="col-md-3 span3'+s+'"><p>'+M.util.get_string("column3","atto_bsgrid")+"</p></div>"+'<div class="col-md-3 span3'+s+'"><p>'+M.util.get_string("column4","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",c='<div class="atto_bsgrid container-fluid"><div class="row-fluid"><div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column1","atto_bsgrid")+"</p></div>"+'<div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column2","atto_bsgrid")+"</p></div>"+'<div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column3","atto_bsgrid")+"</p></div>"+'<div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column4","atto_bsgrid")+"</p></div>"+'<div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column5","atto_bsgrid")+"</p></div>"+'<div class="col-md-2 span2'+s+'"><p>'+M.util.get_string("column6","atto_bsgrid")+"</p></div>"+"</div>"+"</div>",h={col2:{template:o,icon:"col2",title:M.util.get_string("col2","atto_bsgrid")},col3:{template:u,icon:"col3",title:M.util.get_string("col3","atto_bsgrid")},col1x3:{template:a,icon:"col1x3",title:M.util.get_string("col1x3","atto_bsgrid")},col3x1:{template:f,icon:"col3x1",title:M.util.get_string("col3x1","atto_bsgrid")},col4:{template:l,icon:"col4",title:M.util.get_string("col4","atto_bsgrid")},col6:{template:c,icon:"col6",title:M.util.get_string("col6","atto_bsgrid")}},d="";e.namespace("M.atto_bsgrid").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var t=["iconone"];d+='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align">';for(var n in h)p(this.get("enabled_templates"),n)&&(d+='<a class="bsgridtemplateicon {{CSS.INPUTSUBMIT}}" alt="'+h[n].title+'" title="'+h[n].title+'" data-template="'+n+'">'+'<img src="'+M.util.image_url("ed/"+h[n].icon,"atto_bsgrid")+'"/>'+"</a>");d+="</div></form>",e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_bsgrid",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o),s.set("bodyContent",u),s.show(),this.markUpdated()},_getFormContent:function(t){var r=e.Handlebars.compile(d),s=e.Node.create(r({elementid:this.get("host").get("elementid"),CSS:i,component:n,clickedicon:t}));return this._form=s,this._form.all("."+i.INPUTSUBMIT).on("click",this._doInsert,this),s},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus();var t=e.currentTarget.getAttribute("data-template");this.get("host").insertContentAtFocusPoint(h[t].template),this.markUpdated()}},{ATTRS:{enabled_templates:{values:["col2","col3","col1x3","col3x1","col4","col6"]}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
