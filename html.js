require 'ruble'
=begin 
 HBuilder可使用ruby脚本来扩展代码块和增强操作命令。这是极客的神奇玩具。
  本文档用于用户自定义HTML扩展命令，并非HBuilder预置命令的文档，预置的代码块不可改。查阅预置代码块，请在弹出预置代码块界面时点右下角的编辑按钮，比如div代码块。
  本文档修改完毕，保存即可生效。
  玩的愉快，别玩坏！
  
  脚本开源地址 https://github.com/dcloudio/HBuilderRubyBundle
  可以把你的配置共享到这里，也可以在这里获取其他网友的版本
  
  注：如果1.9版本之前的用户修改过HTML代码块，请点右键打开本文档所在目录，找之前的snippets.rb.bak文件，把修改过的内容放置进来。 
=end

with_defaults :scope => 'text.html text' do |bundle|  #=====HTML标签代码块================================================================================
#如下是一个示例代码块，可以复制后再添加新代码块
  snippet 'div_class' do |cmd|  #div_class是显示名称，代码助手提示列表显示时可见
    cmd.trigger = 'divc'        #divc是激活字符，即按下divc后会触发该代码块
    cmd.expansion = "<div class=\"$1\">
	$0
</div>"                         #expansion是代码块的输出内容，其中$0、$1是光标的停留和切换位置。$1是第一个停留光标，$0是最后回车时停留的光标。
													      #如果输出涉及到换行和tab，也需严格在这里使用换行和tab。
													      #输出双引号在前面加\来转义，输出$使用\$(单引号中)或\\$(双引号中)转义
    cmd.needApplyReContentAssist = true  #这句话的意思是输出后同时激活代码助手，即在$1的位置直接拉出样式列表
  end #div_class代码块结束
  
  snippet 'ng-pluralize' do |cmd|
    cmd.trigger = 'ngp'
    cmd.expansion = "<ng-pluralize>$1</ng-pluralize>"
  end
  
  snippet 'v-' do |s|   #v-vue代码提示
    s.trigger = 'v-'
    s.expansion='v-${1:text/html/show/if/else/else-if/for/on/bind/model/pre/cloak/once}="$2"'
    s.locationType='HTML_ATTRIBUTE'
  end #v代码块结束

end


with_defaults :scope => 'text.html entity.other.attribute-name.html' do |bundle|  #=====HTML属性代码块====================================================
#如下是一个示例代码块，可以复制后再添加新代码块
  snippet 'ng-' do |s|   #ng-是显示名称，代码助手提示列表显示时可见
    s.trigger = 'ng-'		 #ng-是激活字符，即按下ng-后会触发该代码块
    s.expansion='ng-${1:app/bind/bind-html/bind-template/blur/change/checked/class/class-even/class-odd/click/cloak/controller/copy/csp/cut/dblclick/disabled/focus/hide/href/if/include/init/keydown/keypress/keyup/list/model/mousedown/mouseenter/mouseleave/mousemove/mouseover/mouseup/ng-non-bindable/open/options/paste/readonly/repeat-start/repeat-end/selected/show/src/srcset/style/submit/swipe-left/swipe-right/switch/switch-default/switch-when/view}="$2"'
		#expansion是代码块的输出内容，其中$0、$1是光标的停留和切换位置。
	  #$1是第一个停留光标，$0是最后回车时停留的光标。
	  #使用{}包围的内容，是提示值域。
	  #如果输出涉及到换行和tab，也需严格在这里使用换行和tab。
	  #输出双引号在前面加\来转义，输出$使用\$(单引号中)或\\$(双引号中)转义
    s.locationType='HTML_ATTRIBUTE'
  end #ng代码块结束
  
end


with_defaults :scope => 'text.html - source', :input => :none, :output => :insert_as_snippet do |bundle|  #=====无显示名称的快捷命令=======================
=begin
如下示例均为系统已经预置的命令，无需重复制作
示例1 Ctrl+Enter输出<br />
  command t(:quick_br) do |cmd|
    cmd.key_binding = 'M2+ENTER'
    cmd.output = :insert_as_snippet
    cmd.input = :none
    cmd.invoke { "<br />" }
  end
示例2 Ctrl+9为选中文字添加包围标签
  command t(:wrap_selection_in_tag_pair) do |cmd|
    cmd.key_binding = "CONTROL+9"
    cmd.input = :selection
    cmd.invoke do |context|
      selection = ENV['TM_SELECTED_TEXT'] || ''
      if selection.length > 0
        "<${1:p}>#{selection.gsub('/', '\/')}</${1:p}>"
      else
        "<${1:p}>$0</${1:p}>"
      end
    end
  end
