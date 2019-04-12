# DAT505-Code
This is a directory that includes code projects for DAT505 module

Name：Yunqing Shao

----------
Session list

*Session1*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/1.PNG)
(DAT505-GitHub\Session1\00-Test)

Two spheregeometries rotate on X and Y.Material of insided ball is normal and outsided ball is consist of red line.Whose color is defined as RGB.

```var scene, camera, renderer;
var geometry1,geometry2, material,material, mesh1,mesh2,border,i,j,k;
```
These codes are aimed to create objects,empty scene,camera,renderer,material,mesh and border.

From session 1 I can learn that how to create objects and define materials,rotations and colors.

-------

*Session2*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/2.PNG)
(DAT505-GitHub\Session2\01-BasicMaterials\S1-01_BasicMaterials)

One box rotate with normal material.

From this project I can learn differences between materials.BasicMaterial can reflect light and show textures while NormalMaterial will not.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/3.PNG)
(DAT505-GitHub\Session2\02-MaterialsTest\S2-01_Exercise-GeometriesAndMaterials-SOLVED)

Different objects rotate in different directions with various textures.

```var texture3 =  new THREE.TextureLoader().load( 'textures/1.jpg' );
   var material9 = new THREE.MeshBasicMaterial({map:texture7});
```
These codes are to put picture texture on object

From this project I can know that how to define different txtures and put pictures on objects.

--------

*Session3*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/4.PNG)
(DAT505-GitHub\Session3\00-BasicStructure-GUL)

One cube rotate and controller page can control its scale,position and rotation.

```var controller=new function(){
  this.scaleX=1;
  this.scaleY=1;
  this.scaleZ=1;
  this.positionX=0;
  this.positionY=0;
  this.positionZ=-400;
  this.rotationX=1;
  this.rotationY=1;
  this.rotationZ=1;
}
```
These codes are to add controller page and which should be controlled.

From this project I can know how to add controller page,define which should be controlled and range.At the same time I learn how to use library resources.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/5.PNG)
(DAT505-GitHub/Session3/01_BasicGUI-example/index.html)

One cube with a controller page which can change its scale,position,rotation and color.Especially color controller has wide range of RGB color.

In this session I learn how to set a color range.

3.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/First%20homework.PNG)
( DAT505-GitHub\Session3\homework1)

This is the first individual creative project.

Rotation and angle of objects can be controlled by players on X,Y and Z.Colors of different objects will change in every angle.I want to practise what I learnt at that time.Further more,in other angles player will just see different cubes in different colors but every objects will consist of a new square in special angle.Two rings moving around them are aim to show
"round sky and square earth" which is a proverb in ancient time.

----------

*Session4*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/6.PNG)
( DAT505-GitHub\Session4\ArrayMesh-Exercise-template(rotate for each randomly))

Cubes with different colors rotate in different directions randomly, their positions and colors are based on round-robin algorithm.

From this session I know how to set different cubes rotation directions and define their positions by round-robin codes.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/7.PNG)
( DAT505-GitHub\Session4\S4-ArrayMesh)

One box is made up of small cubes with different colors.These cubes are divided into eight groups.Cubes in one group has same color and will rotate in the same direction. As time goes by they will change their lengths.

From this project I know how to put objects in a group and make objects lengths change as time goes by.

-------

*Session5*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/8.PNG)
( Session5\ArrayMesh-Exercise-template)

Two cubes rotate in different directions while other cubes remain stationary.

From this project I know how to define cube rotate separately.

--------

*Session6*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/9.PNG)
( Session6\S6-01-CityScape-full)

A city consist of many cubes with lines is standing on a plane.Camera can move by mouse.

From this project I know how to build a city by easily way and how to write codes about initing function of camera view angle by mouse.

---------

*Session7*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/10.PNG)
( DAT505-GitHub\S7-01-Texture-Cube)

Cubes fall down from the top of screen with randomly texture and number of cubes is infinite.Also which cube will fall down next is randomly.

From this project I know how to make cubes appear randomly.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/11.PNG)
( DAT505-GitHub\S7-03-Texture-Eyes-Interaction)

Eyes directions will follow the mouse and their positions are random.After updating the webpage their locations will change.

From this project I learn how to change objects facing directions follow mouse,put interaction functions on objects and define their positions on random.

----------

*Session8*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/12.PNG)
( DAT505-GitHub\S8-00-Texture-Eyes-Interaction2X)

Five eyes directions will follow the mouse and their positions are also on random.

From this project I know how to set one or more objects rotation directions follow mouse while other objects do not.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/13.PNG)
( DAT505-GitHub\S8-01-RaycastSprite)

Three cubes will change their scales after clicking.At the same time their colors will also change on random if clicked.

From this session I know how to init function that after clicking objects their colors and scales will change.

3.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/14.PNG)
( DAT505-GitHub\S8-02-objLoader-Raycasting1\S8-02-objLoader-Raycasting)

3D objects are loaded by objloader to scene and they can change color randomly after being clicked.Every objects will also make sound after clicking.

From this file I learn that how to load 3D objects to three.js and use objloader plug-ins.At the same time loading audio and changing objects colors randomly after clicking are also important points.

3D object elephant model which is loaded to three.js is made by myself.This model is a final project in other former class.That final project topic is elephant.

----------

*Session9*

1.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/15.PNG)
( DAT505-GitHub\S9-01-RaycastAudio)

Every 3D object will change to red color when mouse touch it.

From this file I know how to load 3D objects and make objects show special color when mouse is put on them.

2.![Image text](https://raw.githubusercontent.com/balawahu/DAT505-Code/master/Pictures/16.PNG)
(DAT505-GitHub\S9-02-PostProcessing-Glitch)

Screen will make special effect evey half a minute.

From this project I know some basic knowlege about shader and how to make deform animation.

----------

07/04/2019
