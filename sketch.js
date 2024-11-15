var count = 0
var positionCount = 1
var rowCount = 2
var inputCount = 0
var debug = 0

const stratagems = [
   Eagle500Kg = [1, 2, 3, 3, 3], EagleClusterBomb = [1, 2, 3, 3, 2], EagleAirstrike = [1, 2, 3, 2], EagleStrafingRun = [1, 2, 2], EagleNapalmAirstrike = [1, 2, 3, 1], EagleSmokeStrike = [1, 2, 1, 3], EagleRocketPods = [1, 2, 1, 4], EagleRearm = [1, 1, 4, 1, 2],
   OrbitalPrecisionStrike = [2, 2, 1], OrbitalAirburstStrike = [2, 2, 2], Orbital120MMBarage = [2, 2, 3, 4, 2, 3], Orbital380MMBarage = [2, 3, 1, 1, 4, 3, 3], OrbitalWalkingBarage = [2, 3, 2, 3, 2, 3], OrbitalLaser = [2, 3, 1, 2, 3], OrbitalRailcannon = [2, 1, 3, 3, 2], OrbitalGasStrike = [2, 2, 3, 2], OrbitalSmokeStrike = [2, 2, 3, 1], OrbitalGattlingBarage = [2, 3, 4, 1, 1], OrbitalEMSStrike = [2, 2, 4, 3], OrbitalNapalmBarrage = [2, 2, 3, 4, 2, 1],
   Reinforce = [1, 3, 2, 4, 1], SOSBeacon = [1, 3, 2, 1], Resupply = [3, 3, 1, 2], SEAFArtillery = [2, 1, 1, 3], Hellbomb = [3, 1, 4, 3, 1, 2, 3, 1], SuperSSD = [3, 3, 3, 1, 1], UploadData= [4, 2, 1, 1, 1], SeismicProbe = [1, 1, 4, 2, 3, 3], SuperEarthFlag = [3, 1, 3, 1],
   LasGuardDog = [3, 1, 4, 1, 2, 2], GunGuardDog = [3, 1, 4, 1, 2, 3], GasGuardDog = [3, 1, 4, 1, 2, 1], JumpPack = [3, 1, 1, 3, 1], ShieldGenPack = [3, 1, 4, 2, 4, 2], SupplyPack = [3, 4, 3, 1, 1, 3], BallisticShield = [3, 4, 3, 3, 1, 4],
   MachineGun = [3, 4, 3, 1, 2], AntiMaterialRifle = [3, 4, 2, 1, 3], Stalwart = [3, 4, 3, 1, 1, 4], ExpedableAntiTank = [3, 3, 4, 1, 2], RecoillessRifle = [3, 4, 2, 2, 4], Flamethrower = [3, 4, 1, 3, 1], Autocannon = [3, 4, 3, 1, 1, 2], HeavyMachineGun = [3, 4, 1, 3, 3], Railgun = [3, 2, 3, 1, 4, 2], Spear = [3, 3, 1, 3, 3], GrenadeLauncher = [3, 4, 3, 1, 4], LaserCannon = [3, 2, 3, 1, 4, 4], ArcThrower = [3, 2, 3, 1, 4, 4], QuasarCannon = [3, 3, 1, 4, 2], Airburst = [3, 1, 1, 4, 2], Commando = [3, 4, 1, 3, 2], Sterilizer = [3, 4, 1, 3, 4],
   HMGEmplacement = [3, 1,4 , 2, 2, 4], ShieldGeneratorRelay = [3, 3, 4, 2, 4, 2], TeslaTower = [3, 1, 2, 1, 4, 2], APMinefield = [3, 4, 1, 2], IMinefield = [3, 4, 4, 3], ATMinefield = [3, 4, 1, 1], MachineGunSentry = [3, 1, 2, 2, 1], GatlingSentry = [3, 1, 2, 4], MortarSentry = [3, 1, 2, 2, 3], AutocannonSentry = [3, 1, 2, 1, 4, 1], RocketSentry = [3, 1, 2, 2, 4], EMSMortarSentry = [3, 1, 2, 3, 2],
   PatriotExosuit = [4, 3, 2, 1, 4, 3, 3], EmancipatorExosuit = [4, 3, 2, 1, 4, 3, 1]
]
const stratagemNames = [
   "Eagle 500Kg Bomb", "Eagle Cluster Bomb", "Eagle Airstrike", "Eagle Strafing Run", "Eagle Napalm Airstrike", "Eagle Smoke Strike", "Eagle 100MM Rocket Pods", "Eagle Rearm",
   "Orbital Precision Strike", "Orbital Airburst Strike", "Orbital 120MM HE Barage", "Orbital 380MM HE Barage", "Orbital Walking Barage", "Orbital Laser", "Orbital Railcannon Strike", "Orbital Gas Strike", "Orbital Smoke Strike", "Orbital Gattling Barage", "Orbital EMS Strike", "Orbital Napalm Barrage",
   "Reinforce", "SOS Beacon", "Resupply", "SEAF Artillery", "NUX-223 Hellbomb", "SSSD Delivery", "Upload Data", "Seismic Probe", "Super Earth Flag",
   "AX/LAS-5 Guard Dog Rover", "AX/AR023 Guard Dog", "AX/TX-13 Guard Dog Breath", "LIFT-180 Jump Pack", "SH-32 Shield Generator Pack", "B-1 Supply Pack", "SH-20 Ballistic Shield Backpack",
   "MG-43 Machine Gun", "APW-1 Anti-Materia Rifle", "M-105 Stalwart", "EAT-17 Expendable Anti-Tank", "GR-8 Recoilless Rifle", "FLAM-40 Flamethrower", "AC-8 Autocannon", "MG-206 Heavy Machine Gun", "RS-422 Railgun", "FAF-14 SPEAR Launcher", "GL-21 Grenade Launcher", "LAS-98 Laser Cannon", "ARC-3 Arc Thrower", "LAS-99 Quasar Cannon", "RL-77 Airburst Rocket Launcher", "MLS-4X Commando", "TX-41 Sterilizer",
   "E/MG-101 HMG Emplacement", "FX-12 Shield Generator Relay", "A/ARC-3 Tesla Tower", "MD-6 Anti-Personnel Minefield", "MD-14 Inceniary Mines", "MD-17 Anti-Tank Mines", "A/MG-43 Machine Gun Sentry", "A/G-16 Gattling Sentry", "A/M-12 Mortar Sentry", "A/AC-8 Autocannon Sentry", "A/MLS-4X Rocket Sentry", "A/M-23 EMS Mortar Sentry",
   "EXO-45 Patriot Exosuit", "EXO-49 Emancipator Exosuit"
]
const StratagemColours = [
   0, 0, 0, 0, 0, 0, 0, 0,
   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
   2, 2, 2, 2, 2, 2, 2, 2, 2,
   3, 3, 3, 3, 3, 3, 3,
   4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
   5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
   6, 6
]
var setLocations = [
   0, 8, 20, 29, 36, 53, 65
]