=end
#可复制一段命令，在下面开始制作新命令

 #elementUI start
  #layout
  snippet 'el-row' do |s|
    s.trigger = 'elrow'
    s.expansion = '<el-row></el-row>'
  end
  
  snippet 'el-col' do |s|
    s.trigger = 'elcol'
    s.expansion = '<el-col :span="$1"></el-col>'
  end
  
  snippet 'el-icon' do |s|
    s.trigger = 'elicon'
    s.expansion = '<i class="el-icon-$1"></i>'
  end
  
  snippet 'el-button' do |s|
    s.trigger = 'elbutton'
    s.expansion = '<el-button type="${1:primary/text/danger/info/waring/success}">$0</el-button>'
  end
  
  snippet 'el-radio' do |s|
    s.trigger = 'elradio'
    s.expansion = '<el-radio v-model="$1" label="$0"></el-radio>'
  end
  
  snippet 'el-radio-group' do |s|
    s.trigger = 'elradiogroup'
    s.expansion = '<el-radio-group v-model="$1">
  <el-radio :label="1">$0</el-radio>
</el-radio-group>'
  end
  
  snippet 'el-radio-group-button' do |s|
    s.trigger = 'elradiogroupbtn'
    s.expansion = '<el-radio-group v-model="$1">
  <el-radio-button :label="1">$0</el-radio>
</el-radio-group>'
  end
  
  snippet 'el-checkbox-group' do |s|
    s.trigger = 'elcheckboxgroup'
    s.expansion = '<el-checkbox-group v-model="$1">
  <el-checkbox label="$0"></el-checkbox>
</el-checkbox-group>'
  end
  
  snippet 'el-checkbox-group-button' do |s|
    s.trigger = 'elcheckboxgroupbutton'
    s.expansion = '<el-checkbox-group v-model="$1">
  <el-checkbox-button label="$0"></el-checkbox>
</el-checkbox-group>'
  end
  
  snippet 'el-input' do |s|
    s.trigger = 'elinput'
    s.expansion = '<el-input v-model="$1" placeholder="$0"></el-input>'
  end
  
  snippet 'el-input-number' do |s|
    s.trigger = 'elinputnumber'
    s.expansion = '<el-input-number v-model="$1"  :min="1" :max="10" label="$0"></el-input-number>'
  end
  
  snippet 'el-select' do |s|
    s.trigger = 'elselect'
    s.expansion = '<el-select v-model="$1" placeholder="请选择">
  <el-option
    v-for="item in $0"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>'
  end
  
  snippet 'el-cascader' do |s|
    s.trigger = 'elcascader'
    s.expansion = '<el-cascader
  :options="$1"
  v-model="$0">
</el-cascader>'
  end
  
  snippet 'el-switch' do |s|
    s.trigger = 'elswitch'
    s.expansion = '<el-switch
  v-model="$1">
</el-switch>$0'
  end
  
  snippet 'el-slider' do |s|
    s.trigger = 'elslider'
    s.expansion = '<el-slider v-model="$1"></el-slider>$0'
  end
  
  snippet 'el-time-picker' do |s|
    s.trigger = 'eltimepicker'
    s.expansion = ' <el-time-picker
  v-model="$1"
  placeholder="$0">
</el-time-picker>'
  end
  
  snippet 'el-date-picker' do |s|
    s.trigger = 'eldatepicker'
    s.expansion = '<el-date-picker
  v-model="$1"
  type="date"
  placeholder="$0">
</el-date-picker>'
  end
  
  snippet 'el-transfer' do |s|
    s.trigger = 'eltransfer'
    s.expansion = '<el-transfer v-model="$1" :data="$0"></el-transfer>'
  end
  
  snippet 'el-form' do |s|
    s.trigger = 'elform'
    s.expansion = '<el-form ref="${1:form}" :model="${1:form}" label-width="$2">
  $0
</el-form>'
  end
  
  snippet 'el-form-item' do |s|
    s.trigger = 'elformitem'
    s.expansion = '<el-form-item prop="$1" label="$0">
  $2
</el-form-item>'
  end
  
  snippet 'el-table' do |s|
    s.trigger = 'eltable'
    s.expansion = '<el-table :data="${1:data}" border style="width: 100%">
  $0    
</el-table>'
  end
  
  snippet 'el-table-column' do |s|
    s.trigger = 'eltablecolumn'
    s.expansion = '<el-table-column prop="$1" label="$0"></el-table-column>'
  end
  
  snippet 'el-dialog' do |s|
    s.trigger = 'eldialog'
    s.expansion = '<el-dialog
  title="$0"
  :visible.sync="$1"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="$1 = false">取 消</el-button>
    <el-button type="primary" @click="$1 = false">确 定</el-button>
  </span>
</el-dialog>'
  end
  
  snippet 'el-tabs' do |s|
    s.trigger = 'eltabs'
    s.expansion = '<el-tabs v-model="$1">
  <el-tab-pane label="用户管理" name="$0">用户管理</el-tab-pane>
</el-tabs>'
  end
  
  snippet 'type' do |s|
    s.trigger = 'type'
    s.expansion = 'type="${1:textarea/selection/index/text/primary/info/success/danger}"'
    s.locationType='HTML_ATTRIBUTE'
  end
  
  
  ##待续 
 
  #elementUI start  
  
end
