AFRAME.registerComponent('car',{

    schema:{ref1:{type:'string', default:'Car/obj.mtl'},
            ref2:{type:'string', default:'Car/tinker.obj'} },


    init:function(){
        this.el.setAttribute('obj-model',{obj:this.data.ref2,mtl:this.data.ref1})
        
        
    }






})