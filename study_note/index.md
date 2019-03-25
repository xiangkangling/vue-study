#### 生命周期（几个钩子函数）
创建前后：beforeCreate / created    
beforeCreate: 此钩子函数中，vue实力还未创建，可在此函数中做`加载动画`       
created: 此函数中vue组件已经创建出来了，但DOM还没有生成，可在此函数中`获取数据赋给属性`，`结束动画操作`     
挂载前后： beforeMount / mounted     
beforeMount: 渲染template模板，DOM还没有生成，页面仍未显示，但虚拟DOM已配置                     
mounted： DOM渲染完成，页面可以看到内容了，可在此函数中`获取后台数据，渲染页面`     
更新前后： beforeUpdate / updated       
beforeUpdate: 组件更新之前，页面仍未更新，但虚拟DOM已经配置                 
updated：组件更新，此方法执行后，页面显示       
销毁前后： beforeDestroy / destroyed        
beforeDestroy: 组件销毁前       
destroy: 组件销毁         


