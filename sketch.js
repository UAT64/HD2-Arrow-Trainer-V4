var position
var rotation
var count = 0
var positionCount = 1
var rowCount = 2
var inputCount = 0
const stratagems = [
   eagle = [ Eagle500Kg = [1, 2, 3, 3, 3], EagleClusterBomb = [1, 2, 3, 3, 2], EagleAirstrike = [1, 2, 3, 2], EagleStrafingRun = [1, 2, 2], EagleNapalmAirstrike = [1, 2, 3, 1], EagleSmokeStrike = [1, 2, 1, 3], EagleRocketPods = [1, 2, 1, 4], EagleRearm = [1, 1, 4, 1, 2] ],
   orbital = [ OrbitalPrecisionStrike = [2, 2, 1], OrbitalAirburstStrike = [2, 2, 2], Orbital120MMBarage = [2, 2, 3, 4, 2, 3], Orbital380MMBarage = [2, 3, 1, 1, 4, 3, 3], OrbitalWalkingBarage = [2, 3, 2, 3, 2, 3], OrbitalLaser = [2, 3, 1, 2, 3], OrbitalRailcannon = [2, 1, 3, 3, 2], OrbitalGasStrike = [2, 2, 3, 2], OrbitalSmokeStrike = [2, 2, 3, 1], OrbitalGattlingBarage = [2, 3, 4, 1, 1], OrbitalEMSStrike = [2, 2, 4, 3] ],
   support = [ Reinforce = [1, 3, 2, 4, 1], SOSBeacon = [1, 3, 2, 1], Resupply = [3, 3, 1, 2], SEAFArtillery = [2, 1, 1, 3], Hellbomb = [3, 1, 4, 3, 1, 2, 3, 1], SuperSSD = [3, 3, 3, 1, 1], UploadData= [4, 2, 1, 1, 1], SeismicProbe = [1, 1, 4, 2, 3, 3], SuperEarthFlag = [3, 1, 3, 1] ],
   backpack = [ LasGuardDog = [3, 1, 4, 1, 2, 2], GunGuardDog = [3, 1, 4, 1, 2, 3], JumpPack = [3, 1, 1, 3, 1], ShieldGenPack = [3, 1, 4, 2, 4, 2], SupplyPack = [3, 4, 3, 1, 1, 3], BallisticShield = [3, 4, 3, 3, 1, 4] ],
   weapon = [ MachineGun = [3, 4, 3, 1, 2], AntiMaterialRifle = [3, 4, 2, 1, 3], Stalwart = [3, 4, 3, 1, 1, 4], ExpedableAntiTank = [3, 3, 4, 1, 2], RecoillessRifle = [3, 4, 2, 2, 4], Flamethrower = [3, 4, 1, 3, 1], Autocannon = [3, 4, 3, 1, 1, 2], HeavyMachineGun = [3, 4, 1, 3, 3], Railgun = [3, 2, 3, 1, 4, 2], Spear = [3, 3, 1, 3, 3], GrenadeLauncher = [3, 4, 3, 1, 4], LaserCannon = [3, 2, 3, 1, 4, 4], ArcThrower = [3, 2, 3, 1, 4, 4], QuasarCannon = [3, 3, 1, 4, 2], Airburst = [3, 1, 1, 4, 2] ],
   sentry = [ HMGEmplacement = [3, 1,4 , 2, 2, 4], ShieldGeneratorRelay = [3, 3, 4, 2, 4, 2], TeslaTower = [3, 1, 2, 1, 4, 2], APMinefield = [3, 4, 1, 2], IMinefield = [3, 4, 4, 3], MachineGunSentry = [3, 1, 2, 2, 1], GatlingSentry = [3, 1, 2, 4], MortarSentry = [3, 1, 2, 2, 3], AutocannonSentry = [3, 1, 2, 1, 4, 1], RocketSentry = [3, 1, 2, 2, 4], EMSMortarSentry = [3, 1, 2, 3, 2] ],
   vehicle = [ PatriotExosuit = [4, 3, 2, 1, 4, 3, 3], EmancipatorExosuit = [4, 3, 2, 1, 4, 3, 1] ]
]
const stratagemNames = [
   eagle = [ "Eagle 500Kg Bomb", "Eagle Cluster Bomb", "Eagle Airstrike", "Eagle Strafing Run", "Eagle Napalm Airstrike", "Eagle Smoke Strike", "Eagle 100MM Rocket Pods", "Eagle Rearm"],
   orbital = ["Orbital Precision Strike", "Orbital Airburst Strike", "Orbital 120MM HE Barage", "Orbital 380MM HE Barage", "Orbital Walking Barage", "Orbital Laser", "Orbital Railcannon Strike", "Orbital Gas Strike", "Orbital Smoke Strike", "Orbital Gattling Barage", "Orbital EMS Strike" ],
   support = [ "Reinforce", "SOS Beacon", "Resupply", "SEAF Artillery", "NUX-223 Hellbomb", "SSSD Delivery", "Upload Data", "Seismic Probe", "Super Earth Flag" ],
   backpack = [ "AX/LAS-5 Guard Dog Rover", "AX/AR023 Guard Dog", "LIFT-180 Jump Pack", "SH-32 Shield Generator Pack", "B-1 Supply Pack", "SH-20 Ballistic Shield Backpack" ],
   weapon = [ "MG-43 Machine Gun", "APW-1 Anti-Materia Rifle", "M-105 Stalwart", "EAT-17 Expendable Anti-Tank", "GR-8 Recoilless Rifle", "FLAM-40 Flamethrower", "AC-8 Autocannon", "MG-206 Heavy Machine Gun", "RS-422 Railgun", "FAF-14 SPEAR Launcher", "GL-21 Grenade Launcher", "LAS-98 Laser Cannon", "ARC-3 Arc Thrower", "LAS-99 Quasar Cannon", "RL-77 Airburst Rocket Launcher" ],
   sentry = [ "E/MG-101 HMG Emplacement", "FX-12 Shield Generator Relay", "A/ARC-3 Tesla Tower", "MD-6 Anti-Personnel Minefield", "MD-14 Inceniary Mines", "A/MG-43 Machine Gun Sentry", "A/G-16 Gattling Sentry", "A/M-12 Mortar Sentry", "A/AC-8 Autocannon Sentry", "A/MLS-4X Rocket Sentry", "A/M-23 EMS Mortar Sentry" ],
   vehicle = [ "EXO-45 Patriot Exosuit", "EXO-49 Emancipator Exosuit"]
]
var orderSelect, setSelect
var canvas
let arrow, arrowFrame
var arrowEmpty_img, arrowFilled_img, arrowFrame_img
var arrowGroup, arrowFrameGroup
var input
var drawing = true 
var correctValue = 0
var score
var inputs = []
var widthCache, heightCache
var pointX, pointY, point, point_img
let icon, iconFrame
var icon_img, iconFrame_img
var loadIcons = false
var nameLocations = [0, 8, 19, 28, 34, 49, 60]
var iconAnimationValue
var retry, retryImg
var refresh, refreshImg
var retryFrame, retryFrameImg
var refreshFrame, refreshFrameImg
var halted = true


