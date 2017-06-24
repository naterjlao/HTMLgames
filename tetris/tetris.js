/*
	Tetris
	Author: Nate Lao
*/


/* ----- Global Variables -----*/


/* Game Attributes */
const FPS = 180;				/* Frame per sec */

/* HTML Reference IDs */
const PLAYFIELD_NAME = "playfield";
const DEBUG_NAME = "debug";

/* Unit Dimensions */
const UNIT_DIM = 35;			/* A unit is 35 pixels high and 35 pixels wide */
const UNIT_MARGIN = 1;
const UNIT = UNIT_DIM + UNIT_MARGIN * 2;

/* Playfield Dimensions */
const HEIGHT = 20;				/* 20 units high */
const WIDTH = 10;				/* 10 units across */
const PLAYFIELD_MARGIN = 2;

/* Tetrimono Attributes */
const I_COLOR = "";
const O_COLOR = "";
const T_COLOR = "";
const S_COLOR = "";
const Z_COLOR = ""; 
const J_COLOR = "";
const L_COLOR = "";


/* ----- Game Objects ----- */


/* Represents the main screen of the game */
var playfield = {
	stage : document.getElementById(PLAYFIELD_NAME),
	context : null,
	pause : false,

	/* Called on startup */
	start : function() {
		this.stage.width = UNIT * WIDTH + PLAYFIELD_MARGIN * 2;
		this.stage.height = UNIT * HEIGHT + PLAYFIELD_MARGIN * 2;
		this.context = this.stage.getContext("2d");
		this.interval = setInterval(frame,FPS);
	},

	/* Clears all elements in the playfield */
	clear : function() {
		this.context.clearRect(0,0,this.stage.width,this.stage.height);
	}
}

/* Represents the generation the tetrominoes */
var generator = {

}


/* ----- Main Functions ---- */


/* Game startup commands */
function start() {
	playfield.start();
	

	/* TEST */
	ctx = playfield.context;

	for (x = 0; x < 10; x++) //CODE FOR DRAWING 
		ctx.fillRect((UNIT_MARGIN + PLAYFIELD_MARGIN + (UNIT * x)),UNIT_MARGIN + PLAYFIELD_MARGIN ,UNIT_DIM,UNIT_DIM);
}

/* This function occurs at each frame */
function frame() {

}