var stratagemSelect
var canvas
let arrow, arrowFrame
var arrowEmpty_img, arrowFilled_img, arrowFrame_img
var arrowGroup, arrowFrameGroup
var input, inputs = []
var drawing = true 
var correctValue = 0
var score = 0
var widthCache, heightCache
let icon, iconFrame
var icon_img, iconFrame_img
var loadIcons = false
var iconAnimationValue
var retry, retryImg
var refresh, refreshImg
var retryFrame, retryFrameImg
var refreshFrame, refreshFrameImg
var halted = true

function preload(){
    arrowEmpty_img = loadAnimation("./assets/arrows/Arrow_empty.png","./assets/arrows/Arrow_filled.png", "./assets/arrows/Arrow_incorrect.png")
    arrowFrame_img = loadAnimation("./assets/arrows/Arrow_cover_eagle.png","./assets/arrows/Arrow_cover_orbital.png","./assets/arrows/Arrow_cover_support.png","./assets/arrows/Arrow_cover_backpack.png","./assets/arrows/Arrow_cover_weapon.png","./assets/arrows/Arrow_cover_sentry.png","./assets/arrows/Arrow_cover_vehicle.png")
    iconFrame_img = loadImage("./assets/icons/iconFrame.png")
    icon_img = loadAnimation(
      "./assets/eagle/Eagle_500KG_Bomb_Icon.webp", "./assets/eagle/Eagle_Cluster_Bomb_Icon.webp", "./assets/eagle/Eagle_Airstrike_Icon.webp", "./assets/eagle/Eagle_Strafing_Run_Icon.webp", "./assets/eagle/Eagle_Napalm_Airstrike_Icon.webp", "./assets/eagle/Eagle_Smoke_Strike_Icon.webp", "./assets/eagle/Eagle_110MM_Rocket_Pods_Icon.webp", "./assets/eagle/HD2_Eagle_Rearm.webp",
      "./assets/orbital/Orbital_Precision_Strike_Icon.webp", "./assets/orbital/Orbital_Airburst_Strike_Icon.webp", "./assets/orbital/Orbital_120MM_HE_Barrage_Icon.webp", "./assets/orbital/Orbital_380MM_HE_Barrage_Icon.webp", "./assets/orbital/Orbital_Walking_Barrage_Icon.webp", "./assets/orbital/Orbital_Laser_Icon.webp", "./assets/orbital/Orbital_Railcannon_Strike_Icon.webp", "./assets/orbital/Orbital_Gas_Strike_Icon.webp", "./assets/orbital/Orbital_Smoke_Strike_Icon.webp", "./assets/orbital/Orbital_Gatling_Barrage_Icon.webp", "./assets/orbital/Orbital_EMS_Strike_Icon.webp", "./assets/icons/iconUnknown.png",
      "./assets/support/HD2_Reinforce.webp", "./assets/support/SOS.webp", "./assets/support/HD2_Resupply.webp", "./assets/support/HD2_SEAF_Artillery.png", "./assets/support/Strat_NUX-223_Hellbomb_mk1.png", "./assets/support/DeliverSSSDicon.png", "./assets/support/DeliverSSSDicon.png", "./assets/support/Seismic_probe_icon.png", "./assets/support/HD2_Super_Earth_Flag.png", 
      "./assets/backpack/AX_LAS-5_Guard_Dog_Rover_Icon.webp", "./assets/backpack/AX_AR-23_Guard_Dog_Icon.webp", "./assets/icons/iconUnknown.png", "./assets/backpack/LIFT-850_Jump_Pack_Icon.webp", "./assets/backpack/SH-32_Shield_Generator_Pack_Icon.webp", "./assets/backpack/B-1_Supply_Pack_Icon.webp","./assets/backpack/SH-20_Ballistic_Shield_Backpack_Icon.webp", 
      "./assets/weapon/MG-43_Machine_Gun_Icon.webp", "./assets/weapon/APW-1_Anti-Materiel_Rifle_Icon.webp", "./assets/weapon/M-105_Stalwart_Icon.webp", "./assets/weapon/EAT-17_Expendable_Anti-Tank_Icon.webp", "./assets/weapon/GR-8_Recoilless_Rifle_Icon.webp", "./assets/weapon/FLAM-40_Flamethrower_Icon.webp", "./assets/weapon/AC-8_Autocannon_Icon.webp", "./assets/weapon/MG-206_Heavy_Machine_Gun_Icon.webp", "./assets/weapon/RS-422_Railgun_Icon.webp", "./assets/weapon/FAF-14_Spear_Icon.webp", "./assets/weapon/GL-21_Grenade_Launcher_Icon.webp", "./assets/weapon/LAS-98_Laser_Cannon_Icon.webp", "./assets/weapon/ARC-3_Arc_Thrower_Icon.webp", "./assets/weapon/LAS-99_Quasar_Cannon_Icon.webp", "./assets/weapon/RL-77_Airburst_Rocket_Launcher_Icon.webp", "./assets/icons/iconUnknown.png", "./assets/icons/iconUnknown.png",
      "./assets/sentry/E_MG-101_HMG_Emplacement_Icon.webp", "./assets/sentry/FX-12_Shield_Generator_Relay_Icon.webp", "./assets/sentry/A_ARC-3_Tesla_Tower_Icon.webp", "./assets/sentry/MD-6_Anti-Personnel_Minefield_Icon.webp", "./assets/sentry/MD-I4_Incendiary_Mines_Icon.webp", "./assets/icons/iconUnknown.png", "./assets/sentry/A_MG-43_Machine_Gun_Sentry_Icon.webp", "./assets/sentry/A_G-16_Gatling_Sentry_Icon.webp", "./assets/sentry/A_M-12_Mortar_Sentry_Icon.webp", "./assets/sentry/A_AC-8_Autocannon_Sentry_Icon.webp", "./assets/sentry/A_MLS-4X_Rocket_Sentry_Icon.webp", "./assets/sentry/A-M-23_EMS_Mortar_Sentry_Icon.webp", 
      "./assets/vehicle/EXO-45_Patriot_Exosuit_Icon.webp", "./assets/vehicle/EXO-49_Emancipator_Exosuit_Icon.webp"
    )
    retryImg = loadImage("./assets/icons/retry.png")
    refreshImg = loadImage("./assets/icons/refresh.png")
    retryFrameImg = loadAnimation("./assets/icons/retryFrameEmpty.png", "./assets/icons/retryFrameHighlighted.png")
    refreshFrameImg = loadImage("./assets/icons/refreshFrame.png")
   
}