function preload(){
    arrowEmpty_img = loadAnimation("./assets/arrows/Arrow_empty.png","./assets/arrows/Arrow_filled.png", "./assets/arrows/Arrow_incorrect.png")
    arrowFrame_img = loadAnimation("./assets/arrows/Arrow_cover_eagle.png","./assets/arrows/Arrow_cover_orbital.png","./assets/arrows/Arrow_cover_support.png","./assets/arrows/Arrow_cover_backpack.png","./assets/arrows/Arrow_cover_weapon.png","./assets/arrows/Arrow_cover_sentry.png","./assets/arrows/Arrow_cover_vehicle.png")
    point_img = loadImage("./assets/point.png")
    iconFrame_img = loadImage("./assets/iconFrame.png")
    icon_img = loadAnimation(
      "./assets/eagle/Eagle_500KG_Bomb_Icon.webp", "./assets/eagle/Eagle_Cluster_Bomb_Icon.webp", "./assets/eagle/Eagle_Airstrike_Icon.webp", "./assets/eagle/Eagle_Strafing_Run_Icon.webp", "./assets/eagle/Eagle_Napalm_Airstrike_Icon.webp", "./assets/eagle/Eagle_Smoke_Strike_Icon.webp", "./assets/eagle/Eagle_110MM_Rocket_Pods_Icon.webp", "./assets/eagle/HD2_Eagle_Rearm.webp",
      "./assets/orbital/Orbital_Precision_Strike_Icon.webp", "./assets/orbital/Orbital_Airburst_Strike_Icon.webp", "./assets/orbital/Orbital_120MM_HE_Barrage_Icon.webp", "./assets/orbital/Orbital_380MM_HE_Barrage_Icon.webp", "./assets/orbital/Orbital_Walking_Barrage_Icon.webp", "./assets/orbital/Orbital_Laser_Icon.webp", "./assets/orbital/Orbital_Railcannon_Strike_Icon.webp", "./assets/orbital/Orbital_Gas_Strike_Icon.webp", "./assets/orbital/Orbital_Smoke_Strike_Icon.webp", "./assets/orbital/Orbital_Gatling_Barrage_Icon.webp", "./assets/orbital/Orbital_EMS_Strike_Icon.webp", 
      "./assets/support/HD2_Reinforce.webp", "./assets/support/SOS.webp", "./assets/support/HD2_Resupply.webp", "./assets/support/HD2_SEAF_Artillery.png", "./assets/support/Strat_NUX-223_Hellbomb_mk1.png", "./assets/support/DeliverSSSDicon.png", "./assets/support/DeliverSSSDicon.png", "./assets/support/Seismic_probe_icon.png", "./assets/support/HD2_Super_Earth_Flag.png", 
      "./assets/backpack/AX_LAS-5_Guard_Dog_Rover_Icon.webp", "./assets/backpack/AX_AR-23_Guard_Dog_Icon.webp", "./assets/backpack/LIFT-850_Jump_Pack_Icon.webp", "./assets/backpack/SH-32_Shield_Generator_Pack_Icon.webp", "./assets/backpack/B-1_Supply_Pack_Icon.webp","./assets/backpack/SH-20_Ballistic_Shield_Backpack_Icon.webp", 
      "./assets/weapon/MG-43_Machine_Gun_Icon.webp", "./assets/weapon/APW-1_Anti-Materiel_Rifle_Icon.webp", "./assets/weapon/M-105_Stalwart_Icon.webp", "./assets/weapon/EAT-17_Expendable_Anti-Tank_Icon.webp", "./assets/weapon/GR-8_Recoilless_Rifle_Icon.webp", "./assets/weapon/FLAM-40_Flamethrower_Icon.webp", "./assets/weapon/AC-8_Autocannon_Icon.webp", "./assets/weapon/MG-206_Heavy_Machine_Gun_Icon.webp", "./assets/weapon/RS-422_Railgun_Icon.webp", "./assets/weapon/FAF-14_Spear_Icon.webp", "./assets/weapon/GL-21_Grenade_Launcher_Icon.webp", "./assets/weapon/LAS-98_Laser_Cannon_Icon.webp", "./assets/weapon/ARC-3_Arc_Thrower_Icon.webp", "./assets/weapon/LAS-99_Quasar_Cannon_Icon.webp", "./assets/weapon/RL-77_Airburst_Rocket_Launcher_Icon.webp", 
      "./assets/sentry/E_MG-101_HMG_Emplacement_Icon.webp", "./assets/sentry/FX-12_Shield_Generator_Relay_Icon.webp", "./assets/sentry/A_ARC-3_Tesla_Tower_Icon.webp", "./assets/sentry/MD-6_Anti-Personnel_Minefield_Icon.webp", "./assets/sentry/MD-I4_Incendiary_Mines_Icon.webp", "./assets/sentry/A_MG-43_Machine_Gun_Sentry_Icon.webp", "./assets/sentry/A_G-16_Gatling_Sentry_Icon.webp", "./assets/sentry/A_M-12_Mortar_Sentry_Icon.webp", "./assets/sentry/A_AC-8_Autocannon_Sentry_Icon.webp", "./assets/sentry/A_MLS-4X_Rocket_Sentry_Icon.webp", "./assets/sentry/A-M-23_EMS_Mortar_Sentry_Icon.webp", 
      "./assets/vehicle/EXO-45_Patriot_Exosuit_Icon.webp", "./assets/vehicle/EXO-49_Emancipator_Exosuit_Icon.webp"
    )
    retryImg = loadImage("./assets/retry.png")
    refreshImg = loadImage("./assets/refresh.png")
    retryFrameImg = loadAnimation("./assets/retryFrameEmpty.png", "./assets/retryFrameHighlighted.png")
    refreshFrameImg = loadAnimation("./assets/retryFrameEmpty.png", "./assets/retryFrameHighlighted.png")

    /*
    eagle = 0 to 8
    orbital = 9 to 19
    support = 20 to 29
    backpack = 30 to 35
    weapon = 36 to 50
    sentry = 51 to 61
    vehicle = 62 to 63
   */
}

