class box 
{
    constructor (x,y,width,height)
    {
        var options = {
            restituition :0.8
    
        }
        this.body = Bodies.square(x,y,width,height,options)
        this.width = width
        this.height = height

        World .add(world,this.body)

    }


    display()
    {
        var angle = this.body.angle
        var pods = this.body
        push()
        transplate(pos.x,pox.y)
        rotate(angle)
        rectMode(CENTER)
        fill(packageImg)
        rect(0,0,this,width,this.height)
        pop()
    }
}
