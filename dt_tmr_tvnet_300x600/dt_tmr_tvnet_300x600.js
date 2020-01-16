(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,516);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDD7D7").s().p("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");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.8,-23.2,179.7,46.5);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDD7D7").s().p("Ah3BoIACgYQAHACAJAAQAQAAAAgTIAAiDIAbAAIAACDQAAATgKAMQgLANgWAAQgHAAgLgDgAmGAqIASgNQAJAMANAAQAKAAAGgEQAGgFAAgIQAAgIgGgEQgGgFgKAAIgMAAIAAgTIAHAAQAKAAAGgEQAGgFgBgHQAAgMgQAAQgNAAgIAKIgOgPQAOgSAYAAQARAAAKAJQAMAKgBAQQAAAQgQAIQAWAHAAAXQAAARgNAKQgMALgVAAQgbAAgOgWgAo6AsQgUgTAAgbQAAgcAUgUQATgTAcAAQAbAAAUATQATAUAAAcQAAAbgTATQgUAUgbAAQgcAAgTgUgAooggQgLAMAAASQAAARALAMQALAMASAAQARAAAMgMQALgMAAgRQAAgSgLgMQgMgMgRAAQgSAAgLAMgAKxA+IgLgfIgxAAIgKAfIgcAAIAwiCIAdAAIAxCCgAJ9AIIAhAAIgQgwgAIlA+IgfgvIgJAAIAAAvIgbAAIAAiCIA1AAQAVAAAMAOQAKAMAAARQAAAPgIAKQgIALgQADIAiAwgAH9gFIAVAAQAVAAAAgTQAAgJgFgFQgFgGgJAAIgXAAgAGzA+IgKgfIgxAAIgLAfIgcAAIAxiCIAcAAIAxCCgAF/AIIAiAAIgRgwgAELA+IgoiCIAbAAIAYBYIAZhYIAbAAIgoCCgACzA+IgvhRIAABRIgaAAIAAiCIAYAAIAvBQIAAhQIAaAAIAACCgAA6A+IgKgfIgwAAIgLAfIgcAAIAwiCIAdAAIAwCCgAAHAIIAhAAIgRgwgAkAA+IAAhbIgdALIAAgXIA0gWIACAAIAAB9gAqCA+IgvhRIAABRIgbAAIAAiCIAZAAIAvBQIAAhQIAaAAIAACCgAjCAtQgFgFAAgGQAAgHAFgEQAEgFAGAAQAHAAAFAFQAFAEAAAHQAAAGgFAFQgFAEgHAAQgGAAgEgEgAF2haIAAgQIA0AAIAAAQg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-10.6,143.3,21.299999999999997);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E63D11").s().p("AiCAVIAogpIDTAAIAAAMIAKAdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-2.1,26.299999999999997,4.300000000000001);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4ASIADgFQAKAGALAAQAHAAAEgCQADgBAAgEQAAgFgFgBIgNgBQgLgBgDgCQgFgCAAgFQAAgGAFgDQAFgEAKAAQAOAAAIAGIgEAFQgJgFgJAAQgGAAgEABIgDAFIAEAEIAIABIALABQAIAAADADQADADAAAFQAAAHgFAEQgGADgKAAQgQABgIgIgABhAYIAAgpIAhAAQAGAAADADQAEADAAAGQAAAFgFADQAGACAAAIQAAALgPAAgABoASIAZAAQAJAAAAgGQAAgGgIAAIgaAAgABoAAIAaAAIAEgBIACgEIgBgEIgFgCIgaAAgABCAYIAAgpIAHAAIAAApgAhTAYIAAgpIAGAAIAAApgADNAYIgFgJIgbAAIgFAJIgHAAIAVgpIAJAAIAVApgACwAIIAVAAIgKgTgAAKAYIAAgpIAGAAIAAAjIAfAAIAAAGgAhtAYIgFgJIgbAAIgEAJIgIAAIAWgpIAIAAIAVApgAiJAIIAUAAIgKgTgAitAYIgTgWIgMAKIAAAMIgHAAIAAgpIAHAAIAAAVIAcgVIAJAAIgUAQIAWAZgAA8gUIAAgEIATAAIAAAEg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-2.5,42.3,5.1);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFCAgIAAgEQAFAAAAgCIAAgCIgFAAIAAgHIAJAAIAAAIQAAAHgHAAgABcARIAEgFQAJAGALAAQAHAAAEgCQADgBABgEQgBgEgEgBIgOgCQgJAAgFgDQgEgBAAgGQAAgGAFgDQAFgEAJAAQANAAAKAGIgFAFQgKgFgIAAQgGAAgDACIgDAEIADAEIAIACIALAAQAJABACACQAEADAAAFQAAAHgGAEQgGAEgKAAQgPAAgJgIgAC/AYIAAgqIAgAAQAGAAADADQAEAEAAAFQAAAGgGACQAIACAAAIQgBAMgPAAgADFARIAZAAQAJAAgBgGQABgGgIAAIgaAAgADFAAIAaAAIAFgCIABgEIgBgEIgFgBIgaAAgACfAYIAAgqIAHAAIAAAqgABDAYIgKgRIgVAAIAAARIgGAAIAAgqIAfAAQAHAAADAEQADADABAHQAAAEgEADQgBACgGACIALARgAAkABIAYAAQAHAAABgFQAAgHgJAAIgXAAgAAEAYIgEgKIgbAAIgEAKIgIAAIAVgqIAIAAIAVAqgAgYAIIAUAAIgJgUgAkGAYIAAgqIAHAAIAAAqgAEqAXIgFgJIgbAAIgEAJIgIAAIAVgpIAJAAIAVApgAENAIIAVAAIgKgUgAg7AXIgTgWIgNAKIAAAMIgGAAIAAgpIAGAAIAAAVIAcgVIAKAAIgVAQIAXAZgAiCAXIgeghIAAAhIgHAAIAAgpIAIAAIAeAiIAAgiIAHAAIAAApgAjmAXIAAgpIAoAAIAAAHIghAAIAAAKIAXAAIAAAGIgXAAIAAAMIAiAAIAAAGgAk1AXIgVgpIAHAAIASAiIASgiIAHAAIgVApgACZgVIAAgEIATAAIAAAEgABxgVIgJgKIAGAAIAEAGIAGgGIAFAAIgIAKgAgXgVIAAgEIATAAIAAAEg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.1,-3.1,66.2,6.300000000000001);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEDAdIAAgEQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAAgCIgFAAIAAgHIAJAAIAAAJQAAAGgHAAgAkKAOIADgEQAKAFALAAQAHAAAEgBQADgCAAgEQAAgEgEgBIgOgBQgLgCgDgBQgEgBgBgHQAAgGAGgDQAEgDAKgBQAOAAAIAHIgEAEQgKgEgIAAQgGAAgEABIgCAEIADAFIAIABIALAAQAIACADACQADADABAEQgBAHgFAEQgGAEgKAAQgPAAgJgIgAB/AVIAAgqIAgAAQAGAAADADQAFADAAAGQAAAGgGADQAHABAAAJQAAALgPAAgACFAOIAaAAQAIABAAgHQAAgFgHAAIgbAAgACFgDIAaAAIAFgBIACgFIgCgEIgFgBIgaAAgABfAVIAAgqIAIAAIAAAqgABDAVIgLgRIgVAAIAAARIgGAAIAAgqIAfAAQAHABADADQAEAEAAAGQAAAFgDADQgCACgFABIALARgAAjgBIAYAAQAIABAAgHQAAgHgIAAIgYAAgAhHAVIAAgqIAGAAIAAAqgADqAVIgFgJIgaAAIgGAJIgGAAIAUgqIAJAAIAVAqgADNAFIAVAAIgKgTgAgoAVIAAgqIAZAAQALAAAFAHQAGAFAAAJQAAAJgGAGQgFAFgJABgAghAOIAUAAQAGAAAEgDQADgFAAgGQAAgHgEgDQgDgEgHAAIgTAAgAhhAVIgFgJIgbAAIgEAJIgHAAIAUgqIAJAAIAVAqgAh+AFIAVAAIgKgTgAihAVIgTgWIgNAJIAAANIgGAAIAAgqIAGAAIAAAWIAcgWIAKAAIgUARIAWAZgABZgXIAAgFIAUAAIAAAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-2.9,53.4,5.8);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBCIAAgSIAsAAIgsgwIAAgRIAsgwIASAAIAAAJIgsAwIAsAvIAAAbg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-6.6,6.300000000000001,13.3);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBCIAAiDIARAAIAACDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-6.6,1.8,13.2);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBCIgsgvIAAAvIgSAAIAAiDIBPAAIAAAPIg0A3IA4A9gAgXgIIAjgnIgjAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-6.6,8.5,13.2);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBCIAAhxIgRAAIgJALIgJAAIAAgKIASgTIA9AAIAAASIgaAAIAABxg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6.5,8.1,13.1);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBEIAAgvIgtAAIgrAvIgVAAIB/iHIAACHgAATACIAbAAIAAgcg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAHIAAgNIAvAAIgPAOg");
	this.shape_1.setTransform(2.625,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-6.7,12.9,13.5);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBCIgbgcIAAhKIAbgdIAsAAIAAATIgkAAIgRATIAAAJIAjAAIAAASIgjAAIAAAdIARATIAkAAIAAASg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-6.6,7.2,13.3);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBCIAAhxIgRAAIgJALIgJAAIAAgKIASgTIA+AAIAAASIgbAAIAABxg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-6.5,8.1,13.1);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#851216").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261503").s().p("AFoAjQgJgHAAgOQAAgOAJgIQAIgIANAAQANAAAIAIQAIAIAAAOIAAADIgyAAQAAAJAHAFQAGAFAIAAQAGAAAFgDQAEgCADgGIAJACQgFAJgGAEQgHAEgJAAQgNAAgIgJgAFvgDQgGAEgBAIIApAAQgBgIgGgEQgFgFgIAAQgIAAgGAFgABvAjQgJgHAAgOQAAgOAJgIQAJgIANAAQAOAAAIAIQAJAIAAAOQAAAOgJAHQgJAJgNAAQgNAAgJgJgAB1gCQgGAFAAALQAAAJAGAHQAHAGAJAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgGgGgKAAQgKAAgGAGgAh4AjQgIgIAAgNQAAgOAIgIQAJgIANAAQAIAAAFADQAHADACAFIAAgKIAJAAIAAA6IgJAAIAAgKQgCAEgHAEQgGADgHAAQgNAAgJgJgAhygCQgGAGAAAKQAAAJAHAHQAGAFAJAAQAKAAAGgFQAGgHAAgJQAAgLgHgFQgGgGgJAAQgJAAgHAGgAkSAjQgIgIAAgNQAAgOAIgIQAJgIANAAQAIAAAFADQAGADADAFIAAgKIAJAAIAAA6IgJAAIAAgKQgDAFgGADQgGADgHAAQgNAAgJgJgAkMgCQgGAGAAAKQAAAJAGAHQAHAFAJAAQAJAAAHgFQAGgHAAgJQAAgLgHgFQgGgGgJAAQgJAAgHAGgAnTAjQgJgHAAgOQAAgOAJgIQAJgIANAAQAOAAAIAIQAJAJAAANQAAAOgJAHQgIAJgOAAQgNAAgJgJgAnNgCQgGAFAAALQAAAJAGAHQAIAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgGgGgKAAQgJAAgHAGgAIBArIAAgjQAAgIgDgDQgEgFgHAAQgIAAgFAFQgGAEAAAKIAAAgIgJAAIAAgjQAAgIgDgDQgEgFgHAAQgIAAgGAFQgFADAAALIAAAgIgJAAIAAg6IAJAAIAAAKQACgFAGgDQAHgDAEAAQAPAAAFANQAHgNAPAAQALAAAGAGQAHAHgBALIAAAjgAFDArIAAg6IAJAAIAAA6gAERArIgYg6IAJAAIAUAwIAUgwIAJAAIgZA6gADgArIAAg6IAIAAIAAA6gAC6ArIAAgzIgLAAIAAgHIALAAIAAgWIAIAAIAAAWIANAAIAAAHIgNAAIAAAzgABLArIAAgjQAAgIgEgDQgDgFgHAAQgJAAgFAFQgGAEAAAKIAAAgIgIAAIAAgjQAAgGgEgFQgDgFgIAAQgIAAgFAFQgFAEAAAKIAAAgIgIAAIAAg6IAIAAIAAAKQACgFAGgDQAGgDAEAAQAQAAAFANQAGgNAQAAQAKAAAGAGQAGAHAAALIAAAjgAicArIAAgjQAAgIgDgDQgEgFgHAAQgIAAgGAFQgFAEAAAKIAAAgIgJAAIAAg6IAJAAIAAAKQACgFAGgDQAFgDAGAAQALAAAGAGQAGAHAAALIAAAjgAk2ArIAAgjQAAgHgEgEQgDgFgHAAQgJAAgFAFQgGAEAAAKIAAAgIgIAAIAAgjQAAgIgEgDQgDgFgHAAQgJAAgFAFQgGAEAAAKIAAAgIgIAAIAAg6IAIAAIAAAKQADgFAGgDQAGgDAFAAQAPAAAFANQAGgNAQAAQALAAAGAGQAGAHAAALIAAAjgAoJArIAAg6IAIAAIAAANQAEgOANAAIAGABIADABIgBAIQgFgCgDAAQgIAAgFAIQgEAIAAANIAAAWgAFDggQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAgADVggIAAgIIAeAAIAAAIgAkJggIAAgIIAeAAIAAAIg");
	this.shape.setTransform(0.0067,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-4.4,104.4,8.8);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261503").s().p("AinBRIAAgMIAJAAQAFAAAEgCQADgCACgEIACgHIAAhfIANAAIAABWQAAAkgdAAgANpAkQgJgIAAgLIAKAAQADAOAQAAQAJAAAFgDQAEgEAAgGQAAgJgMgDIgLgDIgIgDIgHgDQgEgDgBgFQgCgEABgIQABgJAIgFQAHgFAKAAQALAAAHAFQAHAFABALIgLAAQgBgFgEgCQgDgDgHAAQgFAAgFADQgEADAAAEQgCAKANAEIAMACQAUAFABASQAAALgJAHQgIAGgOAAQgLAAgIgGgAL9AfQgMgMABgTQgBgTAMgMQAMgLATAAQAKAAAIAEQAIAEAEAHIAAgOIAMAAIAABSIgMAAIAAgOQgEAHgIAEQgJAEgJAAQgTAAgMgLgAMFgWQgIAJAAANQAAANAJAJQAIAJAOAAQAMAAAKgJQAJgIgBgOQAAgOgJgIQgKgJgLAAQgNAAgKAJgAGqAkQgIgIgCgLIALAAQADAOARAAQAIAAAEgDQAFgEAAgGQAAgJgMgDIgMgDIgHgDIgHgDQgEgDgBgFQgCgEABgIQABgIAIgGQAHgFALAAQALAAAGAFQAHAFACALIgMAAQgBgFgEgCQgEgDgFAAQgGAAgEADQgFADgBAEQgCAKAOAEIAMACQAVAFAAASQgBALgIAHQgIAGgNAAQgMAAgIgGgAEUAfQgMgMAAgTQAAgTAMgMQALgLATAAQAKAAAIAEQAIADAFAIIAAgOIAMAAIAABSIgMAAIAAgOQgFAHgIAEQgIAEgKAAQgTAAgLgLgAEdgWQgKAJABANQgBANAKAJQAIAJANAAQAMAAAKgJQAJgIAAgOQAAgOgJgIQgKgJgMAAQgNAAgIAJgAAPAkQgJgIAAgLIAKAAQAEAOAPAAQAJAAAEgDQAFgEAAgGQAAgJgMgDIgTgGIgHgDQgEgDgCgFQgBgEABgIQABgIAHgGQAIgFAKAAQALAAAHAFQAHAFABALIgLAAQgBgFgEgCQgEgDgGAAQgFAAgFADQgEADgBAEQgBAKAOAEIAKACQAWAFgBASQABALgJAHQgJAGgNAAQgLAAgIgGgAhcAfQgMgMAAgTQAAgTAMgMQAMgLASAAQALAAAHAEQAJAEAFAHIAAgOIALAAIAABSIgLAAIAAgOQgFAIgJADQgIAEgKAAQgSAAgMgLgAhTgWQgJAJAAANQAAAMAJAKQAIAJANAAQANAAAKgJQAIgIABgOQAAgOgKgIQgKgJgMAAQgMAAgJAJgAkMAfQgNgMABgTQAAgSAMgNQANgLASAAQASAAALALIgIAIQgJgIgMAAQgNAAgKAJQgIAIgBAOQABANAIAJQAKAJANAAQAMAAAJgIIAIAIQgLALgSAAQgTAAgMgLgAokAfQgMgMAAgTQAAgTAMgMQAMgLASAAQAKAAAIAEQAJAEAEAHIAAgOIAMAAIAABSIgMAAIAAgOQgEAHgJAEQgIAEgKAAQgSAAgMgLgAocgWQgJAJAAANQAAANAJAJQAJAJANAAQANAAAJgJQAJgIAAgOQAAgOgJgIQgKgJgMAAQgNAAgJAJgAr+AhQgJgIAAgOQAAgNAJgIQAIgIANAAQANAAAJAIIgGAFQgHgFgJAAQgJAAgGAGQgHAFAAAKQAAAKAHAGQAGAHAJAAQAJAAAHgGIAGAGQgIAIgOAAQgNAAgIgJgAtJAhQgJgIABgOQAAgNAIgIQAIgIANAAQANAAAIAIQAIAJAAAMIAAAEIgyAAQAAAIAHAGQAGAFAIAAQAGAAAFgDQAFgCACgGIAJACQgDAIgIAFQgGAEgKAAQgNAAgIgJgAtCgFQgHAFAAAHIApAAQgBgHgGgFQgFgFgIAAQgIAAgGAFgALFApIAAhHIgPAAIAAgLIAPAAIAAgfIAMAAIAAAfIARAAIAAALIgRAAIAABHgAKVApIAAhSIAMAAIAABSgAJrApIAAgvQABgMgGgGQgEgHgKAAQgLAAgIAHQgJAHABAOIAAAsIgNAAIAAgvQABgLgGgHQgEgHgLAAQgLAAgIAHQgIAHAAAOIAAAsIgLAAIAAhSIALAAIAAAOQAEgIAIgDQAIgEAHAAQAVAAAIASQAJgSAWAAQAPAAAIAJQAJAKgBARIAAAvgAF8ApIAAhSIAMAAIAABSgADfApIAAg2IhDAAIAAA2IgMAAIAAh5IAMAAIAAA4IBDAAIAAg4IALAAIAAB5gAi4ApIAAhSIALAAIAABSgAk9ApIAAhSIALAAIAABSgAmEApIAAhSIAMAAIAAATQAGgUASAAIAIABIAFACIgBALQgGgDgGAAQgMAAgGAMQgGANAAAQIAAAfgAm3ApIAAhHIgOAAIAAgLIAOAAIAAgfIAMAAIAAAfIASAAIAAALIgSAAIAABHgAqSApIAAh5IAvAAQATAAAHALQAJALAAAPQAAAPgJAMQgHAKgTAAIgkAAIAAAvgAqHgRIAkAAQAMAAAFgIQAHgGAAgMQAAgKgHgIQgEgHgNAAIgkAAgAuZApIAAhWIAiAAQAMAAAHAIQAFAHAAAMQAAALgFAHQgHAHgMAAIgaAAIAAAigAuRAAIAZAAQAJAAAEgGQAEgFAAgHQAAgIgEgFQgEgGgIAAIgaAAgAtEgjIAAgIIAfAAIAAAIgAKVhBQgDgCAAgEQAAgEADgCQACgDAEAAQAEAAADADQACACAAAEQAAADgCADQgEACgDAAQgDAAgDgCgAF7hBQgCgCAAgEQAAgEACgCQADgDAEAAQAEAAACADQADACAAAEQAAAEgDACQgCACgEAAQgDAAgEgCgAiOhBQgDgCAAgEQAAgEADgCQACgDAEAAQAFAAACADQACACAAAEQAAAEgCACQgDACgEAAQgDAAgDgCgAi5hBQgCgDgBgDQABgEACgCQACgDAEAAQAFAAACADQADACgBAEQABADgDADQgEACgDAAQgDAAgDgCgAlNhBIAAgLIArAAIAAALg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-8,184.5,16.1);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C11A23").s().p("AQEBYIAFgqQAZASAhgCQAJgBAGgFQAGgGgBgIQgBgOgTgHQgcgKgOgLQgSgQAAgXQAAgaAQgRQAQgSAZgBQAWgBAcAKIgFAnQgZgKgQABQgLABgFAGQgFAHABAJQACANAUAHQA7AVAAAoQAAAZgQARQgRASgcABIgGAAQgcAAgegPgAh3BYIAFgqQAaASAfgCQAKgBAGgFQAGgGAAgIQgCgOgUgHQgbgKgOgLQgTgQABgXQAAgaAPgRQARgSAZgBQAXgBAbAKIgFAnQgYgKgSABQgJABgGAGQgFAHAAAJQACANAVAHQA5AVAAAoQABAZgQARQgRASgcABIgFAAQgcAAgegPgAsiBYIAFgqQAaASAggCQAKgBAFgFQAHgGgBgIQgBgOgUgHQgcgKgOgLQgSgQAAgXQAAgaAQgRQAQgSAZgBQAXgBAcAKIgGAnQgYgKgRABQgKABgGAGQgFAHABAJQABANAWAHQA6AVAAAoQAAAZgQARQgRASgcABIgFAAQgeAAgdgPgANpBlIAAgoIAmAAQAJAAAFgGQAHgGgBgIIAAiMIApAAIAACMQAAA8g8AAgAMRBlIAAjIIAoAAIAADIgAJ5BlIAAjIIAnAAIAACgIBAAAIAAAogAHABlIAAjIIBPAAQAcAAAQATQAPASAAAZQAAAZgPARQgQATgcAAIgmAAIAABNgAHpgOIAjAAQAVAAgBgWQABgXgVAAIgjAAgAFWBlIAAjIIAoAAIAADIgAD3BlIgohNIgUAAIAABNIgoAAIAAjIIBQAAQA0AAAGA0QAGA0gtANIAvBTgAC7gOIAjAAQAVAAAAgWQAAgXgVAAIgjAAgAjMBlIgphNIgUAAIAABNIgoAAIAAjIIBPAAQA1AAAGA0QAHA0gtANIAvBTgAkJgOIAkAAQAUAAAAgWQAAgXgUAAIgkAAgAnVBlIAAjIIBlAAIAAAoIg9AAIAAAoIA1AAIAAAoIg1AAIAAAoIBAAAIAAAogApaBlIAAigIgyAAIAAgoICNAAIAAAoIgzAAIAACggAuEBlIAAjIIAoAAIAADIgAvvBlIAAhvIg0A1Ig0g1IAABvIgoAAIAAjLIAMAAIBQBYIBQhYIAMAAIAADLg");
	this.shape.setTransform(0,0.0313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-10.3,230.5,20.700000000000003);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C11A23").s().p("Ag1CCIhmhyIAABtIgoAAIAAjNIALAAIBlB1IAAhwIApAAIAADNgAMMBwIAFgqQAZASAggCQAKgBAGgFQAGgGgBgJQgBgNgUgHQgcgKgNgMQgSgQAAgXQAAgZAQgRQAPgSAagBQAWgBAcAJIgFAoQgZgLgRACQgKABgFAGQgFAHAAAIQACAOAVAGQA6AVAAAoQAAAagQARQgRARgcABIgHABQgbAAgdgPgAEtBfQgagcgBgpQgBgoAagdQAcggAxgDQAPAAARAEIAQAEIgFApQgTgIgYAAQgdABgQAUQgPAQABAZQAAAZAPARQARATAbAAIAMgBIAAg9IApAAIAABZQgXANgeAAQgvAAgcgfgAKqB9IAAjIIAoAAIAADIgAJTB9IgIgVIhDAAIgIAVIguAAIBVjQIAEAAIBVDQgAI8BBIgTg0IgTA0IAmAAgAC0B9IAAjIIAoAAIAADIgAAxB9IAAihIgxAAIAAgnICMAAIAAAnIgzAAIAAChgAkaB9IgIgVIhDAAIgIAVIguAAIBVjQIAFAAIBUDQgAkxBBIgSg0IgTA0IAlAAgAoXB9IAAjIIAoAAIAACgIBAAAIAAAogApuB9IgJgVIhCAAIgIAVIguAAIBVjQIAEAAIBVDQgAqGBBIgSg0IgTA0IAlAAgAtVB9IAAihIgyAAIAAgnICNAAIAAAnIgzAAIAAChgACkhdIAAgjIBJAAIAAAjg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-12.9,180.9,25.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261503").s().p("AGyA0QgLgMAAgTQAAgUALgKQAMgLARAAQAKAAAIADQAJAFAEAHIAAgOIALAAIAABQIgLAAIAAgNQgFAHgIAEQgJAEgJAAQgQAAgNgLgAG6gBQgIAIAAAOQAAANAIAIQAJAKAMAAQANgBAKgIQAIgHAAgPQAAgOgJgIQgJgHgNgBQgNABgIAHgADnA0QgMgNgBgSQABgTAMgLQAKgLATAAQAKAAAIADQAIAGAEAGIAAg5IAMAAIAAB7IgMAAIAAgNQgEAHgIAEQgKAEgIAAQgSAAgLgLgADugBQgIAIAAAOQAAANAIAIQAJAKANAAQAMgBAJgIQAKgHgBgPQAAgOgJgIQgJgHgMgBQgOABgIAHgAB0A0QgMgNAAgSQAAgTAMgLQALgLASAAQAKAAAIADQAJAGADAGIAAgOIAMAAIAABQIgMAAIAAgNQgDAHgJAEQgKAEgIAAQgRAAgMgLgAB8gBQgIAIAAAOQAAANAIAIQAJAKAMAAQAMgBAKgIQAJgHgBgPQAAgOgJgIQgJgHgMgBQgNABgIAHgAizA0QgMgNAAgSQAAgTAMgLQAMgLARAAQAKAAAIADQAJAFAEAHIAAgOIAMAAIAABQIgMAAIAAgNQgFAHgIAEQgJAEgJAAQgRAAgMgLgAiqgBQgJAIAAAOQAAANAJAIQAIAKAMAAQANgBAKgIQAIgHAAgPQAAgOgJgIQgJgHgNgBQgNABgHAHgAkJA4QgHgGgCgMIALAAQADAOAQAAQAIAAAEgDQAFgEAAgFQAAgLgMgCIgLgDIgIgCIgHgFQgDgCgBgGQgCgFABgFQABgIAIgGQAGgFALAAQALAAAGAFQAHAFACAKIgMAAQgBgEgEgDQgEgCgFAAQgGAAgEACQgEADgBAEQgDAKAPADIALADQAVAEAAAUQAAAJgJAIQgIAGgNAAQgMAAgIgHgAFLA9IAAgKIA1g6IgzAAIAAgMIBDAAIAAALIg2A6IA2AAIAAALgAA6A9Ig7hjIAABjIgMAAIAAh2IANAAIA6BjIAAhjIAMAAIAAB2gAk6A9IAAhQIAKAAIAABQgAlqA9IAAh7IAMAAIAAB7gAmZA9IAAhQIAMAAIAABQgAn4A9IAAh2IBCAAIAAALIg4AAIAAAsIAtAAIAAAKIgtAAIAAA1gAFmgiIgQgXIALAAIANAPIAMgPIALAAIgQAXgAk7grQgCgCAAgDQAAgFACgCQADgCADAAQADAAADACQADADAAAEQAAADgDACQgDADgDAAQgDAAgDgDgAmagrQgCgCAAgDQAAgEACgDQAEgCADAAQAEAAACACQACACABAFQgBADgCACQgCADgEAAQgDAAgEgDgAB/grIAAgLIAqAAIAAALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-6.3,101.1,12.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C11A23").ss(2.6,0,0,4).p("A4NAAIAyAAMAu3AAAIAyAA");
	this.shape.setTransform(0,-301.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#84171B").s().p("EgYNAvOMAAAheXIAyAAIAAgFMAu3AAAIAAAFMgu3AAAMAu3AAAIAyAAMAAABeXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.2,-303,312.5,605.3);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-220,-258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-220,-258,440,516), null);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBCIAAgSIAsAAIgsgwIAAgRIAsgwIASAAIAAAJIgsAwIAsAvIAAAbg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-6.6,6.300000000000001,13.3);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBCIgbgcIAAhKIAbgdIAsAAIAAATIgkAAIgRATIAAAJIAjAAIAAASIgjAAIAAAdIARATIAkAAIAAASg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-6.6,7.2,13.3);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBCIAAhxIASgSIARAAIgRASIAABeIAsAAIAAATg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-6.5,6.300000000000001,13.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-6.6,1.9,13.2);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBEIAAgvIgtAAIgsAvIgVAAIB/iHIAACHgAAUACIAbAAIAAgcg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-6.7,12.9,13.5);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBCIAAiDIAbAAIAsAwIAAA3IgbAcgAgQAwIATAAIAPgRIAAgoIgiglg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-6.6,7.2,13.3);


(lib.logo_DT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer_19
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.15,47.65,1,0.0349);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regY:0.5,scaleY:0.109,y:47.55},0).wait(1).to({regY:0.3,scaleY:0.1794,y:47.4},0).wait(1).to({regY:0,scaleY:0.2458,y:47.2},0).wait(1).to({scaleY:0.3087,y:47.05},0).wait(1).to({regY:0.1,scaleY:0.3679,y:47},0).wait(1).to({regY:0,scaleY:0.4236,y:46.8},0).wait(1).to({regY:0.1,scaleY:0.476,y:46.75},0).wait(1).to({regY:0,scaleY:0.5251,y:46.6},0).wait(1).to({regY:0.1,scaleY:0.571,y:46.55},0).wait(1).to({regY:0,scaleY:0.6139,y:46.4},0).wait(1).to({scaleY:0.6538,y:46.35},0).wait(1).to({scaleY:0.6908,y:46.25},0).wait(1).to({scaleY:0.7252,y:46.2},0).wait(1).to({scaleY:0.7568,y:46.05},0).wait(1).to({scaleY:0.786},0).wait(1).to({scaleY:0.8127,y:46},0).wait(1).to({scaleY:0.8371,y:45.95},0).wait(1).to({scaleY:0.8593,y:45.9},0).wait(1).to({scaleY:0.8793,y:45.85},0).wait(1).to({scaleY:0.8974,y:45.8},0).wait(1).to({scaleY:0.9136},0).wait(1).to({scaleY:0.9279,y:45.75},0).wait(1).to({scaleY:0.9406},0).wait(1).to({scaleY:0.9517,y:45.7},0).wait(1).to({scaleY:0.9613},0).wait(1).to({scaleY:0.9696,y:45.65},0).wait(1).to({scaleY:0.9766},0).wait(1).to({scaleY:0.9824},0).wait(1).to({scaleY:0.9872},0).wait(1).to({scaleY:0.991,y:45.6},0).wait(1).to({scaleY:0.9939},0).wait(1).to({scaleY:0.9962},0).wait(1).to({scaleY:0.9978},0).wait(1).to({scaleY:0.9988},0).wait(1).to({scaleY:0.9995},0).wait(1).to({scaleY:0.9998},0).wait(1).to({scaleY:0.9999},0).wait(1).to({scaleY:1},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E63D11").s().p("AAqAAIAQABIgUAAIAAgBIgeAAIAIABIhBgBIAFABIgkgBIAPAAIABAAICFAAIgFAAIARAAIgEAAIADABg");
	this.shape.setTransform(82.05,47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E63D11").s().p("AguAfIgCABIgIAAIAAgGIgRgFIgJgMIgKgIIgBAAIAXgOIADgCIAAAAIAXAAIAbgQIAFAVIgDgBIADANIAHACIANAJIAGgNIAagKIACAGIgLAGIgBADIAEAEIABAFIgHAFIAAgBIgNABIgIAHIgNACIgCAEgAAwAHIgFgEIgBgHIARgLIAAAMIAJgKIAPgFIAAABIgDAAIgIALIgLAGIACADIgCACIADAGIAAAAIgKAFgAAqgEgABUgSIAAAAIgBAAgABegVIgCACIgIABg");
	this.shape_1.setTransform(82.075,44.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E63D11").s().p("AhDA8IAFgKIgYgMIgIgVIgOgPIgBAAIAjgeIAAgBIAiAAIAlgeIgIAnIgMgBIgGAaIAJADIAUASIABgZIAlgUIgGAZIAKAPIAFgGIgCgGIABgBIABgFIAUgSIAFgMIAEgCIABgEIAKgDIAKgCIANgFIgLAFIgCAAIgVAJIgCAIIAKgKIgTAiIACARIAAAAIgLAIIAGAEIgVACIgBACIAAgCIgBABIgJAOIgUADIgBAIg");
	this.shape_2.setTransform(82.45,41.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E63D11").s().p("AhNBVIAKgOIgggQIgHgfIgQgVIgBAAIAqgrIACgCIArAAIAsgqIgRA3IgWgBIgOAlIANAEIAXAaIgCgjIAugdIgNAjIALAWIAMgRIgBAAIAHAdIAKgHIAEgLIgFgLIAAgJIAtgwIgQAVIAAABIgUAaIABAYIgBABIgIAGIgBACIgKAOIATgRIAVAMIgeADIgJAVIgbAFIABAKgAAuAKIAAABIgBACgAAwgBIABgBIATgPIAHgeIAxgPIgwAWIgIAfIgWATg");
	this.shape_3.setTransform(82.8,39.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E63D11").s().p("AhWBsIAOgSIglgVIgHgnIgTgaIAAAAIAxg3IABgCIA0AAIA1g2IgbBHIgegCIgWAwIAPAFIAcAhIgGguIA3gkIgUAtIANAbIANgYIADgPIABgBIAXgTIAGgnIBBgTIg5AcIgIAoIgaAYIgCAEIAGAlIAWgRIABgCIAAgTIAAAAIAAgKIAdgjIgBABIgcAhIAAALIAFAPIgHAQIgMASIAbgWIAdAPIgjAFIgKAaIggAGIACANg");
	this.shape_4.setTransform(83.1,36.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E63D11").s().p("AheCBIASgWIgrgZIgHguIgVggIAAAAIA6hEIA7AAIA8hAIglBVIglgCIgbA4IAQAHIAgAmIgJg2IA/grIgaA2IAOAhIAOgdIAEgTIABgBIAbgXIAFguIBOgXIhBAiIgIAvIgdAdIgDAFIAGAsIAagXIACgkIAkgmIABgCIAcghIg7BKIABANIAFASIgIATIgOAUIAigaIAlASIgpAGIgLAfIgkAHIAEARg");
	this.shape_5.setTransform(83.375,34.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E63D11").s().p("AhlCTIAVgZIgwgcIgGg1IgXgkIAAAAIA9hLIACgDIBDAAIBChJIgtBgIgrgCIgiBBIATAHIAjAtIgMg+IBGgyIgeA+IAOAlIAOggIAFgVIAfgcIAFg1IBagaIhIAmIgIA2IggAiIgDAFIAFAyIAdgaIAEgpIAqgtIABgCIAigkIhBBUIACAOIAFAVIgZAtIAogdIArAUIguAHIgLAjIgoAIIAEATg");
	this.shape_6.setTransform(83.625,33.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E63D11").s().p("AhwCkIAZgdIg0gfIgGg7IgZgnIAAAAIBDhTIACgEIBJAAIBHhSIg0BsIgxgCIgmBIIAUAIIAmAxIgOhEIBMg4IgkBFIAPAqIAPglIAHgYIAhgeIAEg7IBlgdIhPArIgHA7IgnArIAFA3IAggcIAFgtIBYhdIhGBeIACAQIAFAXIgcAyIAughIAwAXIgxAHIgLAnIgtAJIAGAWg");
	this.shape_7.setTransform(84.225,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E63D11").s().p("Ah5CyIAbgfIg4giIgFhAIgbgqIBHhcIACgDIBOAAIBNhZIg6B1Ig2gCIgrBPIAWAIIAoA2IgQhLIBRg9IgnBMIAQAtIAWhBIACgDIAigfIADhAIAHgDIBogdIhVAuIgHBCIgpAvIAEA8IAjgfIAFgxIA1g3IACgDIArgsIhLBnIAIApIgeA4IAygkIA2AYIg2AIIgLArIgvAKIAGAXg");
	this.shape_8.setTransform(84.825,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E63D11").s().p("AiBC+IAdghIg7gkIgFhEIgbguIgBAAIBLhhIACgEIBTAAIBRhfIg/B9Ig7gCIgvBUIAXAIIArA6IgThQIBXhAIgrBQIARAwIAXhGIACgCIAkgiIADhEIAHgCIBvggIhZAyIgHBFIgrAzIADBAIAigfIADgCIAHg1IA5g6IACgDIAugvIhOBtIAIAtIghA7IA3gnIA6AbIg5AIIgLAuIgyAKIAGAZg");
	this.shape_9.setTransform(85.3,28.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E63D11").s().p("AiIDIIAfgiIg+gmIgFhIIgcgxIgBAAIBPhmIACgEIBXAAIBUhkIhECDIg+gCIgyBZIAYAJIAtA9IgUhUIBahFIguBVIASAzIAYhKIACgCIAlgkIADhIIB+gjIheA0IgHBJIgpAvIgFAHIAEBDIAjggIADgDIAHg3IBxhzIhSB0IAJAvIgiA+IA6gpIA+AcIg7AJIgMAwIg1AMIAIAZg");
	this.shape_10.setTransform(85.725,27.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E63D11").s().p("AiODRIAhgkIhAgnIgFhMIgegyIBRhrIACgFIBaAAIBYhoIhHCKIhCgDIg1BcIAZAKIAvA/IgWhXIBehIIgxBZIASA1IAZhNIApgoIAChLICEglIhhA2IgIBNIgqAxIgEAHIADBGIAogkIAIg6IB2h4IhVB5IAJAxIgjBBIA9gqIBBAdIg9AJIgNAzIg3ALIAJAbg");
	this.shape_11.setTransform(86.1,26.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E63D11").s().p("AiTDZIAigmIhCgpIgFhOIgeg0IBThvIACgFIBdAAIBbhsIhLCPIhEgDIg4BgIAaAKIAwBCIgXhbIBhhKIgzBcIASA2IAbhPIAqgpIABhOIAIgDICBgjIhkA4IgHBQIgxA5IADBJIAqgmIAIg7IB8h8IhXB9IAJAyIglBEIBAgsIBDAeIhAAJIgMA0Ig4ANIAJAcg");
	this.shape_12.setTransform(86.4,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E63D11").s().p("AiYDfIAkgnIhDgqIgFhQIgfg2IBVhyIADgFIBfAAIBchvIhNCTIhHgDIg5BiIAbALIAwBEIgYheIBjhMIg1BeIAUA5IAbhSIADgDIAngnIAChQIAJgDICEglIhmA6IgIBRIgxA8IADBLIAqgmIAJg+IB/h/IhZCAIAKA0IgmBFIBBgtIBGAfIhBAKIgNA1Ig5ANIAJAdg");
	this.shape_13.setTransform(86.65,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E63D11").s().p("AibDjIAlgnIhFgrIgFhSIgfg3IBWh0IADgFIBhAAIBfhxIhQCVIhIgDIg8BlIAcALIAxBFIgYhgIBlhOIg3BhIAUA6IAchUIACgDIAogpIAChRICQgpIhoA7IgIBUIgyA9IADBMIAngkIAEgDIAJg/ICCiCIhaCDIAKA1IgmBHIBDguIBHAgIhCAKIgNA2Ig7ANIAJAdg");
	this.shape_14.setTransform(86.85,25.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E63D11").s().p("AidDnIAlgnIhGgsIgEhUIggg4IAAAAIBYh2IADgFIBiAAIBfhzIhRCYIhJgDIg9BnIAcAKIAyBGIgZhhIBnhPIg4BiIAUA7IAchWIArgsIAChSICSgqIhpA9IgIBUIgzA+IADBOIArgoIAKhAIBJhIIACgDIA6g5IhbCGIAJA2IgnBHIBFgvIBIAgIhDALIgNA3Ig7AOIAJAdg");
	this.shape_15.setTransform(86.975,24.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E63D11").s().p("AieDqIAlgoIhHgtIgEhUIggg5IBYh3IADgGIBkAAIBgh0IhTCaIhKgDIg9BoIAcALIAyBHIgZhiIBohQIg4BjIATA7IAchWIAsgsIAChVIAIgDICMgmIhrA8IgHBWIg0A/IADBPIAogmIAEgDIAJhBICHiGIhcCHIAKA3IgnBJIBGgwIBJAiIhEAJIgNA5Ig9ANIAKAeg");
	this.shape_16.setTransform(87.1,24.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E63D11").s().p("AigDsIAmgoIhHgtIgEhWIghg4IBZh6IADgEIBkAAIBhh2IhTCbIhLgCIg+BoIAcALIAzBHIgZhjIBphRIg6BlIAUA8IAchXIAtgtIABhVICWgqIhsA9IgHBXIg1A/IAEBQIAogmIAEgDIAJhCICJiGIhdCHIAKA4IgoBJIBGgwIBKAiIhEAKIgNA4Ig9AOIAKAeg");
	this.shape_17.setTransform(87.175,24.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E63D11").s().p("AihDtIAmgpIhHgtIgEhVIghg5IBZh6IADgFIBlAAIBih2IhVCcIhLgDIg+BpIAcALIA0BIIgahjIBphSIg6BlIAUA8IAchXIAtguIAChVICWgqIhsA9IgHBYIg1A/IADBQIAogmIAEgDIAKhCICKiIIheCKIAKA3IgoBKIBHgwIBKAhIhEAKIgNA6Ig9ANIAKAeg");
	this.shape_18.setTransform(87.225,24.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E63D11").s().p("AiiDuIAngpIhIgtIgFhWIggg5IBah6IADgFIBlAAIBhh3IhUCdIhMgDIg+BpIAcALIAzBJIgahkIBqhSIg6BlIAUA9IAdhYIAsguIAChVICXgrIhsA+IgIBYIg1BAIAEBQIAogmIAEgDIAKhDICKiIIheCKIAKA4IgpBJIBIgwIBLAiIhFAKIgNA5Ig+AOIALAeg");
	this.shape_19.setTransform(87.3,23.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E63D11").s().p("AiiDvIAngqIhIgtIgFhWIggg5IBah7IADgEIBlAAIBih3IhVCcIhMgDIg/BqIAdALIAzBJIgahkIBqhTIg6BmIAUA9IAdhYIAsguIAChWICXgqIhsA+IgIBXIg1BAIAEBQIAoglIAEgDIAKhDICKiIIhdCJIAKA5IgpBKIBHgxIBLAhIhEALIgOA6Ig9ANIAKAfg");
	this.shape_20.setTransform(87.3,23.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E63D11").s().p("AiiDvIAngpIhIguIgFhWIggg5IBah7IADgFIBlAAIBih3IhVCdIhMgDIg/BqIAdALIAzBJIgahkIBqhSIg6BlIAUA9IAdhYIAsguIAChWICXgqIhsA+IgIBYIg1BAIAEBQIAogmIAEgDIAKhDICKiIIhdCKIAKA4IgpBKIBHgxIBLAiIhEAKIgOA6Ig9ANIAKAfg");
	this.shape_21.setTransform(87.3,23.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E63D11").s().p("AiiDvIAngpIhIguIgFhWIggg5IBdiAIBlAAIBih3IhVCdIhMgDIg/BqIAdALIAzBJIgahkIBqhSIg6BlIAUA9IAdhYIAsguIAChWICXgqIhsA+IgIBYIg1BAIAEBQIAsgpIAKhDICKiIIhdCKIAKA4IgpBKIBHgxIBLAiIhEAKIgOA6Ig9ANIAKAfg");
	this.shape_22.setTransform(87.3,23.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(17));

	// Layer_15
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.25,59.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(31));

	// Layer_14
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.25,59.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({alpha:1},9).wait(29));

	// Layer_13
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.5,59.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({alpha:1},9).wait(28));

	// Layer_12
	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(40.25,59.95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({alpha:1},9).wait(27));

	// Layer_11
	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(52.65,59.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},9).wait(26));

	// Layer_10
	this.instance_6 = new lib.Tween16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.95,59.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({alpha:1},9).wait(25));

	// Layer_9
	this.instance_7 = new lib.Tween17("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(90.05,59.95);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({alpha:1},9).wait(23));

	// Layer_8
	this.instance_8 = new lib.Tween18("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(104.35,59.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},9).wait(22));

	// Layer_7
	this.instance_9 = new lib.Tween19("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(115.15,59.75);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},9).wait(21));

	// Layer_6
	this.instance_10 = new lib.Tween20("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(131.5,59.95);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).to({alpha:1},9).wait(20));

	// Layer_5
	this.instance_11 = new lib.Tween21("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(145.35,59.95);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({alpha:1},9).wait(19));

	// Layer_4
	this.instance_12 = new lib.Tween22("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(157,59.95);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({alpha:1},9).wait(18));

	// Layer_2
	this.instance_13 = new lib.Tween23("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(167.75,59.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({alpha:1},9).wait(17));

	// Layer_17
	this.instance_14 = new lib.Tween24("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(26.7,69.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({y:75.1,alpha:1},10,cjs.Ease.cubicOut).wait(18));

	// Layer_16
	this.instance_15 = new lib.Tween25("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(91,69.3);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off:false},0).to({y:74.8,alpha:1},10,cjs.Ease.cubicOut).wait(12));

	// Layer_1
	this.instance_16 = new lib.Tween26("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.35,69.25);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({y:74.75,alpha:1},10,cjs.Ease.cubicOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.6,78);


// stage content:
(lib.dt_tmr_tvnet_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fade
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadIn).wait(1));

	// logo_DT
	this.instance_1 = new lib.logo_DT();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.6,287.7,1.0894,1.0896,0,0,0,85.9,39.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(71));

	// block_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgYNAvOMAAAheXIAyAAIAAgFMAu3AAAIAAAFMgu3AAAMAu3AAAIAyAAMAAABeXg");
	mask.setTransform(150,819.25);

	// date
	this.instance_2 = new lib.Tween29("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.6,616.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:556.75,alpha:1},15,cjs.Ease.cubicOut).to({startPosition:0},30).to({y:496.75,alpha:0},15,cjs.Ease.cubicIn).to({_off:true},1).wait(130));

	// rezisore
	this.instance_3 = new lib.Tween30("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.25,617.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({y:557.5,alpha:1},15,cjs.Ease.cubicOut).to({startPosition:0},30).to({alpha:0},15,cjs.Ease.quadIn).to({_off:true},1).wait(75));

	// block
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,297.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:819.25},14,cjs.Ease.cubicInOut).to({startPosition:0},100).to({y:297.75},15,cjs.Ease.cubicInOut).wait(71));

	// tt1
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.65,21.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:31.3,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},106).wait(70));

	// tt2
	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(225.4,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:105.4},29,cjs.Ease.cubicOut).to({startPosition:0},70).to({x:55.4},30,cjs.Ease.quartIn).to({_off:true},1).wait(70));

	// tt3
	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(49.75,78.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:169.75},29,cjs.Ease.cubicOut).to({startPosition:0},70).to({x:219.75},30,cjs.Ease.quartIn).to({_off:true},1).wait(70));

	// tt4
	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(192.75,119.35);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({y:109.35,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},96).wait(70));

	// tt5
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(152.5,136.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({y:126.8,alpha:1},15,cjs.Ease.cubicOut).to({_off:true},93).wait(70));

	// img
	this.instance_10 = new lib._img_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(220,258);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:150},54,cjs.Ease.cubicOut).wait(20).to({x:80},55,cjs.Ease.quartIn).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,294.8,430,826.7);
// library properties:
lib.properties = {
	id: '5E6A40F9383F481AB267BAE218AA8852',
	width: 300,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_img.jpg", id:"_img"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5E6A40F9383F481AB267BAE218AA8852'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;