function setup(){
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   console.log("Window.width: ", window.innerWidth,"window.height: ", window.innerHeight)
   frameRate(80) 
    background(rgb(69, 69, 69))
    arrowGroup=new Group()
    arrowFrameGroup=new Group()
    comboSelect()
    //drawPoint()
}

function updateCanvas(){
   canvas.clear()
   window.width = window.innerWidth
   window.height = window.innerHeight
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   console.log("Window.width: ", window.width,"window.height: ", window.height)
   background(rgb(69, 69, 69))
   

}


function comboSelect(){
   setSelect = Math.floor(Math.random() * stratagems.length);
   orderSelect = Math.floor(Math.random() * stratagems[setSelect].length);
   for(var i = 0; i < stratagems[setSelect][orderSelect].length; i++){
      inputs.push(0)
    }
    drawing = true
}


function drawPoint(){
   point = createSprite(pointX, pointY)
   point.addImage("pointImg", point_img)
   point.depth = 90
}



function arrows(){
    console.log("arrows called")
    console.log("Made arrow: ", count)
    arrow = createSprite(/*pointX +*/ positionCount * 100, /*pointY +*/ rowCount * 100)
    arrowFrame = createSprite(/*pointX +*/ positionCount * 100, /*pointY +*/ rowCount * 100)
    arrowFrame.depth = arrow.depth += 1

    arrow.x = /*pointX +*/ positionCount * 100
    arrowFrame.x = /*pointX +*/ positionCount * 100

    /*if(reloadedBefore == true){
      arrow.x += 100
      arrowFrame.x += 100
    }*/

    //arrow.debug = false

    arrow.addAnimation("arrowAnim", arrowEmpty_img)
    arrow.pause()

    arrowFrame.addAnimation("arrowFrameAnim", arrowFrame_img)
    arrowFrame.pause()

    arrow.visible = false
    arrow.scale = 0.12

    arrowFrame.visible = false
    arrowFrame.scale = 0.12
    rectMode(CENTER)



    var arrowRotation = stratagems[setSelect][orderSelect][count]
    //var arrowFrameColour = setSelect

    switch(arrowRotation){
        case 1:
        arrow.rotation = 0
        arrowFrame.rotation = 0
        break

        case 2:
        arrow.rotation = 90
        arrowFrame.rotation = 90
        break

        case 3:
        arrow.rotation = 180
        arrowFrame.rotation = 180
        break

        case 4:
        arrow.rotation = 270
        arrowFrame.rotation = 270
        break

        case 5:
        arrow.visible = false
        arrowFrame.visible = false

        default:
            break
    }

      
      console.log("Before move for arrow:" , count)
      console.log("Arrow.x = ",arrow.x)
      console.log("Arrow.y = ",arrow.y)

      console.log("Before move for arrowFrame:" , count)
      console.log("ArrowFrame.x = ",arrowFrame.x)
      console.log("ArrowFrame.y = ",arrowFrame.y)

      
      window.width = window.innerWidth
      window.height = window.innerHeight

    if(arrow.x >= window.innerWidth - 100 || arrowFrame.x >= window.innerWidth - 100){
      arrow.x = 1
      arrowFrame.x = 1
      rowCount ++
      arrow.y = /*pointY +*/ rowCount * 100
      arrowFrame.y = /*pointY +*/ rowCount * 100
      positionCount = 1
      arrow.x = /*pointX +*/ positionCount * 100
      arrowFrame.x = /*pointX +*/ positionCount * 100
    }

    if(arrow.y >= window.innerHeight - 100 || arrowFrame.y >= window.innerHeight - 100){
      rescale()
      updateCanvas()
      softReset()
    }

      console.log("After move for arrow:" , count)
      console.log("Arrow.x = ",arrow.x)
      console.log("Arrow.y = ",arrow.y)

      console.log("After move for arrowFrame:" , count)
      console.log("ArrowFrame.x = ",arrowFrame.x)
      console.log("ArrowFrame.y = ",arrowFrame.y)
      
      arrowFrame.setFrame(setSelect)
      console.log(inputs)

      if(inputs[count] == 1){
         arrow.setFrame(1)
         console.log("setFrame 1")
      } else if (inputs[count] != 1){
         arrow.setFrame(0)
         console.log("setFrame 0")
      }

      if(count == stratagems[setSelect][orderSelect].length - 1){
         icons()
      }


      
    arrowGroup.add(arrow)
    arrowFrameGroup.add(arrowFrame)
}

