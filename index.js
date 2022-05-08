function backGround(assets,left,bottom,width,hight){
    let back = document.createElement('img')
        back.src = assets;
        back.style.position = 'fixed'
        back.style.left = left + 'px'
        back.style.bottom = bottom + 'px'
        back.style.width = width + 'px'
        back.style.height = hight + 'px'
    document.body.append(back)
return back

}


backGround('assets/sky.png', 0,0,1700,730)
backGround('assets/grass.png', 0,0,1700,300)



const inventory = newInventory()
move(inventory) .to (0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)



move(newImage('assets/tree.png')).to(250, 200)
move(newImage('assets/pillar.png')).to(180, 190)
move(newImage('assets/pine-tree.png')).to(400, 190)
move(newImage('assets/crate.png')).to(530, 200)
move(newImage('assets/well.png')).to(380, 170)
move(newItem('assets/sword.png')).to(200, 100)
move(newItem('assets/shield.png')).to(220, 205)
move(newItem('assets/staff.png')).to(310, 250)