function setup(){
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   if(debug == 1){
      console.log("Window.width: ", window.innerWidth,"window.height: ", window.innerHeight)
   }
   frameRate(80) 
   background(rgb(69, 69, 69))
   arrowGroup=new Group()
   arrowFrameGroup=new Group()
   comboSelect()
}

function updateCanvas(){
   canvas.clear()
   window.width = window.innerWidth
   window.height = window.innerHeight
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   if(debug == 1){
      console.log("Window.width: ", window.width,"window.height: ", window.height)
   }
   background(rgb(69, 69, 69))
}

function comboSelect(){
   stratagemSelect = Math.floor(Math.random() * stratagems.length)
   for(var i = 0; i < stratagems[stratagemSelect].length; i++){
      inputs.push(0)
   }
   drawing = true
}

function arrows(){
   if(debug == 1){
      console.log("arrows called")
      console.log("Made arrow: ", count)
   }
   
   arrow = createSprite(positionCount * 100, rowCount * 100)
   arrowFrame = createSprite(positionCount * 100, rowCount * 100)
   arrowFrame.depth = arrow.depth += 1

   arrow.x = positionCount * 100
   arrowFrame.x = positionCount * 100

   arrow.addAnimation("arrowAnim", arrowEmpty_img)
   arrow.pause()
   arrowFrame.addAnimation("arrowFrameAnim", arrowFrame_img)
   arrowFrame.pause()

   arrow.visible = false
   arrow.scale = 0.12

   arrowFrame.visible = false
   arrowFrame.scale = 0.12
   rectMode(CENTER)

   var arrowRotation = stratagems[stratagemSelect][count]

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

   if(debug == 1){
      console.log(
         "Before move for arrow:" , count,
         "Arrow.x = ",arrow.x,
         "Arrow.y = ",arrow.y,
        "Before move for arrowFrame:" , count,
         "ArrowFrame.x = ",arrowFrame.x,
        "ArrowFrame.y = ",arrowFrame.y
      )
   }

   window.width = window.innerWidth
   window.height = window.innerHeight

   if(arrow.x >= window.innerWidth - 100 || arrowFrame.x >= window.innerWidth - 100){
      arrow.x = 1
      arrowFrame.x = 1
      rowCount ++
      arrow.y = rowCount * 100
      arrowFrame.y = rowCount * 100
      positionCount = 1
      arrow.x = positionCount * 100
      arrowFrame.x = positionCount * 100
   }

   if(arrow.y >= window.innerHeight - 100 || arrowFrame.y >= window.innerHeight - 100){
      rescale()
      updateCanvas()
      softReset()
   }

   if(debug == 1){
      console.log(
         "After move for arrow:" , count,
         "Arrow.x = ",arrow.x,
         "Arrow.y = ",arrow.y,
         "After move for arrowFrame:" , count,
         "ArrowFrame.x = ",arrowFrame.x,
         "ArrowFrame.y = ",arrowFrame.y
      )
   }

   arrowFrame.setFrame(StratagemColours[stratagemSelect])
   if(debug == 1){
      console.log(inputs)
   }
   

   if(inputs[count] == 1){
      arrow.setFrame(1)
      if(debug == 1){
         console.log("setFrame 1")
      }
   } else if (inputs[count] != 1){
      arrow.setFrame(0)
      if(debug == 1){
         console.log("setFrame 0")
      }
   }

   if(count == stratagems[stratagemSelect].length - 1){
      icons()
   }

   arrowGroup.add(arrow)
   arrowFrameGroup.add(arrowFrame)

   if(count == stratagems[stratagemSelect].length - 1){
      drawing = false
      halted = false
      arrowGroup.setVisibleEach(true)
      arrowFrameGroup.setVisibleEach(true)
   }
}