function rescale(){
      arrowGroup.setScaleEach(0.08)
      arrowFrameGroup.setScaleEach(0.08)
}

function arrowCheck(){
   if((input == stratagems[setSelect][orderSelect][inputCount]) & (count >= stratagems[setSelect][orderSelect].length)){
      inputs[inputCount] = 1
      if (inputs[inputCount] == 1){
         arrowGroup.get(inputCount).setFrame(1)
      }
      
      inputCount ++
      correctValue ++

   } else if(input != stratagems[setSelect][orderSelect][inputCount]){
      console.log("Incorrect inputs");
      arrowGroup.get(inputCount).setFrame(2)
      halted = true
      retryFrame.setFrame(1)
      //reset();
      inputs.length = 0
   }

}
 
function reset() {
   console.log("reset called")
   canvas.clear()
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   console.log(window.width, window.height) 
   background(rgb(69, 69, 69))
   count = 0
   rowCount = 2
   positionCount = 1
   inputCount = 0
   drawing = true
   correctValue = 0
   //reloadedBefore = true
   //point.destroy()
   icon.destroy()
   iconFrame.destroy()
   retry.destroy()
   refresh.destroy()
   retry.destroy()
   retryFrame.destroy()
   //drawPoint()
   halted = true
   
   inputs = []
   console.log("inputs: ", inputs)
}

