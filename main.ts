controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < max_jump) {
        jump += 1
        mySprite.vy = -90
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(mySprite, checkpoint)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < max_jump) {
        jump += 1
        mySprite.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.placeOnTile(mySprite, checkpoint)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    checkpoint = location
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.placeOnTile(mySprite, checkpoint)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnTile(mySprite, checkpoint)
})
let location: tiles.Location = null
let max_jump = 0
let jump = 0
let checkpoint: tiles.Location = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    f f f f f f f f f f 
    f f f f f f f f f f 
    f f 6 6 6 6 6 6 f f 
    f f 6 6 6 6 6 6 f f 
    f f 6 6 6 6 6 6 f f 
    f f 6 6 6 6 6 6 f f 
    f f 6 6 6 6 6 6 f f 
    f f 6 6 6 6 6 6 f f 
    f f f f f f f f f f 
    f f f f f f f f f f 
    `, SpriteKind.Player)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level2`)
checkpoint = tiles.getTileLocation(0, 198)
tiles.placeOnTile(mySprite, checkpoint)
controller.moveSprite(mySprite, 100, 0)
jump = 0
max_jump = 2
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
game.onUpdate(function () {
	
})
forever(function () {
    location = mySprite.tilemapLocation()
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile20`)) {
        tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Bottom), true)
    } else {
        tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Top), false)
    }
})
forever(function () {
    mySprite.setFlag(SpriteFlag.ShowPhysics, true)
})