function rescale(){
   arrowGroup.setScaleEach(0.08)
   arrowFrameGroup.setScaleEach(0.08)
}

function arrowCheck(){
   if((input == stratagems[stratagemSelect][inputCount]) & (count >= stratagems[stratagemSelect].length) & (halted == false)){
      inputs[inputCount] = 1
      if ((inputs[inputCount] == 1) & (halted == false)){
         arrowGroup.get(inputCount).setFrame(1)
         inputCount ++
         correctValue ++
      }
   } else if(input != stratagems[stratagemSelect][inputCount][inputCount]){
      console.log("Incorrect inputs");
      arrowGroup.get(inputCount).setFrame(2)
      halted = true
      retryFrame.setFrame(1)
      inputs.length = 0
   }
}
 
function reset() {
   if(debug == 1){
      console.log("reset called")
      console.log(" ")
   }
   canvas.clear()
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   widthCache = window.innerWidth
   heightCache = window.innerHeight
   canvas = createCanvas(window.innerWidth, window.innerHeight)
   background(rgb(69, 69, 69))
   count = 0
   rowCount = 2
   positionCount = 1
   inputCount = 0
   drawing = true
   correctValue = 0
   icon.destroy()
   iconFrame.destroy()
   retry.destroy()
   refresh.destroy()
   retry.destroy()
   retryFrame.destroy()
   halted = true
   inputs = []
}