function softReset() {
   console.log("softReset called")
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   count = 0
   rowCount = 2
   positionCount = 1
   drawing = true
   //reloadedBefore = true
   //point.destroy()
   icon.destroy()
   iconFrame.destroy()
   retry.destroy()
   refresh.destroy()
   retry.destroy()
   retryFrame.destroy()
   //drawPoint()
   halted = true
}

function icons(){
   rowCount += 1
   positionCount = 1
   rectMode(CENTER)

   push()
   fill(255);
   textSize(30)
   text(stratagemNames[setSelect][orderSelect], (positionCount + 1) * 85, rowCount * 105 )
   pop();

   iconFrame = createSprite(positionCount * 100, rowCount * 100)
   iconFrame.addImage("iconFrameImg", iconFrame_img)
   //iconFrame.debug = true
   iconFrame.visible = false
   iconFrame.scale = 1.8

   retryFrame = createSprite(100, 100)
   retryFrame.pause()
   retryFrame.visible = false
   retryFrame.scale = 0.12
   retryFrame.addAnimation("retryFrameImg", retryFrameImg)
   retryFrame.pause()

   refreshFrame = createSprite(200, 100)
   refreshFrame.visible = false
   refreshFrame.scale = 0.12
   refreshFrame.addAnimation("refreshFrameImg", refreshFrameImg)
   refreshFrame.pause()

   icon = createSprite(positionCount * 100, rowCount * 100)
   icon.addAnimation("iconAnim", icon_img)
   icon.pause()
   icon.visible = false
   icon.scale = 1.8
   //icon.debug = true
   
   iconAnimationValue = nameLocations[setSelect] + orderSelect
   icon.setFrame(iconAnimationValue)

   retry = createSprite(100, 100)
   retry.visible = false
   retry.scale = 0.12
   retry.addImage("retryImg", retryImg)

   refresh = createSprite(200, 100)
   refresh.visible = false
   refresh.scale = 0.12
   refresh.addImage("refreshImg", refreshImg)


   //retry.debug = true
   //retryFrame.debug = true
   //refresh.debug = true
   //refreshFrame.debug = true
}

