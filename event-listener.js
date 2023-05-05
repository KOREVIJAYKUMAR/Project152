AFRAME.registerComponent('move-car',{

    schema:{
        moveY:{type:'number',default:1},
        clickCounter:{type:'number',default:0}

    },

    

    update:function(){

        window.addEventListener("click", e=> {
            this.data.clickCounter=this.data.clickCounter+1;

            if(this.data.clickCounter===1){
                const rotation={x:-90, y:20, z:0};
                this.el.setAttribute("rotation",rotation);

            }else if(this.data.clickCounter===2){
                const rotation={x:-90, y:40, z:0};
                this.el.setAttribute("rotation",rotation);

            }else if(this.data.clickCounter===3){
                const rotation={x:-90, y:60, z:0};
                this.el.setAttribute("rotation",rotation);

            }else if(this.data.clickCounter===4){
                const rotation={x:-90, y:80, z:0};
                this.el.setAttribute("rotation",rotation);

            }else if(this.data.clickCounter===5){
                const rotation={x:-90, y:-120, z:0};
                this.el.setAttribute("rotation",rotation);
                
            }else if(this.data.clickCounter===6){
                const rotation={x:-90, y:-140, z:0};
                this.el.setAttribute("rotation",rotation);
                
            }
            else {
                const rotation={x:-90, y:0, z:0}
                this.el.setAttribute("rotation",rotation);
                this.data.clickCounter=0
            }
            
        
            
        
            
        })

  
    }


})