function softReset() {
   if(debug == 1){
      console.log("softReset called")
   }
   arrowGroup.destroyEach(), arrowFrameGroup.destroyEach()
   arrowGroup.clear(), arrowFrameGroup.clear()
   arrowGroup.remove(arrow), arrowFrameGroup.remove(arrowFrame)
   count = 0
   rowCount = 2
   positionCount = 1
   drawing = true
   icon.destroy()
   iconFrame.destroy()
   retry.destroy()
   refresh.destroy()
   retry.destroy()
   retryFrame.destroy()
   halted = true
}

function icons(){
   rowCount += 1
   positionCount = 1
   rectMode(CENTER)

   push()
   fill(255);
   textSize(30)
   text(stratagemNames[stratagemSelect], (positionCount + 1) * 85, rowCount * 105 )
   pop();

   push()
   fill(255);
   textSize(30)
   text("Score is: " + score,  260, 100)
   pop();

   iconFrame = createSprite(positionCount * 100, rowCount * 100)
   iconFrame.addImage("iconFrameImg", iconFrame_img)
   iconFrame.visible = false
   iconFrame.scale = 1.8

   retryFrame = createSprite(100, 100)
   retryFrame.addAnimation("retryFrameImg", retryFrameImg)
   retryFrame.pause()
   retryFrame.visible = false
   retryFrame.scale = 0.12
   rectMode(CENTER)

   refreshFrame = createSprite(200, 100)
   refreshFrame.addImage("refreshFrameImg", refreshFrameImg)
   refreshFrame.visible = false
   refreshFrame.scale = 0.12
   rectMode(CENTER)

   icon = createSprite(positionCount * 100, rowCount * 100)
   icon.addAnimation("iconAnim", icon_img)
   icon.pause()
   icon.visible = false
   icon.scale = 1.8
   
   iconAnimationValue = stratagemSelect
   icon.setFrame(iconAnimationValue)

   retry = createSprite(100, 100)
   retry.addImage("retryImg", retryImg)
   retry.visible = false
   retry.scale = 0.12

   refresh = createSprite(200, 100)
   refresh.addImage("refreshImg", refreshImg)
   refresh.visible = false   
   refresh.scale = 0.12

   retryFrame.visible = true, retry.visible = true, refreshFrame.visible = true, refresh.visible = true , iconFrame.visible = true, icon.visible = true
}