function draw(){

   pointX = window.width / 8
   pointY = window.height / 8
   point.x = pointX
   point.y = pointY

   /*if(frameCount%40==0  &  window.innerHeight != heightCache || window.Innerwidth != widthCache){
      updateCanvas()
      softReset()
      
   }*/

   console.log(
      "Window.width: ", window.innerWidth,
      "window.height: ", window.innerHeight,
      "drawing is: ", drawing,
      /*,
       "mouse x is: ", World.mouseX,
       "mouse y is: ", World.mouseY
       */
       "rowcount is: ", rowCount,
       "positioncount is: ", positionCount,
       "count is: ", count,
       "strategem name is: ", stratagemNames[setSelect][orderSelect],
       "iconAnimationValue is: ", iconAnimationValue
      )

   window.width = window.innerWidth
   //canvas.width = window.innerWidth
   window.height = window.innerHeight
   //canvas.Height = window.innerHeight

   if(heightCache > window.innerHeight + 10 || heightCache < window.innerHeight - 10 || widthCache > window.innerWidth + 10 || widthCache < window.innerWidth - 10){
      updateCanvas()
      softReset()
   }

   if(/*count != stratagems[setSelect][orderSelect].length &*/ drawing == true){
        console.log("Calling arrows")
        arrows()
        count ++
        positionCount ++
   }

   if(count == stratagems[setSelect][orderSelect].length){
      drawing = false
      halted = false

      arrowGroup.setVisibleEach(true)
      arrowFrameGroup.setVisibleEach(true)
      retryFrame.visible = true, retry.visible = true, refreshFrame.visible = true, refresh.visible = true , iconFrame.visible = true, icon.visible = true
   }



   //console.log("drawing is: ", drawing)

   if(keyWentDown(82) || mousePressedOver(retry)){
      console.log("retrying")
      reset()
      halted = false
   }

   if(keyWentDown(78) || mousePressedOver(refresh)){
      console.log("refreshing")
      reset()
      comboSelect()
      halted = false
   }

   if((keyWentDown(87) || keyWentDown(38)) & halted == false){
        input = 1
        console.log("up")
        arrowCheck()
   }

   if((keyWentDown(83) || keyWentDown(40)) & halted == false){
        input = 3
        console.log("down")
        arrowCheck()
   }

   if((keyWentDown(65) || keyWentDown(37)) & halted == false){
        input = 4
        console.log("left")
        arrowCheck()
   }

   if((keyWentDown(68) || keyWentDown(39)) & halted == false){
        input = 2  
        console.log("right")
        arrowCheck()
   }

   if(correctValue == stratagems[setSelect][orderSelect].length ||  stratagems[setSelect][orderSelect][inputCount] ==5 ){
      console.log("Correct inputs")
      score += stratagems[setSelect][orderSelect].length * 10
      reset()
      comboSelect()

   }

   drawSprites()
}