function draw(){

   if(debug == 1){
      console.log(
         "Window.width: ", window.innerWidth,
         "window.height: ", window.innerHeight,
         "drawing is: ", drawing,
         "rowcount is: ", rowCount,
         "positioncount is: ", positionCount,
         "count is: ", count,
         "strategem name is: ", stratagemNames[stratagemSelect],
         "iconAnimationValue is: ", iconAnimationValue,
         "score is: ", score,
         "halted is: ", halted
      )
   }

   if(keyWentDown(222) & debug != 1){
      debug += 1   
   } else if(keyWentDown(222) & debug == 1){
      debug -= 1
   }
   

   window.width = window.innerWidth
   window.height = window.innerHeight

   if(heightCache > window.innerHeight + 10 || heightCache < window.innerHeight - 10 || widthCache > window.innerWidth + 10 || widthCache < window.innerWidth - 10){
      updateCanvas()
      softReset()
   }

   if(drawing == true){
      if(debug == 1){
         console.log("Calling arrows")
      }
      arrows()
      count ++
      positionCount ++
   }

   if(keyWentDown(82) || mousePressedOver(retry)){
      if(debug == 1){
         console.log("retrying")
      }
      if(score > 50){
         score = score - 50
      }
      reset()
      halted = true
   }

   if(keyWentDown(78) || mousePressedOver(refresh)){
      if(score > 0 & score >= 100){
         if(debug == 1){
            console.log("refreshing")
         }
         score -= 100
         reset()
         comboSelect()
         halted = true
      }
   }

   if((keyWentDown(87) || keyWentDown(38)) & halted == false){
      input = 1
      if(debug == 1){
         console.log("up")
      }
      arrowCheck()
   }

   if((keyWentDown(83) || keyWentDown(40)) & halted == false){
      input = 3
      if(debug == 1){
         console.log("down")
      }
      arrowCheck()
   }

   if((keyWentDown(65) || keyWentDown(37)) & halted == false){
      input = 4
      if(debug == 1){
         console.log("left")
      }
      arrowCheck()
   }

   if((keyWentDown(68) || keyWentDown(39)) & halted == false){
      input = 2  
      if(debug == 1){
         console.log("right")
      }
      arrowCheck()
   }

   if(correctValue == stratagems[stratagemSelect].length ||  stratagems[stratagemSelect][inputCount] == 5 ){
      if(debug == 1){
         console.log("Correct inputs")
      }
      score += stratagems[stratagemSelect].length * 10
      reset()
      comboSelect()
   }
   
   drawSprites()
}



